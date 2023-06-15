<script>
    import { goto } from '$app/navigation';
    import hero from "$lib/TrainingsIcons/main.jpg"
    export let data;


</script>

<main>
    <div class="main-title text-32b c-white">TopBody</div>
    <div class="main-vers text-20b c-white">version 0.2</div>
    <div class="overlay"></div>
    <img src={hero} alt="q" class="main-img">
    <a href="/trainings" class="main-descr text-16s c-white">Начать тестирование</a>
</main>

<style>
    main {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
    }
    .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
    }
    img {
        position: relative;
    }
    .main-title {
        position: fixed;
        top: 6vw;
        left: 50%;
        z-index: 3;
        transform: translateX(-50%);
    }
    .main-descr {
        position: fixed;
        bottom: 20vw;
        left: 7vw;
        right: 7vw;
        text-align: center;
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(5px);
        border-radius: 20px;
        padding: 4vw 0;
        z-index: 6;
    }
    .main-vers {
        position: fixed;
        bottom: 6vw;
        left: 50%;
        transform: translateX(-50%);
        z-index: 6;
        opacity: 0.3;
    }
</style>