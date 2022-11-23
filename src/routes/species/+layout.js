export async function load({ fetch }) {
	const res = await fetch(import.meta.env.VITE_API + 'species');
	const data = await res.json();
	return {
		data
	};
}
