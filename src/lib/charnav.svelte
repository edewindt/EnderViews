<script>
	export let Data;
	import { current } from '$lib/store.js';
	let cchar;
</script>

<nav>
	<ul>
		{#each Data as char}
			<!-- svelte-ignore a11y-click-events-have-key-events -->

			<a href={'/characters/' + char.id}
				><li
					class:selected={$current.id === char.id}
					on:click={() => {
						current.set(char);
						cchar = char;
					}}
				>
					<span> {char.id}</span><span>{char.name}</span>
				</li></a
			>
		{/each}
	</ul>
</nav>
<select bind:value={cchar} on:change={current.set(cchar)} name="armies" id="armies">
	{#each Data as arm}
		<option value={arm}>{arm.id} - {arm.name}</option>
	{/each}
</select>

<style>
	select {
		width: 10rem;
		position: fixed;
		z-index: 10;
		left: 50%;
		transform: translate(-50%, 0);
		height: 3rem;
		padding-left: 1rem;
		background-color: black;
		color: pink;
		border: none;
		box-shadow: inset 0 0 1em rgb(63, 255, 249);
	}
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
		height: 80%;
		position: fixed;
		overflow: hidden;
		overflow-y: scroll;
		z-index: 5;
		left: 50%;
		transform: translate(-50%, 0);
		top: 11rem;
	}
	nav::-webkit-scrollbar {
		display: none;
	}
	ul {
		padding-top: 1rem;
	}

	@media (max-width: 1000px) {
		nav {
			display: none;
		}
	}
</style>
