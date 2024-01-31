export async function load({ fetch, params}) {
	const id = +params.id
	const response = await fetch('/api/users')
	const users = await response.json()
	//return {users}
	console.log(users)
    return { user: users.find((use) => use.id === id) }
}
