<script>
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import Container from "$lib/components/Container.svelte";
    import profileicon from "$lib/icons/frame.png";

    import plus from "$lib/icons/plus.svg";
    import right from "$lib/icons/chevron-right-black.svg";
    import myparams from "$lib/icons/myparams.svg";
    import {goto} from '$app/navigation';
    
    let bgcolor = 'bg-blue params-header';
</script>


<div class="profile-header bg-blue">
    <div class="profile-icon">
        <img src="{profileicon}" alt="qweqw">
    </div>

    <div class="params-container">
        <div class="params-name text-16s c-white">Вес <span class="params-date"></span></div>
        <div class="params-value">
            <div class="params-weight text-32s c-white">- -</div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="params-plus bg-white" on:click={()=>goto('/new-weight')}>
                <img src="{plus}" alt="plus">
            </div>
        </div>
        
    </div>

</div>


<Container>
    
</Container>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="my-params bg-l-gray" on:click={()=> goto('/params/my-data')}>
    <img src="{myparams}" alt="" class="my-params-icon">
    <div class="my-params-text text-16s">Мои параметры</div>
    <img src="{right}" alt="" class="my-params-icon">
</div>



<style>

    .profile-icon {
        border-radius: 20px;
        width: 12.3vw;
        height: 12.3vw;
        overflow: hidden;
        margin-bottom: 5.12vw;
    }
    .profile-header {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
        padding: 4.19vw 7.18vw;
        border-radius: 0px 0px 20px 20px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 5;
        display: flex;
        justify-content: space-between;
    }
    .params-container {
        background: rgba(255, 255, 255, 0.12);
        border-radius: 20px;
        padding: 4.1vw;
        width: 100%;
        margin-bottom: 3vw;
    }
    .params-value {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .params-name {
        opacity: 0.5;
        margin-bottom: 1vw;
    }
    .params-plus {
        border-radius: 16px;
        overflow: hidden;
        padding: 2.56vw;
    }
    
    .my-params {
        position: absolute;
        border-radius: 16px;
        z-index: 5;
        top: 130vw;
        left: 7.18vw;
        right: 7.18vw;
        padding: 4.1vw 5.12vw;
        display: flex;
        align-items: center;
    }
    .my-params-icon {
        width: auto;
    }
    .my-params-text {
        width: 100%;
        margin-left: 16px;
    }

</style>