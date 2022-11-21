export async function load({ fetch, params }) {
	const res = await fetch(import.meta.env.VITE_API + 'armies/' + params.id);
	const data = await res.json();
	return {
		data
	};
}
