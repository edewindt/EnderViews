<script>
	export let Data;
	import { current } from '$lib/store.js';
</script>

<nav>
	<ul>
		{#each Data as char}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li class:selected={$current === char} on:click={current.set(char)}>{char.Name}</li>
		{/each}
	</ul>
</nav>

<style>
	li {
		cursor: pointer;
		color: aliceblue;
		padding: 1rem;
	}
	.selected {
		background-color: red;
	}
	nav {
		background-color: black;
		width: 10rem;
		height: 100%;
		position: fixed;
		overflow: hidden;
		overflow-y: scroll;
		z-index: 5;
	}
	nav::-webkit-scrollbar {
		display: none;
	}
</style>
