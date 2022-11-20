<script>
	export let data;

	const Data = data.data;
	console.log(Data);
</script>

{#each Data as char}
	<p>ID:{char.ID}</p>
	<p>{char.Name}</p>
	<p>{char.Quote}</p>
	<img src={char.Media} alt="" />
	<p>{char.Audio}</p>
	<br />
{/each}

<style>
	img {
		height: 200px;
		width: 200px;
		object-fit: cover;
	}
</style>
