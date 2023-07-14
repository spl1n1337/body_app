<script>
    import { InlineCalendar } from 'svelte-calendar';
    import { onMount } from 'svelte';


    let weekdays
	const theme = {
        "calendar": {
            "width": "75.34vw",
            "legend": {
            // "height": "9.2vw"
            },
            "shadow": "none",
            "colors": {
            "text": {
                "primary": "black",
                "highlight": "black"
            },
            "background": {
                "primary": "none",
                "highlight": "transparent",
                "hover": "none",
            },
            "border": "none"
            },
            "font": {
                "regular": "calc(14/390*100vw)",
                "large": "calc(16/390*100vw)"
            },
            "grid": {
                "disabledOpacity": ".35",
                "outsiderOpacity": ".6"
            },
        }
    }
    
    let arrows
    const arrowLeftSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.4001 16.8L9.6001 12L14.4001 7.20005" stroke="#1F2830" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    const arrowRightSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9.5999 7.19995L14.3999 12L9.5999 16.8" stroke="#1F2830" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    const handleInteraction = (event) => {
        event.preventDefault();
    };

    let rusWeekDay = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    onMount(()=>{

        weekdays = document.querySelectorAll('.legend.svelte-1unzsxu span')
        weekdays.forEach((day, index) => {
            day.textContent = rusWeekDay[index]
        });
        arrows = document.querySelectorAll('.button.svelte-1ro74h8')
        arrows[0].querySelector('.left').display = 'none'
        arrows[2].querySelector('.right').display = 'none'
        arrows[0].innerHTML = arrowLeftSVG
        arrows[2].innerHTML = arrowRightSVG
        arrows[0].style.justifyContent = 'center'
        arrows[2].style.justifyContent = 'center'
        arrows.forEach(el => {
            el.style.padding = '0'
            el.style.height = 'auto'
        });
        arrows[1].style.order = 1
        arrows[0].style.order = 2
        arrows[2].style.order = 3
        arrows[1].style.textAlign = 'left'

        arrows[1].addEventListener('click', handleInteraction);
        arrows[1].addEventListener('mousedown', handleInteraction);
        arrows[1].addEventListener('touchstart', handleInteraction);

        arrows[1].querySelectorAll('*').forEach((element) => {
        element.addEventListener('click', handleInteraction);
        element.addEventListener('mousedown', handleInteraction);
        element.addEventListener('touchstart', handleInteraction);
        });;


    })

</script>


<InlineCalendar {theme} startOfWeekIndex={1}/>


<style>
    :global(.controls.svelte-1ro74h8) {
        color: var(--dark, #1F2830);
        font-family: Unbounded;
        font-size: calc(16 /390 * 100vw) !important;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        grid-template-columns: 70% 15% 15% !important;
        margin-bottom: 5.12vw;
    }
    :global(.grid.svelte-126ec0f) {
        /* border-radius: 20px; */
        background: var(--light-gray) !important;
        /* gap: 24px; */
        /* padding: 5.13vw ; */
    }
    :global(.grid.svelte-jmgdr0) {
        /* column-gap: 7px !important; */
        /* row-gap: 12px !important; */
        /* grid-template: repeat(6, 9.23vw) / repeat(7, 9.23vw) !important;  */
    }
    :global(.grid.svelte-jmgdr0>*.outsider) {
        color: #ACB9C1 !important;
        opacity: 1 !important;
    }
    :global(.legend.svelte-1unzsxu) {
        color: #ACB9C1;
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 3vw;
    }
    :global(.svelte-1unzsxu) {
        font-size: calc(14/390*100vw) !important;
        color: var(--dark, #1F2830);
        text-align: center;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
    }
    :global(a.svelte-1unzsxu) {
        border: 1px solid transparent;
        width: 9.23vw;
        height: 9.23vw;
        /* margin: 8px 8px !important; */
        border-radius: 12px;
        /* display: block !important; */
    }
</style>