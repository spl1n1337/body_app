<script>
    import BackArrow from "$lib/components/BackArrow.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import Container from "$lib/components/Container.svelte"
    import nextWhite from "$lib/icons/chevron-right.svg";
    import nextBlack from "$lib/icons/chevron-right-black.svg"
    import vk from "$lib/icons/vk.svg";
    import mail from "$lib/icons/mail.svg";
    import {goto} from '$app/navigation';

    const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };

</script>

<TrainingHeader>
    <BackArrow {backFunction}/>
</TrainingHeader>




<Container>

    <div class="reg-title text-32b">Войти</div>
    <div class="reg-descr text-16m c-dark-gray">Выберите способ авторизации в приложении TopBody</div>
    
    <div class="start-training-button">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _white" on:click={()=> goto('#')}>
            <div class="start-training-icon"><img src="{vk}" alt="start"></div>
            <div class="start-training-text text-16s c-black">Продолжить с Вконтакте</div>
            <div class="start-training-icon"><img src="{nextBlack}" alt="start"></div>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _blue" on:click={()=> goto('#')}>
            <div class="start-training-icon"><img src="{mail}" alt="start"></div>
            <div class="start-training-text text-16s">Продолжить с E-mail</div>
            <div class="start-training-icon"><img src="{nextWhite}" alt="start"></div>
        </div>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="button-container">
        <div class="big-black-button __white" on:click={()=> goto('/registration/user_registration')}>
            <div class="start-training-text c-black text-16s">Зарегистрироваться</div>
        </div>
    </div>
</Container>




<style>
    .big-black-button._white {
        background: var(--white);
        border: 1px solid #E8EBF2;
        margin-bottom: 3.07vw;
    }
    .big-black-button._blue {
        background-color: var(--blue);
    }
    .start-training-button {
        /* position: fixed; */
        width: 100%;
        background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    }
    .start-training-icon {
        margin-right: 2.56vw;
    }

    .reg-descr {
        margin-bottom: 8.2vw;
    }
    .reg-title {
        margin-top: 6.15vw;
        margin-bottom: 2vw;
    }
    .big-black-button.__white {
        background-color: var(--white);
        
    }
    .button-container {
        display: flex;
        padding: 0 7.18vw;
        position: fixed;
        bottom: 8.71vw;
        left: 50%;
        transform: translateX(-50%);
    }
</style>