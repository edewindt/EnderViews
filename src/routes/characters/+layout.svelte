<script>
	import css from '$lib/app.css';
	import Nav from '$lib/nav.svelte';
	export let data;
	let Data = data.data;
</script>

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
