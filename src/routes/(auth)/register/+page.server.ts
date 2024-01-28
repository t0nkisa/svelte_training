import { signUp } from '$lib/server/auth/auth';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	register: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const password_confirmation = formData.get('password_confirmation') as string;
		const username = formData.get('username') as string;
		if (!email) {
			return fail(400, { username, emailMissing: true });
		}
		if (!username) {
			return fail(400, { email, usernameMissing: true });
		}
		if (!password) {
			return fail(400, { email, username, passwordMissing: true });
		}
		if (!password_confirmation) {
			return fail(400, { email, username, passwordConfirmationMissing: true });
		}
		if (password !== password_confirmation) {
			return fail(400, { email, username, passwordMismatch: true });
		}
		try {
			await signUp(email, password, username);
			return { success: true };
		} catch (error) {
			console.error('Auth error', error);
		}
	}
} satisfies Actions;
