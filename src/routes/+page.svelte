<script>
	import { current } from '$lib/store';

	import { fade } from 'svelte/transition';
</script>

<div class="character">
	<h1>{$current.Name}</h1>
	<img src={$current.Media} alt="" />
</div>

<style>
	img {
		height: 200px;
		width: 200px;
		object-fit: cover;
	}
	.character {
		display: grid;
		justify-content: center;
	}
</style>
