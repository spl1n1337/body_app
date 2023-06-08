<script>
	import cross from '$lib/icons/modal-cross.png';
	import check from '$lib/icons/modal-check.png';
	import { onMount } from 'svelte';
	import '$lib/style.css';
	import { pickerOutput } from "$lib/stores.js";
	
	let minSlides;
	let hourSlides;
	
	onMount(() => {
		function Wheel(wrapper, options) {
			var defaultOptions = {
				initIdx: 0,
				loop: false,
				perspective: 'center',
				width: 100,
				label: ''
			};

			options = { ...defaultOptions, ...options };

			var wheel;
			var slides = [];
			function createMarkup() {
				for (var i = 0; i < options.length; i++) {
					var div = document.createElement('div');
					div.setAttribute('class', `wheel__slide ${wrapper.id}`);
					slides.push(div);
				}

				wheel = createDiv('wheel keen-slider wheel--perspective-' + options.perspective, [
					createDiv('wheel__shadow-top'),
					createDiv('wheel__inner', [
						createDiv('wheel__slides', slides, 'width:' + options.width + 'px'),
						createDiv('wheel__label', document.createTextNode(options.label))
					]),
					createDiv('wheel__shadow-bottom')
				]);
				wrapper.appendChild(wheel);
			}

			var slidesPerView = options.loop ? 9 : 1;
			var slideDegree = 360 / 20;
			var wheelSize = 20;
			var radius = 200 / 2;

			function createDiv(className, append, style) {
				var div = document.createElement('div');
				if (className) div.setAttribute('class', className);
				if (style) div.setAttribute('style', style);
				if (!append) return div;
				if (!Array.isArray(append)) append = [append];
				append.forEach((element) => {
					div.appendChild(element);
				});
				return div;
			}

			function init() {
				createMarkup();
				var sliderOptions = {
					slides: {
						number: options.length,
						origin: options.loop ? 'center' : 'auto',
						perView: slidesPerView
					},
					vertical: true,
					initial: options.initIdx || 0,
					loop: options.loop,
					dragSpeed: (val) => {
						var height = 200;
						return (
							val *
							(height / ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) / slidesPerView)
						);
					},
					detailsChanged: (s) => {
						updateSlides(s.track.details);
					},
					rubberband: !options.loop,
					mode: 'free-snap'
				};
				var slider = new KeenSlider(wheel, sliderOptions);
				return slider;
			}

			function updateSlides(details) {
				var offset = options.loop ? 1 / 2 - 1 / slidesPerView / 2 : 0;
				var values = [];
				for (let i = 0; i < options.length; i++) {
					var distance = (details.slides[i].distance - offset) * slidesPerView;

					var rotate = Math.abs(distance) > wheelSize / 2 ? 180 : distance * (360 / wheelSize) * -1;
					var style = {
						transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
						WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`
					};
					var value = options.setValue
						? options.setValue(i, details.abs + Math.round(distance))
						: i;
					values.push({ style, value });
					slides[i].style.transform = style.transform;
					slides[i].innerHTML = value;
					if(style.transform == `rotateX(${0}deg) translateZ(${radius}px)`){
						(slides[i].classList.contains('hour-wheel') ? (pickerValue.cm = slides[i].textContent) : (pickerValue.mm = slides[i].textContent))
					}
				}
			}


			return init();
		}

		new Wheel(document.getElementById('hour-wheel'), {
			initIdx: 30,
			loop: false,
			length: 120,
			width: 23
		});

		new Wheel(document.getElementById('minute-wheel'), {
			initIdx: 0,
			loop: false,
			length: 10,
			width: 23,
			perspective: 'left',
		});


		minSlides = document.querySelectorAll('#minute-wheel .wheel__slide');
		hourSlides = document.querySelectorAll('#hour-wheel .wheel__slide');



	});
	export let isActive = false;
	export let close;
	export let pickerValue = {};
	export let selectedCard;
	const contextParams =  {
        chest: 'Грудь',
        waist: 'Талия',
        hips: 'Бёдра',
        arm: 'Рука',
        hip: 'Бедро',
        leg: 'Голень',
    };
    function setValueToPicker(selectedParam, response) {
        const paramKey = Object.keys(contextParams).find((key) => contextParams[key] === selectedParam);
        if (paramKey) {
            $pickerOutput[paramKey] = parseFloat(response.cm + '.' + response.mm);
        }
        console.log($pickerOutput);
    }
		
</script>


<div class="modal-wrapper {isActive ? '_active' : ''}">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal-head">
		<div class="modal-close"><img src={cross} alt="q" on:click={close}/></div>
		<div class="modal-title text-14s">{selectedCard}</div>
		<div class="modal-check"><img src={check} alt="q" on:click={setValueToPicker(selectedCard, pickerValue), close}/></div>
	</div>
	<div class="wrapper text-14s">
		<div id="hour-wheel" style="width: 70px" />
		<div class="dot" />
		<div id="minute-wheel" style="width: 70px" />
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="overlay" on:click={close}/>
</div>

<style>
	.modal-wrapper {
		z-index: 6;
	}
	.overlay {
		background: #1f2830;
		opacity: 0.5;
		position: fixed;
		z-index: 5;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
        max-height: 100%;
        /* overflow-y: auto; */
	}
	.modal-head {
		z-index: 6;
	}
	.modal-wrapper {
        visibility: hidden
	}
	.modal-wrapper._active {
        visibility: visible;
	}
    
</style>
