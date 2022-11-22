<script>
	export let data;
	const Data = data.data;
	import { army } from '$lib/store';
	import { onMount } from 'svelte';
	onMount(() => {
		army.set(Data);
	});
</script>

<section>
	<div class="army">
		<div class="wrap">
			<h1>{$army.name}</h1>
			<img src={$army.media} alt="" />
			<h2>Image URL</h2>
			<p>{$army.media}</p>
		</div>

		<div class="details">
			<h2>Notable Members</h2>
			{#each $army.notable_members as mem}<p>{mem}</p>{/each}
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
		width: 25rem;
		background-color: rgba(0, 0, 0, 0.568);
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

	.army {
		padding: 2rem;
		display: flex;
		gap: 12rem;
	}
	p {
		font-size: 1.4rem;
	}
</style>
