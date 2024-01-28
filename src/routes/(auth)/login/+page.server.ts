import { signInWithPassword } from '$lib/server/auth/auth';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		if (!email) {
			return fail(400, { emailMissing: true });
		}

		if (!password) {
			return fail(400, { email, passwordMissing: true });
		}

		try {
			const { data } = await signInWithPassword(email, password);
			const expirationDate = new Date();
			expirationDate.setSeconds(data.session.expires_in);
			event.cookies.set('access_token', data.session.access_token, {
				expires: expirationDate,
				path: '/'
			});

			event.cookies.set('refresh_token', data.session.refresh_token, {
				expires: expirationDate,
				path: '/'
			});
			return { success: true };
		} catch {
			return fail(400, { email, invalidCredentials: true });
		}
	}
} satisfies Actions;
