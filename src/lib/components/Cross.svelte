<script>
    import cross from "$lib/icons/cross.svg";
    export let opacity;
    export let Goto;
    export const backFunction = (event) => {
    event.stopPropagation();
    history.back()
    };
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="cross {opacity ? 'opacity' : 'bg-l-gray'}" on:click={Goto ? Goto : backFunction}>
    <img src="{cross}" alt="qwe" class="cross-img {!opacity ? 'invert' : ''}">
</div>


<style>
    .cross {
        border-radius: 20px;
        padding: 3.07vw;
        width: fit-content;
        position: absolute;
        right: 7.18vw;
    }
    :global(.cross.opacity) {
        background: rgba(255, 255, 255, 0.1);
    }
    .cross img {
        width: auto;
    }
    :global(.invert) {
        filter: invert(100%)
    }
</style>