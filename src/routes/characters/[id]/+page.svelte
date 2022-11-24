<script>
	export let data;
	const Data = data.data;
	import { current } from '$lib/store';
	import { onMount } from 'svelte';
	onMount(() => {
		current.set(Data);
	});
</script>

<section>
	<div class="character">
		<div class="wrap">
			<h1>{$current.name}</h1>
			<img src={$current.media} alt="" />
			<h2>Image URL</h2>
			<p>{$current.media}</p>
			<h2>Quote</h2>
			<p>{$current.quote}</p>
		</div>

		<div class="details">
			<h2>Trivia</h2>
			<p>{$current.trivia}</p>
			<h2>Bio</h2>
			<p>{$current.bio}</p>
			<h2>Species</h2>
			<p>{$current.species}</p>
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
		max-width: calc(100vw - 5rem);
		max-height: calc(100vw - 5rem);
		height: 20rem;
		width: 20rem;
		object-fit: cover;
	}
	.details {
		display: flex;
		flex-direction: column;
		width: 25rem;
		background-color: rgba(0, 0, 0, 0.568);
		max-width: calc(100vw - 1rem);
		gap: 1rem;
		padding: 2rem;
		overflow: hidden;
		overflow-y: scroll;
		box-shadow: inset 0 0 1em rgb(63, 255, 249);
	}
	.wrap {
		display: flex;
		flex-direction: column;
		width: 25rem;
		gap: 1rem;
		background-color: rgba(0, 0, 0, 0.568);
		max-width: calc(100vw - 1rem);
		padding: 2rem;
		overflow: hidden;
		overflow-y: scroll;
		box-shadow: inset 0 0 1em rgb(63, 255, 249);
	}
	.wrap::-webkit-scrollbar {
		display: none;
	}
	.details::-webkit-scrollbar {
		display: none;
	}

	.character {
		padding: 2rem;
		display: flex;
		gap: 12rem;
	}
	p {
		font-size: 1.4rem;
		overflow-wrap: break-word;
	}
	@media (max-width: 1000px) {
		.character {
			gap: 1rem;
		}
	}
	@media (max-width: 850px) {
		.character {
			flex-direction: column;
		}
	}
</style>
