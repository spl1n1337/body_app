<script>
    export let bg_color = 'bg-green';
    export let time;
</script>



<div class="timer__button c-white text-16b {bg_color}">
    {time || '00:10'}
</div>

<style>
    .timer__button {
        padding: 3.07vw 4vw;
        min-width: 34.87vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
    }
</style>