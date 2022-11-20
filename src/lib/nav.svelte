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
		text-align: center;
		opacity: 0.6;
	}
	.selected {
		/* background-color: rgba(0, 116, 124, 0.198); */
		box-shadow: inset 0 0 1em rgb(63, 255, 249);
		border-radius: 10px;
		color: rgb(173, 255, 252);
		opacity: 1;
	}
	nav {
		background-color: rgba(0, 0, 0, 0.568);
		width: 10rem;
		height: 100%;
		position: fixed;
		overflow: hidden;
		overflow-y: scroll;
		z-index: 5;
		left: 50%;
		transform: translate(-50%, 0);
	}
	nav::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 1600px) {
		nav {
			margin-left: 0;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}
</style>
