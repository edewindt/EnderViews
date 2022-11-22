export async function load({ fetch, params }) {
	const res = await fetch(import.meta.env.VITE_API + 'species/' + params.id);
	const data = await res.json();
	console.log(data);
	return {
		data
	};
}
