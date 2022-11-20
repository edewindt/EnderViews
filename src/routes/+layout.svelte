<script>
	import css from '$lib/app.css';
	import Nav from '$lib/nav.svelte';
	export let data;
	let Data = data.data;
	console.log(Data);
</script>

<Nav {Data} />
<main><slot /></main>

<style>
	main {
		padding-left: 10rem;
	}
</style>
