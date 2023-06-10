<script>
	import buttonIcon from '$lib/icons/sett.svg';
	import hurt from '$lib/icons/hurt.svg';
	import Container from '$lib/components/Container.svelte';
	import TrainingHeader from '$lib/components/TrainingHeader.svelte';
	import Nothing from '$lib/components/Nothing.svelte';
	import BackArrow from '$lib/components/BackArrow.svelte';
	// import TimeChart from "$lib/components/TimeChart.svelte";
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';

    export let data;
	let backFunction = () => goto('/profile/user-profile-edit');
	let padding = 'pb-0';
    let TimeChart = data.takes;

    console.log(data)
	onMount(() => {});
</script>

{#if data.user}
	<TrainingHeader bgcolor={padding}>
		<BackArrow {backFunction} {buttonIcon} />
	</TrainingHeader>

	<Container>

		<div class="user-container">
			<div class="user-icon">
				{#if !!data.user.avatar}
					<img class="avatar-img" src={data.user.avatar} alt="q" />
				{/if}
			</div>
			<div class="user-name text-20b">
				{data.user.name + " " + data.user.lastname}
			</div>
			<div class="user-email text-16m c-dark-gray">
				{data.user.email}
			</div>
		</div>

		<div class="blue-params bg-blue">
			<div class="blue-params-item text-14s c-white">
				<img class="hurt" src={hurt} alt="heart" />
				Всего тренировок
			</div>
			<div class="blue-params-item text-20b c-white">
                {+TimeChart.sum ? TimeChart.sum : 0 }
            </div>
		</div>

		<div class="nothing-data bg-black">
			<div class="nothing-title text-14s c-white">Минут за тренировкой</div>
			<!-- <TimeChart/> -->
			<div class="canvas-container">
				<canvas id="myChart" />
				<div class="line-wrapper">
                    <div class="line _6" />
					<div class="line _5" />
					<div class="line _4" />
					<div class="line _3" />
					<div class="line _2" />
					<div class="line _1" />
				</div>
				<!-- <div class="date-wrapper">
                    {#each TimeChart.takes.slice().reverse() as day}
					<div class="date-item">{day.day}</div>
                    {/each}
				</div> -->
                <div class="takes-wrapper">
                    {#each TimeChart.takes.slice().reverse() as line, index}
                        <div class="take-container">
                            <div class="take-line" style='height: {line.time * 1.47}px'/>
                            <div class="date-item">{line.day}</div>
                        </div>
                    {/each}
                    <!-- {#each TimeChart.takes.slice().reverse() as line}
                    
                    {/each}
                    {#each TimeChart.takes.slice().reverse() as line}
                    
                    {/each} -->
                </div>
			</div>
		</div>
	</Container>
{:else if !data.user}
	<Nothing />
{/if}

<style>
    .takes-wrapper {
        display: flex;
        position: absolute;
        bottom: -20px;
        width: 100%;
        padding: 0 8px;
        align-items: flex-end;
        flex-direction: row-reverse;
        justify-content: flex-start;
    }
    .take-container {
        width: calc(100% / 7);
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-end;
    }
	.take-line {
		width: 4px;
		height: 137px;
        border-radius: 5px 5px 0 0;
		background: linear-gradient(180deg, #ffffff 1.46%, rgba(255, 255, 255, 0) 100%);
	}
	.blue-params {
		position: fixed;
		top: 71vw;
		left: 7.18vw;
		right: 7.18vw;
	}
	.hurt {
		width: auto;
		margin-right: 3vw;
	}

	.user-container {
		position: fixed;
		top: 16.4vw;
		left: 50%;
		transform: translateX(-50%);
		z-index: 5;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.user-icon {
		width: 28.7vw;
		height: 28.7vw;
		border-radius: 100px;
		overflow: hidden;
		margin-bottom: 5.12vw;
		background-color: var(--light-gray);
	}
	.user-icon img {
		/* width: auto;
		position: relative;
		left: 50%;
		transform: translateX(-67%); */
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.user-name {
		margin-bottom: 1vw;
	}
	.blue-params {
		border-radius: 16px;
		padding: 4.1vw;
		display: flex;
		justify-content: space-around;
		margin-bottom: 4.65vw;
	}
	.blue-params-item {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.nothing-data {
		position: fixed;
		left: 7.18vw;
		right: 7.18vw;
		top: 94vw;
		padding: 6.15vw;
		padding-bottom: 10vw;
		border-radius: 20px;
		overflow: hidden;
		/* min-height: 74vw; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
	}
	
	:global(.pb-0) {
		padding-bottom: 0 !important;
	}
    .nothing-title {
			margin-bottom: 20px;
    }
	canvas {
		width: 100% !important;
		height: 100% !important;
		position: relative;
		z-index: 5;
		transform: translateY(6px);
	}
	.canvas-container {
		position: relative;
	}
	.line-wrapper {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-top: 10px;
	}
	.line {
		width: 100%;
		height: 1px;
		border: 1px dashed #dcdee3;
		opacity: 0.5;
		position: relative;
		/* margin-top: 30px; */
	}
	.line._1::before {
		content: '20';
		color: white;
		position: absolute;
		transform: translateY(-110%);
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 11px;
		line-height: 14px;
		color: #ffffff;
		opacity: 0.32;
	}
	.line._2::before {
		content: '40';
		color: white;
		position: absolute;
		transform: translateY(-110%);
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 11px;
		line-height: 14px;
		color: #ffffff;
		opacity: 0.32;
	}
	.line._3::before {
		content: '60';
		color: white;
		position: absolute;
		transform: translateY(-110%);
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 11px;
		line-height: 14px;
		color: #ffffff;
		opacity: 0.32;
	}
	.line._4::before {
		content: '80';
		color: white;
		position: absolute;
		transform: translateY(-110%);
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 11px;
		line-height: 14px;
		color: #ffffff;
		opacity: 0.32;
	}
	.line._5::before {
		content: '100';
		color: white;
		position: absolute;
		transform: translateY(-110%);
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 11px;
		line-height: 14px;
		color: #ffffff;
		opacity: 0.32;
	}
    .line._6::before {
		content: '120';
		color: white;
		position: absolute;
		transform: translateY(-110%);
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 11px;
		line-height: 14px;
		color: #ffffff;
		opacity: 0.32;
	}
	.date-item {
		/* padding-left: 8px; */
		/* position: absolute; */
		/* bottom: 0; */
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-size: 11px;
		line-height: 14px;
		color: #ffffff;
		opacity: 0.32;
        padding-top: 10px;
		/* display: flex; */
		/* width: 100%; */
		/* justify-content: space-around; */
		/* bottom: -20px; */
	}
</style>
