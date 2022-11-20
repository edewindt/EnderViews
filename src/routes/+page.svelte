<script>
	import { current } from '$lib/store';

	import { fade } from 'svelte/transition';
</script>

<div class="character">
	<h1>{$current.Name}</h1>
	<img src={$current.Media} alt="" />
	<p>Quote: {$current.Quote}</p>
</div>

<style>
	img {
		max-width: calc(100vw - 15rem);
		max-height: calc(100vw - 15rem);
		height: 20rem;
		width: 20rem;
		object-fit: cover;
	}
	.character {
		display: grid;
		justify-content: center;
		margin-left: 1rem;
	}
	p {
		font-size: 2rem;
	}
</style>
