<script>
	import NavFooter from '$lib/components/NavFooter.svelte';
	import { page } from '$app/stores'
	$: currentPath = $page.url.pathname;
	import { onMount } from 'svelte'
	import { pwaInfo } from 'virtual:pwa-info'; 

	onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`)
        },
        onRegisterError(error) {
          console.log('SW registration error', error)
        }
      })
    }
  })
	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : ''
	
</script>

<svelte:head> 
 	{@html webManifestLink} 
</svelte:head>

<slot/>
<!-- svelte-ignore empty-block -->
{#if currentPath.includes('/registration') || currentPath == '/'}
{:else}
<NavFooter/>
{/if}
<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@700&display=swap');
	:global(*) {
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none;
	}
	:global(:root) {
		--dark: #1f2830;
		--dark-gray: #a5aab4;
		--gray: #dcdee3;
		--light-gray: #f7f8fc;
		--white: #ffffff;
		--blue: #589bff;
		--l-blue: #c4e8ff;
		--red: #f34565;
		--green: #18d183;
		--pink: #ffcee5;
		--sand: #ffd9ad;
	}
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:global(img) {
		display: block;
		width: 100%;
	}
	:global(body) {
		font-family: 'Inter', sans-serif;
		font-family: 'Unbounded', cursive;
		color: var(--dark);
		position: relative;
		height: 100vh;
		overflow-x: hidden;
	}
	:global(a) {
		display: block;
		text-decoration: none;
		color: inherit;
	}
	:global(.bg-pink) {
		background-color: var(--pink);
	}
	:global(.bg-green) {
		background-color: var(--green);
	}
	:global(.bg-l-gray) {
		background-color: var(--light-gray);
	}
	:global(.bg-sand) {
		background-color: var(--sand);
	}
	:global(.bg-blue) {
		background-color: var(--blue);
	}
	:global(.bg-white) {
		background-color: var(--white);
	}
	:global(.bg-black) {
		background-color: var(--dark);
	}
	:global(.bg-dark-gray) {
		background-color: var(--dark-gray);
	}
	:global(.bg-red) {
		background-color: var(--red);
	}
	:global(.bg-l-blue) {
		background-color: var(--l-blue);
	}
	:global(.c-dark-gray) {
		color: var(--dark-gray);
	}
	:global(.c-gray) {
		color: var(--gray);
	}
	:global(.c-light-gray) {
		color: var(--light-gray);
	}
	:global(.c-white) {
		color: var(--white);
	}
	:global(.c-blue) {
		color: var(--blue);
	}
	:global(.c-red) {
		color: var(--red);
	}
	:global(.c-green) {
		color: var(--green);
	}
	:global(.c-black) {
		color: var(--dark);
	}
	:global(.text-32b) {
		font-family: 'Unbounded', cursive;
		font-size: calc(32 / 390 * 100vw);
		font-weight: 700;
		line-height: 1.25em;
	}
	:global(.text-32s) {
		font-family: 'Unbounded', cursive;
		font-size: calc(32 / 390 * 100vw);
		font-weight: 600;
		line-height: 1.25em;
	}
	:global(.text-20b) {
		font-family: 'Unbounded', cursive;
		font-size: calc(20 / 390 * 100vw);
		font-weight: 700;
		line-height: 1.4em;
	}
	:global(.text-16b) {
		font-family: 'Unbounded', cursive;
		font-size: calc(16 / 390 * 100vw);
		font-weight: 700;
		line-height: 1.5em;
	}
	:global(.text-16s) {
		font-family: 'Inter', sans-serif;
		font-size: calc(16 / 390 * 100vw);
		font-weight: 600;
		line-height: 1.5em;
	}
	:global(.text-16s-u) {
		font-family: 'Unbounded', cursive;
		font-size: calc(16 / 390 * 100vw);
		font-weight: 600;
		line-height: 1.5em;
	}
	:global(.text-16m) {
		font-family: 'Inter', sans-serif;
		font-size: calc(16 / 390 * 100vw);
		font-weight: 500;
		line-height: 1.5em;
	}
	:global(.text-14b) {
		font-family: 'Inter', sans-serif;
		font-size: calc(14 / 390 * 100vw);
		font-weight: 700;
		line-height: 1.43em;
	}
	:global(.text-14m) {
		font-family: 'Inter';
		font-weight: 500;
		font-size: calc(14 / 390 * 100vw);
		line-height: 1.43em;
	}
	:global(.text-14s) {
		font-family: 'Inter', sans-serif;
		font-size: calc(14 / 390 * 100vw);
		font-weight: 600;
		line-height: 1.43em;
	}
	:global(.text-12s) {
		font-family: 'Inter', sans-serif;
		font-size: calc(12 / 390 * 100vw);
		font-weight: 600;
		line-height: 1.5em;
	}
	:global(.footer__icon-container svg path) {
		stroke: var(--dark-gray);
	}
	:global(.footer__icon-container.__active svg path) {
		stroke: var(--blue);
	}
	:global(.big-black-button) {
		width: 100%;
		padding-top: 16px;
		padding-bottom: 16px;
		color: var(--white);
		background-color: var(--dark);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
	}
	:global(input) {
		all: unset;
	}
	</style>
