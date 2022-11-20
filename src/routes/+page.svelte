<script>
	export let data;

	const Data = data.data;
	console.log(Data);
	// import { onMount } from 'svelte';
	// let data;
	// onMount(async () => {
	// 	const res = await fetch('http://localhost:3000/data');

	// 	data = await res.json();
	// 	console.log(data);
	// });
</script>

{#each Data as char}
	<p>{char.Name}</p>
{/each}
