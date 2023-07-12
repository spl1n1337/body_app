<script>
    import user_icon from "$lib/icons/challange-icon.png";
    import Container from "$lib/components/Container.svelte"
    
    export let onClick
</script>


<div class="card__wrapper">
    <div class="card__title text-16b">Правила</div>
    <ul class="card__list">
        <li class="card__list-item text-14m">Задание выполняется на камеру для подтверждения выполнения условий.</li>
        <li class="card__list-item text-14m">Наш ИИ автоматически проверяет выполнение условий и удаляет видео. Никто не видит видео с вами.</li>
        <li class="card__list-item text-14m">Мы проверяем правильность выполнения упражнения, плохое выполнение не засчитываем.</li>
    </ul>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="accepr__challange text-14s c-white" on:click={onClick}>Принять вызов</div>
</div>


<style>
    .card__wrapper {
        border-radius: 20px;
        background: var(--light-gray, #F7F8FC);
        padding: 5.13vw;
    }
    .card__title {
        margin-bottom: 3vw;
    }
    .card__list {
        margin-left: 20px;
    }
    .card__list-item:not(:last-child) {
        margin-bottom: 12px;
    }
    .accepr__challange {
        border-radius: 16px;
        background: var(--dark);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2.56vw 6.15vw;
        margin-top: 6.15vw;
        cursor: pointer;
    }
</style>