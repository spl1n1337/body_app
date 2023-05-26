<script>
    export let nextExercise,
               nextExerciseTitle,
               disable;
</script>



<div class="exercise__item {disable}">
    <img class="exercise__img" src="{nextExercise}" alt="qwe">
    <div class="exercise__text">
        <div class="next-exercise">Далее</div>
        <div class="exercise__name text-14b c-dark">{nextExerciseTitle}</div>
    </div>
</div>


<style>
    .exercise__item {
        position: fixed;
        z-index: 3;
        display: flex;
        bottom: 26vw;
        padding: 4.1vw;
        background-color: var(--light-gray);
        border-radius: 20px;
        left: 7.18vw;
        right: 7.18vw;
    }
    .next-exercise {
        font-family: 'Unbounded';
        font-weight: 700;
        font-size: calc(20/390*100vw);
        line-height: 1.4em;
        color: #DCDEE3;
    }
    .exercise__text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .exercise__img {
        object-fit: cover;
        flex: 0 0 29.5%;
        border-radius: 16px;
        overflow: hidden;
        margin-right: 5.12vw;
    }
    .exercise__name {
        font-size: calc(14/390*100vw);
        margin-right: calc(65/390*100vw);
        line-height: 1.42em;
        margin-bottom: 3vw;
    }
    .exercise__item.disable {
        display: none;
    }
</style>