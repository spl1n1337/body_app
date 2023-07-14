<script>
	import { onMount } from 'svelte';
    import Nothing from "$lib/components/Nothing.svelte";
	import { each } from 'svelte/internal';
    import {linkRoad} from "$lib/stores.js"
    import { goto } from '$app/navigation'
    import Loader from '$lib/components/Loader.svelte';
    import { invalidateAll } from '$app/navigation';
    

    export let data
    console.log(data)
    let token = data.token
    let loader
    


    // STAGES
    let stage = 'challange'
     let challangeAccept = 'unfollow'
    // DATE NOW
    let currentDate = new Date();

    // Получение текущего месяца в виде строки
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let currentMonth = months[currentDate.getMonth()];

    // Получение текущего дня в виде числа
    let currentDay = currentDate.getDate();

    // Получение количества дней в текущем месяце
    let currentYear = currentDate.getFullYear();
    let daysInCurrentMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();

    let daysArray = [];

    // Добавление 15 календарных дней до currentDay
    for (let i = 10; i > 0; i--) {
    let previousDay = currentDay - i;
    if (previousDay > 0) {
        daysArray.push(previousDay);
    } else {
        let daysInPreviousMonth = new Date(currentYear, currentDate.getMonth(), 0).getDate();
        daysArray.push(daysInPreviousMonth + previousDay);
    }
    }

    // Добавление самого currentDay
    daysArray.push(currentDay);

    // Добавление 15 календарных дней после currentDay
    for (let i = 1; i <= 10; i++) {
    let nextDay = currentDay + i;
    if (nextDay <= daysInCurrentMonth) {
        daysArray.push(nextDay);
    } else {
        daysArray.push(nextDay - daysInCurrentMonth);
    }
    }


    // CHALLENGES INFO 
    $: challengesList = data.challenges

    // LOAD VIDEO FUNCTION
    let xhr = null,
        file;

    function handleFileUpload(event, id) {
        loader.classList.add('active')
        console.log('i try')
        if (xhr !== null) {
            xhr.abort()
            // loader.classList.remove('__active')
        }
        // loader.classList.add('__active')
        file = event.target.files[0]

        xhr = new XMLHttpRequest()

        xhr.open('POST', `${$linkRoad}/api/challenges/${id}/upload_video`, true)
        const formData = new FormData()
        formData.append('video', file)
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)

        xhr.send(formData)

        xhr.onload = () => {
            console.log(xhr.status)
            if (xhr.status === 200) {
            loader.classList.remove('active')
            console.log(xhr.status)
            console.log(JSON.parse(xhr.response))
            invalidateAll()
            } else {
            console.log(xhr.status)
            console.log('Ответ сервера:', xhr.response)
            invalidateAll()
            }
        }
    }

    onMount(()=>{
        console.log(challengesList)
    })
</script>

<div bind:this={loader} class="overlay">
    <Loader/>
</div>


