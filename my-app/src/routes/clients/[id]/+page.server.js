//src/routes/clients/[id]/+page.server.js
export async function load({ fetch, params}) {
	const id = +params.id
	const response = await fetch('/api/users')
	const users = await response.json()

    return { user: users.find((use) => use.id === id) }
}
