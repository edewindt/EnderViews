export async function load({ fetch }) {
	const res = await fetch('http://localhost:3000/data');
	const data = await res.json();

	return {
		data
	};
}
