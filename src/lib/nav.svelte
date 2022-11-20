<script>
	export let Data;
	import { current } from '$lib/store.js';

	$: console.log($current);
</script>

<nav>
	<ul>
		{#each Data as char}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li on:click={current.set(char)}>{char.Name}</li>
		{/each}
	</ul>
</nav>

<style>
	li {
		cursor: pointer;
	}
</style>
