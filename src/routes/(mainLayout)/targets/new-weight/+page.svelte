<script>
    import buttonIcon from "$lib/icons/edit.svg";
    import plus from "$lib/icons/plus.svg";
    import Container from "$lib/components/Container.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import BackArrow from "$lib/components/BackArrow.svelte";
    import {goto} from '$app/navigation';
    import { onMount } from "svelte";

    export let data;

    let lastWeighing = data.user.params.weight.slice(-1)[0] || [];


    let backFunction = ()=> history.back();
    const items = Array.from({ length: 1200 });
    let wheelElement;
    let wheelWrapper;
    let wheelWidth;
    let pointWidth;

    function convertPoint(value, wheel) {
        var startPoint = -(wheel / 2).toFixed();
        var endPoint = +(wheel / 2).toFixed();
        var startValue = 30;
        var endValue = 130;
        console.log(startPoint)
        var normalizedValue = (value - startPoint) / (endPoint - startPoint);
        var convertedValue = startValue + (endValue - startValue) * normalizedValue;

        x = (convertedValue * 10 / 10).toFixed(2);
        }
    
    let x = 0;
    
    onMount(()=>{
        wheelWidth = wheelWrapper.getBoundingClientRect().width;
        pointWidth = +wheelWrapper.children[601].getBoundingClientRect().width
        x = convertPoint(-wheelWrapper.children[601].getBoundingClientRect().left, wheelWrapper.getBoundingClientRect().width + (wheelWrapper.children[601].getBoundingClientRect().width/390*100))
        
        wheelElement.addEventListener(('scroll'), ()=>{
            // console.log(wheelWrapper.children[601].offsetLeft)
            // console.log(-wheelWrapper.children[601].getBoundingClientRect().width)
            // console.log(wheelWrapper.getBoundingClientRect().width)
        })
        wheelElement.addEventListener(('scroll'), ()=>{
            convertPoint(-wheelWrapper.children[601].getBoundingClientRect().left, wheelWrapper.getBoundingClientRect().width + (wheelWrapper.children[601].getBoundingClientRect().width/390*100))
        })
        wheelElement.scrollLeft = (wheelWrapper.getBoundingClientRect().width) / 2
        
    })
</script>

<TrainingHeader>
    <BackArrow {backFunction}/>
</TrainingHeader>

<Container>

    <div class="reg-title text-20b">Новое взвешивание</div>

    <div class="blue-params bg-blue">
        <div class="blue-params-item">
            <div class="params-name text-12s c-white">Предыдущий вес</div>
            <div class="params-value text-16s-u c-white">{lastWeighing.weight ? lastWeighing.weight : '- -'}</div>
        </div>
        <div class="blue-params-item">
            <div class="params-name text-12s c-white">Дата</div>
            <div class="params-value text-16s-u c-white">{lastWeighing.timestamp ? lastWeighing.timestamp : '- -'}</div>
        </div>
    </div>

   <div class="wheel-container">
        <svg class="triangle" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.29289 7.29289L0.707107 1.70711C0.0771421 1.07714 0.523308 0 1.41421 0H12.5858C13.4767 0 13.9229 1.07714 13.2929 1.70711L7.70711 7.29289C7.31658 7.68342 6.68342 7.68342 6.29289 7.29289Z" fill="#1F2830"/>
        </svg>
        

        
        <!-- <div class="wheel-element" style="scroll-behavior: smooth;" use:horizontalWheelScroll on:scroll={() => horizontalWheelScroll}> -->
            <div class="wheel-element" bind:this={wheelElement}>
            <div class="wheel-wrapper" bind:this={wheelWrapper}>
                <div class="picker"></div>
                {#each items as item, index}
                <div class="wheel-item" style="
                {index === 0 ? 'margin-left: 0;' : ''}
                {index === items.length - 1 ? 'margin-right: 0;' : ''}"></div>
                {/each}
            </div>
        </div>
    </div>

    <div class="wheel-value text-32b">
        {x}
    </div>

</Container>
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <!-- <div class="button-container"> -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- <div class="big-black-button _black" on:click={backFunction}> -->
            <!-- <div class="start-training-text text-16s">Сохранить</div> -->
        <!-- </div> -->
    <!-- </div> -->




<style>
    .wheel-value {
        position: fixed;
        top: 112vw;
        left: 50%;
        transform: translateX(-50%);
    }
    .triangle {
        position: absolute;
        left: 50%;
        top: 8vw;
        transform: translateX(-50%);
        z-index: 5;
    }
    .picker {
        width: 0px;
        height: 60px;
        border: 1px solid #1F2830;
        position: absolute;
        top: 9vw;
        left: 50%;
        transform: translateX(-50%);
        z-index: 5;
    }
    .wheel-container {
        position: fixed;
        top: 84vw;
        left: 5.128vw;
        right: 5.128vw;
        overflow: hidden;
        /* width: 390px; */
    }
    :global(.wheel-element) {
        /* min-width: 100vw; */
        /* scroll-snap-type: x mandatory;	 */
		/* display: flex; */
		/* -webkit-overflow-scrolling: touch; */
		overflow-x: scroll;
        padding: 10vw 0;
        scroll-behavior: smooth;

    }
    .wheel-wrapper {
        display: flex;
        align-items: flex-start;
        width: fit-content;
    }
    .wheel-wrapper::-webkit-scrollbar{
        display: none;
    }
    .wheel-item {
        height: 4.1vw;
        background-color: #DCDEE3;
        width: 0.52vw;
        margin: 0 1.5395vw;
    }
    .wheel-item:nth-of-type(5n) {
        height: 8.2vw;
    }
    .wheel-element::-webkit-scrollbar{
        display: none;
    }





    .big-black-button._black {
        margin-bottom: 26.15vw !important;
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
</style>