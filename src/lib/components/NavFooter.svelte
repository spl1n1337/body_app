<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores'

    

    function getSubstring(string) {
    const endIndex = string.indexOf('/', 1);
        if (endIndex !== -1) {
            console.log(string.substring(0, endIndex))
            return string.substring(0, endIndex);
        } else {
            console.log(string)
            return string;
        }
    }
    $: trainingsACtive = getSubstring($page.url.pathname);



    onMount(()=>{
    })
</script>

<slot></slot>


<div class="footer__wrapper">
    <div class="footer__nav">
        <a href="/trainings" class="footer__nav-item">
            <div class="footer__icon-container {trainingsACtive == "/trainings" ? '__active' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none" viewBox="0 0 26 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.25 5.25H7a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h2.25c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19 5.25h-2.25A.75.75 0 0 0 16 6v12c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75ZM19.75 7.5H22a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-2.25M6.25 16.5H4a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 4 7.5h2.25M10 12h6M22.75 12h1.5M1.75 12h1.5"/>
                </svg>
            </div>
            <div class="footer__text text-12s {trainingsACtive == "/trainings" ? 'c-blue' : 'c-dark-gray'}">Тренировки</div>
        </a>
        <a href="/challange" class="footer__nav-item">
            <div class="footer__icon-container {trainingsACtive == "/challange" ? '__active' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke="#A5AAB4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.25 5.25v5.1656c0 3.7219 2.9812 6.8063 6.7031 6.8344a6.7484 6.7484 0 0 0 4.8033-1.9604A6.7487 6.7487 0 0 0 18.75 10.5V5.25A.7498.7498 0 0 0 18 4.5H6a.75.75 0 0 0-.75.75ZM9 21h6M12 17.25V21"/>
                    <path stroke="#A5AAB4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5811 12h.9187a3 3 0 0 0 3-3V7.5a.7498.7498 0 0 0-.75-.75h-3M5.4371 12h-.9469a3 3 0 0 1-3-3V7.5a.75.75 0 0 1 .75-.75h3"/>
                  </svg>
            </div>
            <div class="footer__text text-12s {trainingsACtive == "/challange" ? 'c-blue' : 'c-dark-gray'}">Вызов</div>
        </a>
        <a href="/targets" class="footer__nav-item">
            <div class="footer__icon-container {trainingsACtive == '/targets' || trainingsACtive == '/registration' ? '__active' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12 9-9M18.37 5.63a9.02 9.02 0 1 0 1.75 2.49"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.18 8.82a4.5 4.5 0 1 0 1.31 2.93"/>
                </svg>
            </div>
            <div class="footer__text text-12s c-dark-gray {trainingsACtive == '/targets' ? 'c-blue' : 'c-dark-gray'}">Цели</div>
        </a>
        <a href="/profile" class="footer__nav-item">
            <div class="footer__icon-container {trainingsACtive == '/profile' ? '__active' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.98 18.7a6.75 6.75 0 0 1 12.04 0"/>
                  </svg>
            </div>
            <div class="footer__text text-12s c-dark-gray {trainingsACtive == '/profile' ? 'c-blue' : 'c-dark-gray'}">Профиль</div>
        </a>
    </div>
</div>


<style>
    /* .area {
        position: absolute;
        bottom: 100px;
        background: #ffffff;
        left: 50%;
        color: black;
        transform: translateX(-50%);
        z-index: 12;
    } */
    .footer__nav {
        /* position: absolute; */
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--light-gray);
        display: flex;
        justify-content: space-between;
        padding: 2.05vw 6.92vw 1vw;
        z-index: 2;
    }
    .footer__wrapper {
        position: fixed;
        z-index: 20;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--light-gray);
        padding-bottom: var(--sab);
    }
    .footer__nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 0 0 20.5vw;
    }
</style>