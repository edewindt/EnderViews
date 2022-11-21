<script>
	import Nav from '$lib/armynav.svelte';
	import { onMount } from 'svelte';
	import { page } from '$lib/store';
	export let data;
	let Data = data.data;
	const title = 'Armies';
	onMount(() => {
		page.set(title);
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<body>
	<Nav {Data} />
	<main><slot /></main>
</body>

<style>
	main {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('http://localhost:3000/space.jpg');
		height: 50%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		height: 100vh;
		overflow: hidden;
	}
</style>
