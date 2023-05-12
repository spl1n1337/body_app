<script>
	import { Chart } from 'chart.js/auto';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import { onMount } from 'svelte';

	onMount(() => {
		Chart.register(ChartDataLabels);
		const ctx = document.getElementById('myChart');

		const DATA_COUNT = 4;
		const labels = [];
		for (let i = 0; i < DATA_COUNT; ++i) {
			labels.push(i.toString());
		}
		const datapoints = [56.6, 54.2, 54.8, 53.7];

		new Chart(ctx, {
			defaults: {
				backgroundColor: 'black'
			},
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						data: datapoints,
						borderColor:
							'linear-gradient(90deg, rgba(88, 155, 255, 0) 0.87%, #589BFF 10.04%, #589BFF 32.57%, #589BFF 85.26%, rgba(88, 155, 255, 0) 99.83%)',
						borderColor: '#589BFF',
						fill: false,
						weight: 2,
						// cubicInterpolationMode: 'monotone',
						tension: 0.4,
						pointRadius: 6,
						pointBorderColor: '#589BFF',
						pointBackgroundColor: 'white',
						pointHoverRadius: 6,
						pointHoverBackgroundColor: 'white',
						borderWidth: 3,
					}
				]
			},
			options: {
				layout: {
					padding: {
						top: 15,
						left: 15,
						right: 15
				}
				},
				responsive: true,
				plugins: {
					title: {
						display: false
					},
					legend: {
						display: false
					},
					tooltip: {enabled: false},
					datalabels: {
						anchor: 'center',
						align: 'top',
						offset: 10,
						display: true,
						color: '#1F2830',
						font: {
							family: 'Inter',
							style: 'normal',
							weight: 600,
							size: 14
						},
						formatter: function (value) {
							return value;
						}
					}
				},
				interaction: {
					intersect: false
				},
				scales: {
					x: {
						display: false
					},
					y: {
						display: false,
						title: {
							display: false
						},
						ticks: {
							display: false
						},
						suggestedMin: 48,
						suggestedMax: 60,
					}
				}
			}
		});
	});
</script>

<div class="canvas-container">
	<canvas id="myChart"></canvas>
	<div class="line-wrapper">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</div>
</div>

<style>
	canvas {
		width: 100vw;
		position: relative;
		z-index: 5;
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
	}
	.line {
		width: 286px;
		height: 1px;
		border: 1px dashed #DCDEE3;
		opacity: 0.5;
	}
</style>