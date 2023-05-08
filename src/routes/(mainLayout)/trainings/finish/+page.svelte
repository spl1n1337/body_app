<script>
    import cross from "$lib/icons/cross.svg";
    import finish__bg from "$lib/icons/finish__bg.png";
    import {goto} from '$app/navigation';
</script>


<div class="finish-container bg-blue">

    <div class="cross">
        <img src="{cross}" alt="qwe" class="cross-img">
    </div>

    <div class="finish-banner">
        <div class="finish-title text-16b c-white">Ты&nbsp;завершил 
            эспресс&#8211;
            тренировку!
        </div>
        <div class="finish-img"><img src={finish__bg} alt="qwe"></div>
    </div>
    
   <div class="buttons-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="big-black-button _gray" on:click={()=> goto('/registration')}>
        <div class="start-training-text text-16s">Зарегистрироваться</div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="big-black-button" on:click={()=> goto('/trainings')}>
        <div class="start-training-text text-16s">Завершить тренировку</div>
    </div>
   </div>
</div>




<style>
    .buttons-container {
        position: fixed;
        bottom: 5.64vw;
        left: 7.18vw;
        right: 7.18vw;
    }
    .big-black-button._gray {
        background-color: var(--light-gray);
        margin-bottom: 5.64vw;
    }
    .big-black-button._gray .start-training-text {
        color: var(--dark);
    }
    .finish-banner {
        background: rgba(255, 255, 255, 0.12);
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 23.8vw;
        left: 7.18vw;
        right: 7.18vw;
        
    }
    .finish-img img {
        width: auto;
    }
    .finish-title {
        padding-top: 6.15vw;
        padding-left: 6.15vw;
    }
    .finish-container {
        height: 100vh;
        position: relative;
        overflow: hidden;
        padding: 4.1vw 7.18vw;
    }
    .cross {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 3.07vw;
        width: fit-content;
        float: right;
    }
    .cross img {
        width: auto;
    }
</style>