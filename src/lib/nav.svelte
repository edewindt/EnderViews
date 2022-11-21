<script>
	let nav = [
		{ name: 'Home', url: '/' },
		{ name: 'Characters', url: '/characters' },
		{ name: 'Armies', url: '/armies' }
	];
</script>

<nav>
	<ul>
		{#each nav as { name, url }}
			<li><a href={url}>{name}</a></li>
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
	ul {
		display: flex;
		justify-content: space-around;
		width: 40rem;
	}
</style>
