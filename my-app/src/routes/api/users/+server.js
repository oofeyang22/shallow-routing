import { json } from '@sveltejs/kit'

export async function GET() {
    const users = []

    for (let i = 1; i < 8; i++) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
        const userData = await response.json()
		
        users.push({id: i, userData})

    }

    return json(users)
}
