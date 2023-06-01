<script>
    import profile_icon from "$lib/icons/profile-icon.svg";
    import star_icon from "$lib/icons/star-icon.svg";
    import cross_icon from "$lib/icons/cross-icon.svg";
    import {goto} from '$app/navigation';

</script>



<div class="nothing-container">
    <div class="profile-icon"><img src="{profile_icon}" alt="qwe"></div>
    <div class="star-icon"><img src="{star_icon}" alt="qwe"></div>
    <div class="cross-icon"><img src="{cross_icon}" alt="qwe"></div>
    <div class="nothing-text-block">
        <div class="nothing-title text-20b">Здесь пока ничего нет</div>
        <div class="nothing-descr text-16m c-dark-gray">Для того, чтобы получить расширенный доступ к тренировкам и видеть свой прогресс, тебе необходимо пройти короткую регистрацию</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button" on:click={()=> goto('/registration')}>
            <div class="start-training-text text-16s">Зарегистрироваться</div>
        </div>
    </div>

</div>


<style>
    .big-black-button {
        margin-bottom: 5.64vw;
    }
    .profile-icon img, .star-icon img, .cross-icon img{
        width: auto;
    }
    .profile-icon {
        position: fixed;
        top: 31.28vw;
        left: 50%;
        transform: translateX(-50%);
    }
    .star-icon {
        position: fixed;
        top: 21.02vw;
        left: 16.15vw;
        transform: rotate(-23.78deg);
    }
    .cross-icon {
        position: fixed;
        top: 50.78vw;
        right: 19.89vw;
        transform: rotate(19.25deg);
    }
    .nothing-text-block {
        position: fixed;
        top: 72.3vw;
        padding: 0 7.18vw;
    }
    .nothing-title {
        text-align: center;
        margin-bottom: 4.1vw;
    }
    .nothing-descr {
        text-align: center;
        margin-bottom: 22.56vw;
    }
    @media (max-width: 375px){
        .nothing-descr {
            margin-bottom: 8.5vw;
        }
    }
</style>