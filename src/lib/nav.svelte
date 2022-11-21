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
	}
	.selected {
		color: red;
	}
	ul {
		display: flex;
		justify-content: space-around;
		width: 40rem;
	}
</style>
