<script>
    import Container from "$lib/components/Container.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import BackArrow from "$lib/components/BackArrow.svelte";
    import {goto} from '$app/navigation';
    import Cropper from "svelte-easy-crop";
    import { getCroppedImg } from "$lib/components/canvasUtils.js"
    import {linkRoad} from "$lib/stores.js"

    export let data;
    let token = data.token;
    // console.log(token)
    let userData = data.user;
    let image, fileinput, pixelCrop, croppedImage, forma;

    async function postAvatar() {
        const qwe =  await url2File(croppedImage, 'smaple.png');
        // console.log(qwe instanceof File)
        // console.log(qwe)
        const formData = new FormData();
        formData.append('avatar', qwe);
        // console.log(formData.get('avatar'))
        const response = await fetch(`${$linkRoad}/api/avatar`, {

            method: 'POST',
            headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization:`Bearer ${token}`,
            },
            body: formData
        })
        // .then(()=>goto('/targets'))
        
    }
    async function url2File(url, fileName){
        const blob = await (await fetch(url)).blob()
        // console.log(blob);
        return new File([blob], fileName, {type: blob.type})
    }
    $: currentImage = croppedImage;
	
    function onFileSelected(e) {
        document.querySelector('.modalphoto').classList.remove('_active');
        let imageFile = e.target.files[0];
          let reader = new FileReader();
          reader.onload = e => {
              image = e.target.result
          };
          reader.readAsDataURL(imageFile);
      }
  
      let profilePicture, style;
          
      function previewCrop(e){
          pixelCrop = e.detail.pixels;
          const { x, y, width } = e.detail.pixels;
          const scale = 200 / width;	
          profilePicture.style=`margin: ${-y*scale}px 0 0 ${-x*scale}px; width: ${profilePicture.naturalWidth * scale}px;`
      }
      
      async function cropImage(){
          croppedImage = await getCroppedImg(image, pixelCrop);
          postAvatar();
      }
      function reset() {
          croppedImage = null;
          image = null;
      }


    let backFunction = () => goto('/profile');
    let bgcolor = 'aic';
    let errors = {
        names: false,
        email: false,
    }
    function formValidate() {
        errors.names = false,
        errors.email = false
        
        const name = forma.elements['name'].value;
        const lastname = forma.elements['lastname'].value;
        const email = forma.elements['email'].value;
        const forbiddenChars = /[!@#$%^&*(),.?":{}|<>]/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if(!name && !lastname && !email) {
            backFunction()
            return
        }
        
        if(name){
            if (name.match(forbiddenChars) || name.includes(' ')) {
            errors.names = true;
            }
        }
        if(lastname){
            if (lastname.match(forbiddenChars) || lastname.includes(' ') || lastname == '') {
            errors.names = true;
            }  
        }
        if(email) {
            if (!email.match(emailRegex)) {
            errors.email = true;
        }
        }
        if(!errors.names && !errors.email) {
            handleFormSubmit();// handleFormSubmit()
        }
    }

    async function handleFormSubmit() {
        const formData = new FormData(forma);
        const dataOutput = {};
        for (const [name, value] of formData.entries()) {
            if(value) {
                dataOutput[name] = value;
            }
        }
        console.log(dataOutput)
        try {
        const response = await fetch(`${$linkRoad}/api/user`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`},
            body: JSON.stringify(dataOutput)
        });

        if (response.ok) {
            // Успешный ответ от сервера
            // Вы можете выполнить дополнительные действия здесь, например, перенаправление на другую страницу
            backFunction()
        } else {
            // Обработка ошибки
            const errorData = await response.json();
            console.error('Ошибка при отправке формы:', errorData.detail)
        }
        } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        }
    }
    async function deleteAvatar() {
        try {
        const response = await fetch(`${$linkRoad}/api/avatar`, {
            method: 'DELETE',
            headers: {Authorization:`Bearer ${token}`},
        });
        if(response.ok) {
            goto('/profile')
        }
        } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        }
    }
    async function deleteUser() {
        try {
        const response = await fetch(`${$linkRoad}/api/delete_user`, {
            method: 'POST',
            headers: {Authorization:`Bearer ${token}`},
        });
        if(response.ok) {
            goto('/trainings')
        }
        } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        }
    }
</script>

<TrainingHeader {bgcolor}>
    <BackArrow {backFunction}/>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="save text-16s c-blue" on:click={()=>{formValidate()}}>Сохранить</div>
</TrainingHeader>

<Container>
    <div class="text-20b title">Настройки</div>

    <div class="user-container bg-l-gray">
        <div class="user-icon">
            {#if croppedImage}
            <img src="{croppedImage}" alt="q">
            {:else if userData.avatar}
            <img src="{userData.avatar}" alt="q">
            {/if}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edit-photo text-14s c-blue" on:click={()=> document.querySelector('.modalphoto').classList.add('_active')}>Редактировать фото </div>
    </div>
    <form action="#" class="edit-form" bind:this={forma}>
        <div class="name-container">
            <label class="text-12s c-dark-gray" for="weight">Имя</label>
            <input class="text-14s {errors.names ? 'error' : ''}" type="text" name="name" maxlength="20"  placeholder="{userData.name}"/>
        </div>

        <div class="lastname-container">
            <label class="text-12s c-dark-gray" for="height">Фамилия</label>
            <input class="text-14s {errors.names ? 'error' : ''}" type="text" name="lastname" maxlength="20"  placeholder="{userData.lastname}"/>
        </div>

        <div class="email-container">
            <label class="text-12s c-dark-gray" for="email">Почта</label>
            <input class="text-14s {errors.email ? 'error' : ''}" type="email" name="email" maxlength="30" placeholder="{userData.email}"/>
        </div>

    </form>


    <div class="edit-btn-wrapper">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="exit text-14s bg-l-gray" on:click={()=> document.querySelector('.modalexit').classList.add('_active')}>Выход</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="delete text-14s c-red" on:click={()=>{deleteUser()}}>Удалить профиль</div>
    </div>

</Container>


<div class="modalphoto" >
    <div class="photo-dialog">
        <div class="swiper"></div>
        <div class="photo-dialog__wrapper">
            <div class="photo-dialog__title text-14s">Изменить фотографию?</div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cancel text-14s bg-l-gray" on:click={()=>{fileinput.click();}}>Выбрать из галерии</div>
            <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="delete-button text-14s c-red" on:click={()=>deleteAvatar()}>Удалить</div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cancel text-14s" on:click={()=> document.querySelector('.modalphoto').classList.remove('_active')}>Отменить</div>
        </div>

    </div>
</div>

{#if image && !croppedImage}
    <div class="cropper-box" style="position: relative; width: 100%; height: 100%;">
        <Cropper
            {image}
            aspect={1}
            zoom=1
            crop={{x:0, y:0}}
            on:cropcomplete={previewCrop}
        />
    </div>
    <div class="prof-pic-wrapper">
        <img
            bind:this={profilePicture}
            class="prof-pic"
            src={image}
            alt="Profile example"
            {style}
        />
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="save-avatar text-16s c-blue" on:click={()=>{cropImage()}}>Сохранить</div>
{/if}





<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modalexit">
    <div class="photo-dialog">
        <div class="swiper"></div>
        <div class="photo-dialog__wrapper">
            <div class="photo-dialog__title text-14s">Вы уверены, что хотите<br>выйти из профиля?</div>
            <div class="cancel text-14s bg-l-gray" on:click={()=> goto('/logout')}>Да</div>
            <div class="delete-button text-14s" on:click={()=> document.querySelector('.modalexit').classList.remove('_active')}>Отмена</div>
            
        </div>

    </div>
</div>


<style>
    .save-avatar {
        position: absolute;
        z-index: 11;
        bottom: calc(20vh + var(--sab));
        left: 50%;
        transform: translateX(-50%);
    }
    .photo-dialog__title {
        margin-bottom: 8.2vw;
    }
    .swiper {
        width: 28px;
        height: 4px;
        background: #E7EBF4;
        border-radius: 20px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .delete-button {
        padding: 2vw 0;
        text-align: center;
        width: 100%;
        margin: 1vw 0;
    }
    .cancel {
        border-radius: 16px;
        padding: 3vw 0;
        text-align: center;
        margin-bottom: 1vw;
    }
    .photo-dialog__title {
        text-align: center;
        padding: 2vw 0;
    }
    .photo-dialog {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.5vw 7vw 4vw 7vw;
        background: #FFFFFF;
        border-radius: 20px 20px 0px 0px;
        opacity: 1;
    }
    .photo-dialog__wrapper {
        padding-top: 6vw;
    }
    .modalphoto, .modalexit {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background: rgb(31 40 48 / 50%);
        z-index: 100;
        visibility: hidden;
    }
    .edit-btn-wrapper {
        position: fixed;
        bottom: calc(22vw + var(--sab));
        left: 7.18vw;
        right: 7.18vw;
    }
    .delete {
        text-align: center;
        margin-top: 4.5vw;
    }
    .exit {
        width: 100%;
        text-align: center;
        padding: 3vw 0;
        border-radius: 16px
    }
    form div {
        display: flex;
        flex-direction: column;
    }
    .name-container, .lastname-container, .email-container  {
        position: relative;
    }
    .lastname-container {
        margin: 5.3vw 0;
    }
    form div input {
        border-bottom: 1px solid #DCDEE3;
        padding-bottom: 6px;
    }
    form div input:focus {
        border-bottom: 1px solid #589BFF;
    }
    .edit-form {
        background: #F7F8FC;
        border-radius: 16px;
        padding: 6vw;
        margin-bottom: 20vw;
    }

    .user-container {
        z-index: 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 6vw;
        border-radius: 16px;
        margin-bottom: 4.5vw;
    }
    .user-icon {
        width: 28.7vw;
        height: 28.7vw;
        border-radius: 100px;
        overflow: hidden;
        margin-bottom: 2vw;
        background-color: #fff;
    }
    .footer__nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--light-gray);
        display: flex;
        justify-content: space-between;
        padding: 2.05vw 6.92vw 1vw;
        z-index: 2;
    }
    .footer__nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 0 0 20.5vw;
    }
    :global(header.aic) {
        align-items: center;
    }
    .title {
        margin-bottom: 4.5vw;
    }
    @media (max-width: 389px) {
        .user-container {
            padding: 2vw;
        }
        .user-icon {
            width: 25vw;
            height: 25vw;
        }
    }
    :global(.modalphoto._active, .modalexit._active) {
        visibility: visible !important;
    }
    .prof-pic-wrapper{
          height: 200px;
          width: 200px;
          position: relative;
          border: solid;
          overflow: hidden;
      }
      
      .prof-pic{
          position: absolute;
      }
      :global(.cropperArea) {
        border-radius: 100%;
        color: rgba(0, 0, 0, 0.9) !important;
      }
      :global(.grid.svelte-12kodkg:before) {
        border: none !important;
      }
      :global(.grid.svelte-12kodkg:after) {
        border: none !important;
      }
      .prof-pic-wrapper {
        display: none;
      }
      .cropper-box {
        z-index: 10;
      }
      :global(.image) {
        max-height: none !important;
      }
      input.error {
        border-color: red;
    }
</style>