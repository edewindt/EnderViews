<script>
	export let data;
	let id = data.params.id;
	console.log(id);

	import { currentID } from '$lib/store.js';
	import { onMount } from 'svelte';
	onMount(() => {
		currentID.set(id);
	});
</script>

<h1>Hello</h1>
