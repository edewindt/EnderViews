<script>
	import { onMount } from 'svelte';
	import { page } from '$lib/store';
	let nav = [
		{ name: 'Home', url: '/' },
		{ name: 'Characters', url: '/characters' },
		{ name: 'Armies', url: '/armies' }
	];
	$: console.log($page);
</script>

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

<style>
	nav {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		z-index: 10;
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
</style>
