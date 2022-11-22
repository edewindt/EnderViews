<script>
	import css from '$lib/app.css';
	import Nav from '../lib/nav.svelte';
</script>

<Nav />
<div class="e"><slot /></div>

<style>
	.e {
		padding-top: 9rem;
	}
</style>
