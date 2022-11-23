<script>
	import Nav from '$lib/charnav.svelte';
	import { onMount } from 'svelte';
	import { page } from '$lib/store';
	export let data;
	let Data = data.data;
	const title = 'Characters';
	onMount(() => {
		page.set(title);
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<body>
	<Nav {Data} />
	<main
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
	url({import.meta.env.VITE_API + 'space.jpg'});"
	>
		<slot />
	</main>
</body>

<style>
	main {
		height: 50%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		height: 100vh;
		overflow: hidden;
	}
</style>
