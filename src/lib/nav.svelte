<script>
	export let Data;
</script>

<nav>
	<ul>
		{#each Data as char}
			<li><a href={'/characters/' + char.ID}>{char.Name}</a></li>
		{/each}
	</ul>
</nav>
