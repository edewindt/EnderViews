<script>
	let test = import.meta.env.VITE_TEST;
	import Nav from '../../lib/nav.svelte';
</script>

<Nav />
<h1>{test}</h1>
