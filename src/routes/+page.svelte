<script>
	import { onMount } from 'svelte';
	import { page } from '$lib/store';

	onMount(() => {
		page.set('Home');
	});
	let i = 0;
	let heroes = [
		'https://eliasdewindt.com/_app/immutable/assets/lavacomp-6948a1d5.png',
		'https://eliasdewindt.com/_app/immutable/assets/space-e775814d.jpg',
		'https://eliasdewindt.com/_app/immutable/assets/water-c190a47f.png',
		'https://eliasdewindt.com/_app/immutable/assets/watercomp-111e8ff4.png'
	];

	let hero = heroes[i];

	const transition = () => {
		if (i < heroes.length) {
			hero = heroes[i];
		}
	};

	let buttons = [
		{ name: 'Characters', url: '/characters' },
		{ name: 'Species', url: '/species' },
		{ name: 'Armies', url: '/armies' },
		{ name: 'Swagger Docs', url: '/' },
		{ name: 'GraphQL', url: '/' }
	];
</script>

<svelte:head>
	<title>Ender API</title>
</svelte:head>

<section
	class="hero"
	style="  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({hero});"
>
	<h2 class="hero-text">The Ender API</h2>
	<div id="buttons">
		{#each buttons as { name, url }}
			<a href={url}><button class="butt">{name}</button></a>
		{/each}
	</div>
</section>

<style>
	/* section {
		--light: aliceblue;
	} */
	.hero {
		height: fit-content;
		min-height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: grid;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.hero-text {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
		color: white;
		font-size: 4rem;
		text-align: center;
	}
	#buttons {
		height: 100%;
		width: 100%;
		text-align: center;
	}
	#buttons .butt {
		padding: 1rem;
		border-radius: 0.8rem;
		background: transparent;
		color: rgb(196, 255, 253);
		border: 3px solid var(--light);
		margin: 0.5rem;
		font-size: 1.75rem;
		cursor: pointer;
		transition: 0.6s;
	}
	.butt:hover {
		--light: rgb(63, 255, 249);
		font-size: 2rem;
		background-color: transparent;
		border: 3px solid var(--light);
		color: var(--light);
		padding: 0.3em;
		border-radius: 15%;
		text-shadow: 0 0 0.25em var(--light);
		box-shadow: inset 0 0 0.9em var(--light), 0 0 0.7em var(--light);
		position: relative;
		cursor: pointer;
	}
	@media only screen and (max-width: 400px) {
		.hero-text {
			color: white;
			font-size: 2.5rem;
			text-align: center;
		}
	}
</style>
