<script>
    import chest from "$lib/icons/chest.svg";
    import waist from "$lib/icons/waist.svg";
    import hips from "$lib/icons/hips.svg";
    import arm from "$lib/icons/arm.svg";
    import hip from "$lib/icons/hip.svg";
    import leg from "$lib/icons/leg.svg";
    import {goto} from "$app/navigation";
    import Container from "$lib/components/Container.svelte";
    import TrainingHeader from "$lib/components/TrainingHeader.svelte";
    import BackArrow from "$lib/components/BackArrow.svelte";
    import Picker from "$lib/components/Picker.svelte";
    import { onMount } from "svelte";
    import { pickerOutput, linkRoad } from "$lib/stores.js";
    import NavFooter from "$lib/components/NavFooter.svelte";
    export let data;
    let token = data.token;
    let pickerName = {
        key: '0',
    };
    
    let isActive = false;
    let params = data.user.params;
    const contextParams =  {
        chest: 'Грудь',
        waist: 'Талия',
        hips: 'Бёдра',
        arm: 'Рука',
        hip: 'Бедро',
        leg: 'Голень',
    };

    function backFunction() {
        pickerOutput.set({})
        goto('/registration/user_registration/params')
    }
    function handleClick(key, value) {
        pickerName.key = value;
        isActive = !isActive;
    }
    async function pickerDatasSend() {
        // Отправка данных формы (здесь замените URL на ваш URL для обработки формы)
        try {
            const response = await fetch(`${$linkRoad}/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`,
            },
            body: JSON.stringify($pickerOutput),
            });

            if (response.ok) {
            const data = await response.json();
                goto('/targets/my-data')
            } else {
            throw new Error('Произошла ошибка при отправке формы.');
            }
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
        }
    }

    onMount(()=>{
    })
    
</script>

<TrainingHeader>
    <BackArrow backFunction={backFunction}/>
</TrainingHeader>

<Container>

    <div class="reg-title text-20b">Ваши параметры</div>

    <div class="params-grid">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="params-grid-item bg-l-gray" on:click={()=>{handleClick(chest, contextParams.chest)}}>
            <img src="{chest}" alt="" class="item-icon">
            <div class="item-title text-12s c-dark-gray">{contextParams.chest}</div>
            {#if !params.chest && !$pickerOutput.chest}
                <div class="params-item-add text-14s c-blue">Добавить</div>
            {:else}
                <div class="value text-14s">{$pickerOutput.chest ? $pickerOutput.chest : params.chest}</div>
            {/if}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="params-grid-item bg-l-gray" on:click={()=>{handleClick(waist, contextParams.waist)}}>
            <img src="{waist}" alt="" class="item-icon">
            <div class="item-title text-12s c-dark-gray">{contextParams.waist}</div>
            {#if !params.waist && !$pickerOutput.waist}
            <div class="params-item-add text-14s c-blue">Добавить</div>
            {:else}
            <div class="value text-14s">{$pickerOutput.waist ? $pickerOutput.waist : params.waist}</div>
            {/if}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="params-grid-item bg-l-gray" on:click={()=>{handleClick(hips, contextParams.hips)}}>
            <img src="{hips}" alt="" class="item-icon">
            <div class="item-title text-12s c-dark-gray">{contextParams.hips}</div>
            {#if !params.hips && !$pickerOutput.hips}
            <div class="params-item-add text-14s c-blue">Добавить</div>
            {:else}
            <div class="value text-14s">{$pickerOutput.hips ? $pickerOutput.hips : params.hips}</div>
            {/if}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="params-grid-item bg-l-gray" on:click={()=>{handleClick(arm, contextParams.arm)}}>
            <img src="{arm}" alt="" class="item-icon">
            <div class="item-title text-12s c-dark-gray">{contextParams.arm}</div>
            {#if !params.arm && !$pickerOutput.arm}
            <div class="params-item-add text-14s c-blue">Добавить</div>
            {:else}
            <div class="value text-14s">{$pickerOutput.arm ? $pickerOutput.arm : params.arm}</div>
            {/if}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="params-grid-item bg-l-gray" on:click={()=>{handleClick(hip, contextParams.hip)}}>
            <img src="{hip}" alt="" class="item-icon">
            <div class="item-title text-12s c-dark-gray">{contextParams.hip}</div>
            {#if !params.hip && !$pickerOutput.hip}
            <div class="params-item-add text-14s c-blue">Добавить</div>
            {:else}
            <div class="value text-14s">{$pickerOutput.hip ? $pickerOutput.hip : params.hip}</div>
            {/if}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="params-grid-item bg-l-gray" on:click={()=>{handleClick(leg, contextParams.leg)}}>
            <img src="{leg}" alt="" class="item-icon">
            <div class="item-title text-12s c-dark-gray">{contextParams.leg}</div>
            {#if !params.leg && !$pickerOutput.leg}
            <div class="params-item-add text-14s c-blue">Добавить</div>
            {:else}
            <div class="value text-14s">{$pickerOutput.leg ? $pickerOutput.leg : params.leg}</div>
            {/if}
        </div>
    </div>


</Container>
     <!-- svelte-ignore a11y-click-events-have-key-events -->
     <div class="button-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="big-black-button _black" on:click={()=> pickerDatasSend()}>
            <div class="start-training-text text-16s">Сохранить</div>
        </div>
    </div>

<NavFooter/>

<Picker isActive={isActive} selectedCard={pickerName.key} close={handleClick}/>
<style>
    .big-black-button._black {
        margin-bottom: 26.15vw !important;
    }
    .reg-title {
        margin-top: 2.05vw;
        margin-bottom: 4.615vw;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 7.18vw;
        position: fixed;
        bottom: 22px;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 389px) {
        .button-container {
            bottom: 0;
        }
        .reg-title {
            margin-top: 0;
        }
        .big-black-button._black {
            margin-bottom: 1vw;
        }
    }
    .footer__nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--light-gray);
        display: flex;
        justify-content: space-between;
        padding: 2.05vw 6.92vw 1vw;
        z-index: 2;
    }
    .footer__nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 0 0 20.5vw;
    }
    .params-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 4.1vw;
    }
    .params-grid-item {
        padding: 4.1vw 0;
        border-radius: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .item-icon {
        width: 7.18vw;
    }
    .item-title {
        margin: 1.54vw 0;
    }
    .text-12s {
    }
    .c-dark-gray {
    }
    .value {
    }
    .text-14s {
    }

</style>