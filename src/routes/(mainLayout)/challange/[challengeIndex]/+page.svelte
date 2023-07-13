<script>
    import TrainingHeader from '$lib/components/TrainingHeader.svelte';
    import BackArrow from "$lib/components/BackArrow.svelte"
    import Container from "$lib/components/Container.svelte"
    import DiscriptionChallange from '$lib/components/DiscriptionChallange.svelte';
    import CalendarChallange from '$lib/components/CalendarChallange.svelte';
    import { linkRoad } from "$lib/stores.js";
    import { invalidateAll } from '$app/navigation';
    import { onMount } from 'svelte';


    import { goto } from '$app/navigation'

    export let data
    console.log(data)

    let token = data.token
    $: pageInfo = data.challengeData
    $: user = data.user
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
    }
    
    function subscribeUser(action, userID) {
        fetch(`${$linkRoad}/api/${action}/${userID}`, {
        method: 'POST',
        headers,
        })
        .then((response) => {
            if(response.ok) {
                console.log(response.ok)
                invalidateAll()
            }
        })
        .then(()=>invalidateAll())
        // .then((data) => {console.log(data)})
        .catch((error) => {
            // Обработка ошибок
            console.error(error)
        })
    }
    function subscribeChallenge(action, challengeID) {
        fetch(`${$linkRoad}/api/challenges/${challengeID}/${action}`, {
        method: 'POST',
        headers,
        })
        .then((response) => {
            if(response.ok) {
                console.log(response.ok)
                invalidateAll()
            }
        })
        .then(()=>invalidateAll())
        .then(() => isFollow())
        .catch((error) => {
            // Обработка ошибок
            console.error(error)
        })
    }

    function getUserResult(userID, challengeID) {
        fetch(`${$linkRoad}/api/user_challenge/${userID}/${challengeID}`, {
        method: 'GET',
        headers,
        })
        .then((response) => response.json())
        .then((data) => {console.log(data.calendar)})
        .catch((error) => {
            // Обработка ошибок
            console.error(error)
        })
    }


    let htmlElements
    let events = [
        // События мыши
        'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'contextmenu',
        // События сенсорного экрана
        'touchstart', 'touchend', 'touchmove', 'touchcancel',
        // События клавиатуры
        'keydown', 'keyup', 'keypress',
        // События формы
        'focus', 'blur', 'change', 'input', 'submit',
        // События окна
        'resize', 'scroll',
        // События драг-и-дропа
        'dragstart', 'dragend', 'dragenter', 'dragleave', 'dragover', 'drop'
    ];

    function eventHandler(event) {
        event.preventDefault()
        event.stopPropagation()
    }
    let calenderLabel
    let arrows
    let monthIndex = (new Date()).getMonth();
    const months = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];
    let currentMonth = months[monthIndex]
    let yearNow

    function getCurrCalenderPage(params) {
        filteredData = parseCalendarData(pageInfo, monthIndex + 1);
        setActiveDaysClasses()
        let pages = document.querySelectorAll('.grid .svelte-jmgdr0')
        setTimeout(()=>{
            pages.forEach((page) =>{
                if(!!page.parentNode) {
                    let x = Number(page.parentNode.style.transform.substring(11, page.parentNode.style.transform.length - 3))
                    if(x < 100 && x > -100) {
                        console.log(page)
                    }
                }


        })
        }, 1000)
    }
    function parseCalendarData(pageInfo, monthIndex) {
        const newData = [];
        
        pageInfo.calendar.forEach((item) => {
            const keys = Object.keys(item);
            if(keys[0] == today) {
                newData.push({...item});
            }
            if (keys.length > 0) {
            const date = keys[0];
            const [day, month, year] = date.split(".");
            
            if (parseInt(month) === monthIndex && yearNow - 2000 == year) {
                const value = item[date];
                if (value !== null) {
                newData.push({
                    date: date,
                    value: value
                });
                }
            }
            }
        });
        
        return newData;
    };
    const getCurrentDate = () => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear().toString().slice(-2);

    // Добавляем ведущий ноль, если число состоит из одной цифры
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return day + '.' + month + '.' + year;
    }

    let today = getCurrentDate()
    console.log(today)



    let filteredData
    function setActiveDaysClasses() {
        filteredData = parseCalendarData(pageInfo, monthIndex + 1);
        calendarDaysNodes.forEach((item) => {
            item.querySelectorAll('a.svelte-1unzsxu').forEach((node) => {
            // тут нужно сравнивать значения и тест и добовлять класс
            node.classList.remove('undone')
            node.classList.remove('success')
            if(!node.classList.contains('outsider')){
                const day = parseInt(node.textContent);
                const matchingData = filteredData.find((data) => {
                    const dataDay = parseInt(data.date.split('.')[0]);
                    return dataDay === day;
                });
                if (matchingData) {
                    const { value } = matchingData;
                    node.classList.add(value);
                }
            }
            })
        })
    }

    let calendarDaysNodes
    let iframe
    onMount(()=>{
        // console.log(user)  
        if(pageInfo.joined) {
            iframe = document.querySelector('iframe')
            calendarDaysNodes = document.querySelectorAll('.grid.svelte-jmgdr0')
            arrows = document.querySelectorAll('div.button.svelte-1ro74h8')
            calenderLabel = document.querySelector('.button.label.svelte-1ro74h8')


            htmlElements = document.querySelectorAll('.svelte-198r3wi')
            console.log(htmlElements)
            events.forEach(function(event) {
                htmlElements[0].addEventListener(event, eventHandler);
            });
            events.forEach(function(event) {
                iframe.addEventListener(event, eventHandler);
            });
            yearNow = +calenderLabel.textContent.split(' ')[1]
            calenderLabel.textContent = currentMonth + ' ' + yearNow

            arrows[0].addEventListener('click', (e)=>{
                if(monthIndex != 0) {
                    monthIndex-- 
                } else {
                    monthIndex = 11
                    yearNow--
                }
                currentMonth = months[monthIndex]
                months.indexOf(currentMonth)
                calenderLabel.textContent = currentMonth + ' ' + yearNow
                getCurrCalenderPage()
            })
            arrows[1].addEventListener('click', (e)=>{
                if(monthIndex == 11) {
                    monthIndex = 0
                    yearNow++
                } else {
                    monthIndex++
                }
                currentMonth = months[monthIndex]
                months.indexOf(currentMonth)
                calenderLabel.textContent = currentMonth + ' ' + yearNow
                getCurrCalenderPage()
            }) 
            console.log(pageInfo)  
            filteredData = parseCalendarData(pageInfo, monthIndex + 1);
            console.log(filteredData);
            setActiveDaysClasses()

        }
        
    })
    function isFollow(){
        calendarDaysNodes = document.querySelectorAll('.grid.svelte-jmgdr0')

        iframe = document.querySelector('iframe')
        events.forEach(function(event) {
            iframe.addEventListener(event, eventHandler);
        });
        arrows = document.querySelectorAll('div.button.svelte-1ro74h8')
        calenderLabel = document.querySelector('.button.label.svelte-1ro74h8')


        htmlElements = document.querySelectorAll('.svelte-198r3wi')
        console.log(htmlElements)
        events.forEach(function(event) {
            htmlElements[0].addEventListener(event, eventHandler);
        });
        yearNow = +calenderLabel.textContent.split(' ')[1]
        calenderLabel.textContent = currentMonth + ' ' + yearNow

        arrows[0].addEventListener('click', (e)=>{
            if(monthIndex != 0) {
                monthIndex-- 
            } else {
                monthIndex = 11
                yearNow--
            }
            currentMonth = months[monthIndex]
            months.indexOf(currentMonth)
            calenderLabel.textContent = currentMonth + ' ' + yearNow
            getCurrCalenderPage()
        })
        arrows[1].addEventListener('click', (e)=>{
            if(monthIndex == 11) {
                monthIndex = 0
                yearNow++
            } else {
                monthIndex++
            }
            currentMonth = months[monthIndex]
            months.indexOf(currentMonth)
            calenderLabel.textContent = currentMonth + ' ' + yearNow
            getCurrCalenderPage()
        }) 
        console.log(pageInfo)  
        filteredData = parseCalendarData(pageInfo, monthIndex + 1);
        console.log(filteredData);
        setActiveDaysClasses()

    }
