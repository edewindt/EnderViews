<script>
	import { onMount } from 'svelte';
	import { page } from '$lib/store';
	let nav = [
		{ name: 'Species', url: '/species' },
		{ name: 'Characters', url: '/characters' },
		{ name: 'Armies', url: '/armies' }
	];
</script>

<header>
	<h1 class:hero={$page === 'Home'}><a href="/">The Ender API</a></h1>
	<div class="docs">
		<h2><a href={import.meta.env.VITE_API + 'swagger'}>Swagger Docs</a></h2>
	</div>

	<nav>
		<ul>
			{#each nav as { name, url }}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					on:click={() => {
						page.set(name);
					}}
				>
					<a class:selected={$page === name} href={url}>{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		z-index: 10;
		height: 5rem;
	}
	h1 {
		background-color: black;
		text-align: center;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}
	.docs {
		display: flex;
		justify-content: center;
		background-color: black;
		text-align: center;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}
	h2 a {
		color: pink;
		opacity: 1;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: black;
		height: 5rem;
	}

	a {
		color: aliceblue;
		opacity: 0.6;
		padding: 1rem;
	}
	.selected {
		box-shadow: inset 0 0 1em rgb(63, 255, 249);
		color: pink;
		opacity: 1;
	}
	ul {
		display: flex;
		justify-content: space-around;
		width: 40rem;
	}
	.hero a {
		opacity: 1;
		text-shadow: 0rem 0rem 0.5rem pink;
	}
</style>