{#if !data.user}
        <Nothing/>
{:else if data.user}
<div class="page__wrapper">
    <div class="challange">
        <div class="container">
            <div class="challange__header __unfollow">
                <div class="challange__title text-20b">Вызовы</div>
                <div class="challange__subtitle text-16b c-gray">{currentMonth}</div>
            </div>
        </div>
        <div class="curr-date__wrapper">
            <div class="bg1"></div>
            <div class="dates">
                {#each daysArray as day}
                <div class="date__item {day == currentDay ? '__curr' : ''}">{day}</div>
                {/each}
            </div>
            <div class="bg2"></div>
        </div>
    </div>

    <div class="challange-card__wrapper">
        <div class="container">
            {#each challengesList as challange }
                {#if challange.joined && challange.status !== 'success'}
                <!-- CHALLENGE FOLLOWING CARD -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="challange-card" on:click={()=>{goto(`/challange/${challange.id}`)}}>
                    <div class="challange__title text-16b">{challange.name}
                    </div>
                    <div class="users__wrapper">
                        <div class="user__box">
                            {#if challange.accepted_by.length}
                                {#each challange.accepted_by as accepted_by, i}
                                <div class="user__item" style="z-index: {i + 1};">
                                    {#if accepted_by.avatar}
                                        <img class="{(accepted_by.status === "success") ? 'done' : 'wait'}" src="{$linkRoad + accepted_by.avatar}" alt="q">
                                    {:else}
                                        <div class="name-word {(accepted_by.status === "success") ? 'done' : 'wait'}">{accepted_by.name.slice(0, 1)}</div>
                                    {/if}
                                </div>
                                {/each}
                            {/if}
                        </div>
                    </div>
                    {#if challange.status == 'pending'}
                    <div class="load__button">
                        <div class="load__button-text">Видео обрабатывается</div>
                    </div>
                    {/if}
                    {#if challange.status == 'undone'}
                    <div class="load__button" on:click|stopPropagation>
                        <input on:change|stopPropagation={(e)=>{handleFileUpload(e, challange.id)}} type="file" accept="video/*">
                        <div class="load__button-text">Загрузить видео отчет</div>
                    </div>
                    {/if}
                    {#if challange.status == 'fail'}
                    <div class="load__button fail" on:click|stopPropagation>
                        <input on:change|stopPropagation={(e)=>{handleFileUpload(e, challange.id)}} type="file" accept="video/*">
                        <div class="load__button-text">Попробовать снова</div>
                    </div>
                    {/if}
                </div>
                <!-- CHALLENGE FOLLOWING CARD -->
                {/if}   
                {#if !challange.joined}
                <!-- CHALLENGE UNFOLLOWING CARD -->
                <div class="challange-card __new">
                    <div class="challange__title text-16b">{challange.name}</div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div class="load__button __more" on:click={()=>{goto(`/challange/${challange.id}`)}}>
                        Подробнее
                    </div>
                </div>
                <!-- CHALLENGE UNFOLLOWING CARD -->
                {/if}
                {#if challange.joined && challange.status == 'success'}
                <!-- CHALLENGE FOLLOWING CARD -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="challange-card __done" on:click={()=>{goto(`/challange/${challange.id}`)}}>
                    <div class="challange__title text-16b">{challange.name}
                    </div>
                    <div class="users__wrapper">
                        <div class="user__box">
                            {#if challange.accepted_by.length}
                                {#each challange.accepted_by as accepted_by, i}
                                <div class="user__item" style="z-index: {i + 1};">
                                    {#if accepted_by.avatar}
                                        <img class="{(accepted_by.status === "success") ? 'done' : 'wait'}" src="{$linkRoad + accepted_by.avatar}" alt="q">
                                    {:else}
                                        <div class="name-word {(accepted_by.status === "success") ? 'done' : 'wait'}">{accepted_by.name.slice(0, 1)}</div>
                                    {/if}
                                </div>
                                {/each}
                            {/if}
                        </div>
                    </div>
                    <div class="load__button __done">
                        <div class="load__button-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4375 8.125L8.85156 12.5L6.5625 10.3125" stroke="#18D183" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#18D183" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                        </div>
                        <div class="load__button-text">Задание выполнено</div>
                    </div>
                </div>
                <!-- CHALLENGE FOLLOWING CARD -->
                {/if}
            {/each}
        </div>
    </div>

</div>
{/if}
<style>
    .page__wrapper {
        overflow-x: hidden;
        position: relative;
        height: 100%;
    }
    .challange {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        z-index: 100;
    }
    .container {
        padding: 0 7.18vw;
    }
    .challange__header.__unfollow {
        padding-top: 8.2vw;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        position: relative;
        flex-direction: row;
    }
    .challange__header.__unfollow .challange__title {
        margin-bottom: 0;
    }
    .curr-date__wrapper {
        padding-top: 4vw;
        position: relative;
        background-color: #fff;
    }
    .dates {
        display: flex;
        overflow: hidden;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        padding-bottom: 2vw;
    }
    .date__item {
        color: var(--gray);
        text-align: center;
        font-family: 'Unbounded', cursive;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }
    .date__item.__curr {
        color: var(--blue);
    }
    .date__item:not(:last-child) {
        margin-right: 8px;
    }
    .bg1, .bg2 {
        width: 32px;
        height: 24px;
        flex-shrink: 0; 
        position: absolute;
        top: 0;
        z-index: 2;
    }
    .bg1 {
        left: 0;
        background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
    }
    .bg2 {
        right: 0;
        background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
        transform: rotate(180deg);
    }
    .challange-card {
        padding: 5.12vw 6.15vw;
        border-radius: 20px;
        background: rgba(88, 155, 255, 0.08);
    }
    .challange-card.__done {
        background: var(--light-green, #EDFCF5);
    }
    .challange-card__wrapper .container {
        position: relative;
        top: 32vw;
        padding-bottom: calc(32vw + var(--sab));
    }
    .challange-card:not(:first-child) {
        margin-top: 20px; /* Замените 20px на желаемое значение отступа */
    }

    .challange__title {
        width: 80%;
    }
    .user__box {
        margin-top: 0.3vw;
        position: relative;
        display: grid;
        grid-template-columns: repeat(5, 32px);
    }
    .user__item {
        position: relative;
        border: 2px solid #F2F7FF;
        background: #DFECFF;
        border-radius: 100px;
        overflow: hidden;
        width: 12.3vw;
        height: 12.3vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user__item img, .user__item .name-word {
        width: 10.25vw;
        height: 10.25vw;
        border-radius: 100px;
        background: #DFECFF;
        overflow: hidden;
        padding: 4px;
        border: 2px solid;
    }
    .name-word {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    :global(.user__item .done) {
        border-color: var(--green) !important;
    }
    :global(.user__item .wait) {
        border-color: var(--red) !important;
    }
    .users__wrapper {
        margin-bottom: 6.15vw;
    }
    .load__button {
        position: relative;
        cursor: pointer;
        border-radius: 16px;
        background: var(--dark);
        display: flex;
        padding: 2.56vw 6.15vw;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        color: var(--white, #FFF);
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
    }
    .load__button input {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        cursor: pointer;
        opacity: 0;
    }
    .load__button.__done {
        background: rgba(24, 209, 131, 0.12);
        color: var(--green);
    }
    .load__button.__done .load__button-icon {
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .load__button.__more {
        background: rgba(88, 155, 255, 0.12);
        color: var(--blue);
        padding: 10px 24px;
        margin-top: 4vw;
    }
    .overlay {
        position: fixed; /* Sit on top of the page content */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.8); /* Black background with opacity */
        z-index: 200; /* Specify a stack order in case you're using a different order for other elements */
        cursor: pointer; /* Add a pointer on hover */
        display: none;
    }
    :global(.overlay.active) {
        display: block !important;
    }
</style>