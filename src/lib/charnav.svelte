<script>
	export let Data;
	import { current } from '$lib/store.js';
</script>

<nav>
	<ul>
		{#each Data as char}
			<!-- svelte-ignore a11y-click-events-have-key-events -->

			<a href={'/characters/' + char.ID}
				><li class:selected={$current.ID === char.ID} on:click={current.set(char)}>
					<span> {char.ID}</span><span>{char.Name}</span>
				</li></a
			>
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
		display: flex;
		justify-content: space-between;
	}
	li:hover {
		opacity: 0.9;
		color: rgb(63, 255, 249);
		background-color: black;
		box-shadow: inset 0 0 1em rgb(63, 255, 249);
	}
	.selected {
		/* background-color: rgba(0, 116, 124, 0.198); */
		box-shadow: inset 0 0 1em rgb(63, 255, 249);
		color: pink;
		opacity: 1;
	}
	.selected:hover {
		color: pink;
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
	ul {
		padding-top: 1rem;
	}

	@media (max-width: 1600px) {
		nav {
			margin-left: 0;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}
</style>
