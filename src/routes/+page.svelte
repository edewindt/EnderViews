<script>
	import { current } from '$lib/store';

	import { fade } from 'svelte/transition';
</script>

<h1 transition:fade>{$current.Name}</h1>
<img src={$current.Media} alt="" />

<style>
	img {
		height: 200px;
		width: 200px;
		object-fit: cover;
	}
</style>
