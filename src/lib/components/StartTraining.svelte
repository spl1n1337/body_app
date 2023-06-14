<script>
    import start from "$lib/icons/play.png"
    export let backFunction;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="start-training-button" on:click={backFunction}>
    <div class="big-black-button">
        <div class="start-training-icon"><img src="{start}" alt="start"></div>
        <div class="start-training-text text-16s">Начать тренировку</div>
    </div>
</div>

<style>
    .start-training-button {
        position: fixed;
        bottom: calc(55px + var(--sab));
        width: 100%;
        padding: 4.1vw 7.18vw 3.07vw;
        background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    }
    .start-training-icon {
        margin-right: 2.56vw;
    }
</style>