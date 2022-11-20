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
		background-color: black;
		color: aliceblue;
		padding: 1rem;
	}
	ul {
		width: fit-content;
	}
	.selected {
		background-color: red;
	}
</style>
