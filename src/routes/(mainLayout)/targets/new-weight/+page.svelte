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

    // const horizontalWheelScroll = (node) => {
    //     console.log(node)
    //     let isDragging = false;
    //     let startPosition = null;
    //     node.addEventListener("touchstart", (evt) => {
    //     isDragging = true;
    //     startPosition = evt.touches[0].clientX;
    //     });

    //     node.addEventListener("touchmove", (evt) => {
    //     if (isDragging) {
    //         const currentPosition = evt.touches[0].clientX;
    //         const distance = currentPosition - startPosition;
    //         node.scrollLeft -= distance;
    //         startPosition = currentPosition;
    //     }
    //     });

    //     node.addEventListener("touchend", (evt) => {
    //     isDragging = false;
    //     });
    // };
    // const horizontalWheelScroll = (node) => {
    //     let isDragging = false;
    //     let startPosition = null;

    //     node.style.scrollBehavior = "smooth";

    //     node.addEventListener("touchstart", (evt) => {
    //     isDragging = true;
    //     startPosition = evt.touches[0].clientX;
    //     });

    //     node.addEventListener("touchmove", (evt) => {
    //     if (isDragging) {
    //         const currentPosition = evt.touches[0].clientX;
    //         const distance = currentPosition - startPosition;
    //         node.scrollLeft -= distance;
    //         startPosition = currentPosition;
    //     }
    //     });

    //     node.addEventListener("touchend", (evt) => {
    //     isDragging = false;
    //     });
    // };

    const items = Array.from({ length: 1200 });

    let wheelElementWidth;

    const getWheelElementWidth = () => {
    const wheelElement = document.querySelector('.wheel-element');
    wheelElementWidth = wheelElement.offsetWidth;
    console.log('Ширина элемента .wheel-element:', wheelElementWidth);
    console.log('Ширина элемента .wheel-element:', wheelElementWidth);
    };
    onMount(()=>{
        // getWheelElementWidth()
        console.log(document.querySelector('.wheel-item').offsetWidth)
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
        

        <div class="picker"></div>
        <div class="wheel-element" style="scroll-behavior: smooth;" use:horizontalWheelScroll on:scroll={() => horizontalWheelScroll}>
            <div class="wheel-wrapper">
                {#each items as item}
                <div class="wheel-item"></div>
                {/each}
            </div>
        </div>
    </div>

    <div class="wheel-value text-32b">
        52.0
    </div>

</Container>
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <div class="button-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _black" on:click={backFunction}>
            <div class="start-training-text text-16s">Сохранить</div>
        </div>
    </div>




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
        left: 20px;
        right: 20px;
        overflow: hidden;
    }
    :global(.wheel-element) {
        min-width: 100vw;
        scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
        padding: 10vw 0;
        scroll-behavior: smooth;
    }
    .wheel-wrapper {
        display: flex;
        align-items: flex-start;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
    }
    .wheel-wrapper::-webkit-scrollbar{
        display: none;
    }
    .wheel-item {
        height: 16px;
        border-left: 1px solid #DCDEE3;
        width: 0;
        padding-right: 12px;
    }
    .wheel-item:nth-of-type(5n) {
        height: 32px;
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