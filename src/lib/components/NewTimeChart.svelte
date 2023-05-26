<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
    let days = [1, 2, 3, 4, 5, 6, 7];

</script>

<div class="canvas-container">
	<!-- <div id="myChart" /> -->
	<div class="line-wrapper">
		<div class="line _5" ></div>
		<div class="line _4" ></div>
		<div class="line _3" ></div>
        <div class="line _2" ></div>
        <div class="line _1" ></div>
	</div>
    <div class="date-wrapper">
        
        <div class="date-item">
            1
            <div class="score-line">
            </div>
        </div>
        <div class="date-item">
            2
            <div class="score-line">
            </div>
        </div>
        <div class="date-item">
            3
            <div class="score-line">
            </div>
        </div>
        <div class="date-item">
            4
            <div class="score-line">
            </div>
        </div>
        <div class="date-item">
            5
            <div class="score-line">
            </div>
        </div>
        <div class="date-item">
            6
            <div class="score-line">
            </div>
        </div>
        <div class="date-item">
            7
            <div class="score-line">
            </div>
        </div>
    </div>

</div>

<style>
    .score-line {
        /* border: 4px solid; */
        /* border-image-source: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%); */
        /* width: 2px; */
        /* height: 61px; */
        /* display: none; */
    }
	#myChart {
		width: 100% !important;
		height: 100% !important;
		position: relative;
		z-index: 5;
        transform: translateY(6px);
	}
	.canvas-container {
		position: relative;
        height: 164px;
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
        color: #FFFFFF;
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
        color: #FFFFFF;
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
        color: #FFFFFF;
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
        color: #FFFFFF;
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
        color: #FFFFFF;
        opacity: 0.32;
    }
    .date-wrapper {
        padding-left: 8px;
        position: absolute;
        bottom: 0;
        color: white;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 14px;
        color: #FFFFFF;
        opacity: 0.32;
        display: flex;
        width: 100%;
        justify-content: space-around;
        bottom: -20px;
        height: 100%;
    }
    @media (max-width: 389px) {
        .line-wrapper {
            padding-top: 15px;
        }
    }
</style>
