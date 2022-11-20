<script>
	import Nav from '../lib/nav.svelte';

	export let data;
	let Data = data.data;
</script>

<Nav {Data} />
<slot />
