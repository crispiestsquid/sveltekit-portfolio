import { getCollection } from '$lib/server/mongodb.js';

export async function load({ cookies }) {
	const user = await cookies.get('user');
	return user ? JSON.parse(user) : null;
}

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const firstName = data.get('firstName');

		const collection = await getCollection('users');
		const existing = await collection.findOne({ email });
		if (existing) {
			return { error: { msg: 'User already exists' } };
		}
		await collection.insertOne({ email, firstName });

		return { success: { msg: 'Successfully registered!' } };
	},
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');

		const collection = await getCollection('users');
		const existing = await collection.findOne({ email });
		if (!existing) {
			return { error: { msg: 'User does not exist' } };
		}

		cookies.set('user', JSON.stringify(existing), { path: '/' });

		return { success: { msg: 'Successfully logged in!' } };
	}
};
