<script>
    export let bgcolor;
</script>

<header class='{bgcolor ? bgcolor : 'bg-white'}'>
    <slot></slot>
</header>

<style>
    header {
        padding: 4.19vw 7.18vw;
        border-radius: 0px 0px 20px 20px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 3;
        height: 20.5vw;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
</style>