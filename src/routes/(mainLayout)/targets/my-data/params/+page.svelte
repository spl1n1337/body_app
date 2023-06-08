<script>
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import Cross from "$lib/components/Cross.svelte";
    import Container from "$lib/components/Container.svelte";
    import {goto} from '$app/navigation';
    import { onMount } from "svelte";
    import { linkRoad } from '$lib/stores.js';


    export let data;

    let token = data.token;
    let opacity = false;
    let Goto=()=> goto('./');

    let user = data.user;
    let inputWeight,
        inputHeight,
        inputAge,
        inputMale,
        inputFemale,
        form;

    async function formSand() {
        // Получение значений полей формы
        const userWeight = inputWeight.value;
        const userHeight = inputHeight.value;
        const userAge = inputAge.value;
        const userSex = inputMale.checked ? 'male' : 'female';

        const outputData = {
            height: (userHeight || user) ? (userHeight || user.height) : (''),
            sex: (userSex || user) ? (userSex || user.sex) : (''),
            age: (userAge || user) ? (userAge || user.age) : (''),
        }
        if(userWeight){
            outputData.weight = userWeight;
        }
        // Отправка данных формы (здесь замените URL на ваш URL для обработки формы)
        try {
            const response = await fetch(`${$linkRoad}/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`,
            },
            body: JSON.stringify(outputData),
            });

            if (response.ok) {
            const data = await response.json();
            Goto();
            } else {
            throw new Error('Произошла ошибка при отправке формы.');
            }
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
        }
    }

    onMount(()=>{
    })

</script>

<TrainingHeader>
    <Cross {opacity}{Goto}/>
</TrainingHeader>

<Container>
    <div style="position:absolute; top: 50%;left:50%;font-size:30px;color:red;"></div>
    <div class="reg-title text-20b">Ваши параметры</div>
    <div class="form-container">
            <form bind:this={form}>
                <div class="name-container">
                    <label class="text-12s c-dark-gray" for="weight">Вес</label>
                    <!-- svelte-ignore missing-declaration -->
                    <input  bind:this={inputWeight} class="text-14s" type="number" name="weight" maxlength="6" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" placeholder={user.params.weight[user.params.weight.length - 1].weight} />
                </div>
        
                <div class="lastname-container">
                    <label class="text-12s c-dark-gray" for="height">Рост</label>
                    <input bind:this={inputHeight} class="text-14s" type="number" name="height" maxlength="3" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    placeholder={user.height}/>
                </div>

                <div class="email-container">
                    <label class="text-12s c-dark-gray" for="age">Возраст</label>
                    <input bind:this={inputAge} class="text-14s" type="number" name="age" maxlength="3"     oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    placeholder={user.age}/>
                </div>
        
                <div class="password-container">
                    <label class="text-12s c-dark-gray" for="password">Пол</label>
                    <div class="sex-container">
                        <label  class="text-14s sex-female" for="sex">Женский<input bind:this={inputFemale} type="radio" name="sex" value="female" id="female" checked={(!user.sex || user.sex == 'female') ? (true) : ('')}></label>
                        <label  class="text-14s sex-male" for="sex">Мужской<input bind:this={inputMale} type="radio" name="sex" value="male" id="male" checked={(user.sex == 'male') ? (true) : ('')}></label>
                    </div>
                </div>

        
            </form>
    </div>

    

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="button-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _black" on:click={() => formSand()}>
            <div class="start-training-text text-16s">Сохранить</div>
        </div>
    </div>
</Container>




<style>
    .sex-container {
        flex-direction: row;
        margin-top: 2.05vw;
        padding-left: 4px;
    }
    .sex-container label{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    input[type='radio'] {
        position: relative;
        border: 1px solid var(--gray);
        width: 20px;
        height: 20px;
        background-color: none;
        /* outline-offset: 4px; */
        border-radius: 100px;
        padding: 0;
        margin-right: 12px;
    }
    input[type='radio']:checked {
        border: 1px solid #589BFF;
    }
    input[type='radio']:checked::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background-color: #589BFF;
        border-radius: 100px;

    }
    .sex-female {
        margin-right: 24px;
    }
    form div {
        display: flex;
        flex-direction: column;
    }
    .name-container, .lastname-container, .email-container, .password-container  {
        position: relative;
        margin-bottom: 5.3vw;
    }
    form div input {
        border-bottom: 1px solid #DCDEE3;
        padding-bottom: 6px;
    }
    form div input:focus {
        border-bottom: 1px solid #589BFF;
    }
    .form-container {
        background: #F7F8FC;
        border-radius: 16px;
        padding: 5.13vw 6.15vw;
        margin-bottom: 20vw;
    }
    .big-black-button._black {
        margin-bottom: 26.15vw !important;
    }
    .reg-title {
        margin-top: 2.05vw;
        margin-bottom: 4.1vw;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 7.18vw;
        position: fixed;
        bottom: 22px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 389px) {
        .button-container {
            bottom: 0;
        }
        .reg-title {
            margin-top: 0;
        }
        .big-black-button._black {
            margin-bottom: 1vw;
        }
    }
    label.sex-male {
        /* flex-direction: row; */
    }
    .name-container::after {
        content: 'кг';
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: calc(14/390*100vw);
        line-height: 1.43em;
        text-align: right;
        color: #A5AAB4;
        position: absolute;
        right: 0;
        bottom: 1.53vw;
    }
    .lastname-container::after {
        content: 'см';
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: calc(14/390*100vw);
        line-height: 1.43em;
        text-align: right;
        color: #A5AAB4;
        position: absolute;
        right: 0;
        bottom: 1.53vw;
    }
    .email-container::after {
        content: 'год';
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: calc(14/390*100vw);
        line-height: 1.43em;
        text-align: right;
        color: #A5AAB4;
        position: absolute;
        right: 0;
        bottom: 1.53vw;
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
</style>