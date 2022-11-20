<script>
	export let data;

	const Data = data.data;
	console.log(Data);
</script>

{#each Data as char}
	<p>ID:{char.ID}</p>
	<p>{char.Name}</p>
	<p>{char.Quote}</p>
	<p>{char.Media}</p>
	<p>{char.Audio}</p>
	<br />
{/each}
