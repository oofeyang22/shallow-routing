export async function load({ fetch }) {
	const response = await fetch('/api/users')
	return { infos: await response.json() }
}