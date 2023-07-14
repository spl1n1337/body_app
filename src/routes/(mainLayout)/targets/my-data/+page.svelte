<script>
    import buttonIcon from "$lib/icons/edit.svg";
    import plus from "$lib/icons/plus.svg";
    import Container from "$lib/components/Container.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import BackArrow from "$lib/components/BackArrow.svelte";
    import {goto} from '$app/navigation';
	import { each } from "svelte/internal";
    let paramsEdingGo =()=> goto('./my-data/params');

    export let data;
    let params = data.user.params;
    const reverse = arr => arr.map((_, index) => arr[arr.length - 1 - index]);
    let parts = reverse(params.parts)
    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const now = new Date();

    const weekday = weekdays[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    const dateString = `${day} ${month} ${year}, ${weekday}`;

    console.log(parts)
    console.log(params)
</script>

<TrainingHeader>
    <BackArrow backFunction={()=>goto('./')}/>
    <BackArrow backFunction={paramsEdingGo} {buttonIcon}/>
</TrainingHeader>

<Container>

    <div class="params__header">
        <div class="reg-title text-20b">Мои параметры</div>

        <div class="blue-params bg-blue">
            <div class="blue-params-item">
                <div class="params-name text-12s c-white">Рост</div>
                <div class="params-value text-16s-u c-white">
                    {!data.user.height ? '- -' : data.user.height}
                </div>
            </div>
            <div class="blue-params-item">
                <div class="params-name text-12s c-white">Возраст</div>
                <div class="params-value text-16s-u c-white">
                    {!data.user.age ? '- -' : data.user.age}
                </div>
            </div>
            <div class="blue-params-item">
                <div class="params-name text-12s c-white">Вес</div>
                <div class="params-value text-16s-u c-white">
                    {(params.weight.length) ? params.weight[params.weight.length - 1].weight + ' кг' : '- -'}
                </div>
            </div>
        </div>
    
    </div>
    <div class="parts-items">
        <div class="parts-item">
            {#if params.parts.length > 1}
            {#each parts as part, i}
                {#if !!part.chest || !!part.waist || !!part.hips || !!part.arm || !!part.hip || !!part.leg}
                <div class="date-container">
                    <div class="date text-12s c-dark-gray">{part.timestamp.slice(part.timestamp, -7)}</div>
                    <div class="time text-12s c-dark-gray">{part.timestamp.slice(-5)}</div>
                </div>
            
                <div class="params-container bg-l-gray">
                    <div class="value-item">
                        <div class="value-name text-12s c-dark-gray">Грудь</div>
                        <div class="value-scrore text-16s">
                            {part.chest ? part.chest : '- -'}
                        </div>
                    </div>
                    <div class="value-item">
                        <div class="value-name text-12s c-dark-gray">Талия</div>
                        <div class="value-scrore text-16s">
                            {part.waist ? part.waist : '- -'}
                        </div>
                    </div>
                    <div class="value-item">
                        <div class="value-name text-12s c-dark-gray">Бёдра</div>
                        <div class="value-scrore text-16s">
                            {part.hips ? part.hips : '- -'}
                        </div>
                    </div>
                    <div class="value-item">
                        <div class="value-name text-12s c-dark-gray">Рука</div>
                        <div class="value-scrore text-16s">
                            {part.arm ? part.arm : '- -'}
                        </div>
                    </div>
                    <div class="value-item">
                        <div class="value-name text-12s c-dark-gray">Бедро</div>
                        <div class="value-scrore text-16s">
                            {part.hip ? part.hip : '- -'}
                        </div>
                    </div>
                    <div class="value-item">
                        <div class="value-name text-12s c-dark-gray">Голень</div>
                        <div class="value-scrore text-16s">
                            {part.leg ? part.leg : '- -'}
                        </div>
                    </div>
                </div>
                {/if}
            {/each}
            {:else}
            <div class="date-container">
                <!-- <div class="date text-12s c-dark-gray">{part.timestamp.slice(part.timestamp, -7)}</div> -->
                <!-- <div class="time text-12s c-dark-gray">{timeString}</div> -->
            </div>
        
            <div class="params-container bg-l-gray">
                <div class="value-item">
                    <div class="value-name text-12s c-dark-gray">Грудь</div>
                    <div class="value-scrore text-16s">
                        - -
                    </div>
                </div>
                <div class="value-item">
                    <div class="value-name text-12s c-dark-gray">Талия</div>
                    <div class="value-scrore text-16s">
                        - -
                    </div>
                </div>
                <div class="value-item">
                    <div class="value-name text-12s c-dark-gray">Бёдра</div>
                    <div class="value-scrore text-16s">
                        - -
                    </div>
                </div>
                <div class="value-item">
                    <div class="value-name text-12s c-dark-gray">Рука</div>
                    <div class="value-scrore text-16s">
                        - -
                    </div>
                </div>
                <div class="value-item">
                    <div class="value-name text-12s c-dark-gray">Бедро</div>
                    <div class="value-scrore text-16s">
                        - -
                    </div>
                </div>
                <div class="value-item">
                    <div class="value-name text-12s c-dark-gray">Голень</div>
                    <div class="value-scrore text-16s">
                        - -
                    </div>
                </div>
            </div>
            {/if}
        </div>
    </div>

</Container>
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <div class="button-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _black" on:click={()=> goto('/targets/my-data/sizes')}>
            <img src="{plus}" alt="q" class="button-icon">
            <div class="start-training-text text-16s">Добавить замеры тела</div>
        </div>
    </div>


<style>
    .big-black-button._black {
        /* margin-bottom: 26.15vw !important; */
    }
    .reg-title {
        margin-top: 2.05vw;
        margin-bottom: 4.615vw;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 7.18vw;
        position: fixed;
        bottom: calc(20vw + var(--sab));
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 389px) {
        .reg-title {
            margin-top: 0;
        }
        .big-black-button._black {
            margin-bottom: 1vw;
        }
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
    .blue-params {
        border-radius: 16px;
        padding: 4.1vw;
        display: flex;
        justify-content: space-around;
        margin-bottom: 4.65vw;
    }
    .blue-params-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .params-name {
        opacity: 0.5;
        margin-bottom: 1vw;
    }
    .date-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2vw;
        margin-top: 4.16vw;
    }
    .params-container {
        padding: 4.1vw 6.15vw;
        border-radius: 16px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 6.15vw;
        row-gap: 4.1vw;
    }
    .value-name {
        margin-bottom: 1.54vw;
    }
    .button-icon {
        width: auto;
        filter: invert(100%);
        margin-right: 2.56vw;
    }
    .params__header {
        position: fixed;
        top: 19.56vw;
        left: 0;
        right: 0;
        padding: 0 7.18vw;
        background: #fff;
    }
    .parts-items {
        padding-top: 33.06vw;
        padding-bottom: 24.36vw;
    }
</style>