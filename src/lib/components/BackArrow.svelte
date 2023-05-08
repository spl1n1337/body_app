<script>
    import backarrow from '$lib/icons/arrow-left.svg';
    export let backFunction;
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={backFunction}>
    <img src="{backarrow}" alt="back arrow">
</div>

<style>
    div {
        width: 12.3vw;
        height: 12.3vw;
        background-color: var(--light-gray);
        padding: 3.07vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
    }
    div img {
        width: auto;
    }
</style>