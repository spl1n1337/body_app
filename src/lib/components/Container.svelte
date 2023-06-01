<script>
    export let bg_color;
</script>


<main class="container {bg_color}">
    <slot></slot>
</main>

<style>
    .container {
        margin: 0 auto;
        padding: 20.5vw 7.18vw 22vw;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>