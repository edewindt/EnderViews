<script>
	import { current } from '$lib/store';

	import { fade } from 'svelte/transition';
</script>

<section>
	<div class="character">
		<div class="wrap">
			<h1>{$current.Name}</h1>
			<img src={$current.Media} alt="" />
			<h2>Quote</h2>
			<p>{$current.Quote}</p>
		</div>

		<div class="details">
			<p>Trivia: {$current.Trivia}</p>
			<p>Bio: {$current.Bio}</p>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		max-height: 100vh;
	}
	img {
		max-width: calc(100vw - 20rem);
		max-height: calc(100vw - 20rem);
		height: 20rem;
		width: 20rem;
		object-fit: cover;
	}
	.details {
		display: flex;
		flex-direction: column;
		width: 20rem;
	}
	.wrap {
		display: flex;
		flex-direction: column;
		width: 20rem;
		gap: 1rem;
	}
	.character {
		padding: 2rem;
		display: flex;
		gap: 12rem;
	}
	p {
		font-size: 2rem;
	}
</style>