</script>


<TrainingHeader>
    <BackArrow backFunction={()=>{goto('/challange')}}/>
            {#if !pageInfo.joined}
                <div class="allow__users">
                    <div class="allow__users__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path stroke="#589BFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.0002 12.0001c2.3011 0 4.1666-1.8655 4.1666-4.1667 0-2.3012-1.8655-4.1667-4.1666-4.1667-2.3012 0-4.1667 1.8655-4.1667 4.1667 0 2.3012 1.8655 4.1667 4.1667 4.1667ZM19.1585 20.3333c0-3.225-3.2084-5.8333-7.1584-5.8333s-7.1583 2.6083-7.1583 5.8333"/>
                        </svg>
                    </div>
                    <div class="allow__users__amount c-blue text-16b">{pageInfo.accepted_by.length}</div>
                </div>
            {:else}
            <div class="challange__header">
                <div class="challange__header-title text-14s">Результаты вызова</div>
                <div class="challange__header-name text-16b">Вы</div>
            </div>

            <div class="profile-icon">
                {#if user.avatar}
                    <img src={user.avatar} alt="qweqw">
                {:else}
                    <div class="name-word">{user.name.slice(0, 1)}</div>
                {/if}
            </div>
            {/if}

</TrainingHeader>
<Container>
    <div class="challange__title text-20b">{pageInfo.name}</div>
    {#if !pageInfo.joined}
        <DiscriptionChallange  onClick={()=>{subscribeChallenge('accept', pageInfo.id)}}/>
    {:else if pageInfo.joined}
    <div class="calender-container">
        <CalendarChallange/>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="unfollow__challange text-14b c-blue" on:click={()=>{subscribeChallenge('cancel', pageInfo.id)}}>Отказаться от вызова</div>
    </div>
    {/if}


    <div class="description__title text-16b">Список участников</div>
    {#if pageInfo.accepted_by.length}
    <div class="subscribed__users">
        {#each pageInfo.accepted_by as user }

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="subscribed__user-item" on:click={()=>{getUserResult(user.id, pageInfo.id)}}>
            <div class="subscribed__user-info">
                {#if user.avatar}
                    <div class="subscribed__user-icon">
                        <img src={$linkRoad + user.avatar} alt="">
                    </div>
                {/if}
                {#if !user.avatar}
                    <div class="subscribed__user-icon name-word" >
                        <div>{user.name.slice(0, 1)}</div>
                    </div>
                {/if}
                <div class="subscribed__user-name text-16s">{user.name}</div>
            </div>
            {#if !user.followed}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="subscribed__user-button text-14s" on:click={()=>{subscribeUser('follow', user.id)}}>Отслеживать</div>
            {:else}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="subscribed__user-button text-14s __active" on:click={()=>{subscribeUser('unfollow' ,user.id)}}>Отписаться</div>
            {/if}
        </div>
        {/each}
        <!-- <div class="subscribed__user-item">
            <div class="subscribed__user-info">
                <img src={user_icon} alt="" class="subscribed__user-icon">
                <div class="subscribed__user-name text-16s">Helen</div>
            </div>
            <div class="subscribed__user-button text-14s">Отслеживать</div>
        </div> -->
    </div>
    {/if}





</Container>

<style>

    :global(.user__item img.done) {
        border-color: var(--green) !important;
    }
    :global(.user__item img.wait) {
        border-color: var(--red) !important;
    }
    .allow__users {
        padding: 0 4.1vw;
        height: 12.3vw;
        border-radius: 20px;
        background: rgba(88, 155, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .allow__users svg {
        margin-right: 2vw;
    }
    .challange__title {
        margin-bottom: 7vw;
        max-width: 90%;
    }
    .profile-icon {
        border-radius: 20px;
        width: 12.3vw;
        height: 12.3vw;
        overflow: hidden;
        background-color: var(--light-gray);
    }
    .profile-icon .name-word {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--blue);
    }
    .challange__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .challange__header-title {
        opacity: 0.5;
    }
    .calender-container {
        padding: 5.13vw;
        border-radius: 20px;
        background: var(--light-gray) !important;
    }
    .unfollow__challange {
        border-radius: 16px;
        background: rgba(88, 155, 255, 0.12);
        padding: 2.56vw 6.15vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6.15vw;
    }
    .description__title {
        margin-top: 2.3vw;
        margin-bottom: 3.07vw;
    }
    .subscribed__users {
        padding: 3.07vw;
        border-radius: 20px;
        background: var(--light-gray);
    }
    .subscribed__user-info {
        display: flex;
        align-items: center;
    }
    .subscribed__user-icon {
        margin-right: 3vw;
        width: 12.3vw;
        height: 12.3vw;
        border-radius: 100px;
        background: var(--light-gray);
        overflow: hidden;
    }
    .subscribed__user-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .subscribed__user-item:not(:last-child) {
        margin-bottom: 3.07vw;
    }
    .subscribed__user-button {
        padding: 2vw 4vw;
    }
    .subscribed__user-button.__active {
        padding: 2.05vw 4.1vw;
        border-radius: 14px;
        background: rgba(88, 155, 255, 0.12);
        color: var(--blue);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32.56vw;
        cursor: pointer;
    }
    .subscribed__user-button {
        border-radius: 14px;
        background: var(--blue);
        padding: 2.05vw 4.1vw;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32.56vw;
        cursor: pointer;
    }
    .subscribed__user-icon.name-word {
        background: #DFECFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .subscribed__user-icon.name-word div {
        color: var(--blue);
        text-align: center;
        font-family: Unbounded;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }

    :global(a.svelte-1unzsxu.this) {
        border-color: var(--blue) !important;
    }
    :global(a.svelte-1unzsxu.success, a.svelte-1unzsxu.success.this) {
        color: var(--green) !important;
        background: rgba(24, 209, 131, 0.08) !important;
        border-color: transparent !important;
    }
    :global(a.svelte-1unzsxu.undone, a.svelte-1unzsxu.undone.this, a.svelte-1unzsxu.fail) {
        color: var(--red) !important;
        background: rgba(243, 69, 101, 0.08) !important;
        border-color: transparent !important;
    }
</style>