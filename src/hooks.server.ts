import { getUser } from '$lib/server/auth/auth';
import type { Handle } from '@sveltejs/kit';
export const handle: Handle = async ({ event, resolve }) => {
	const cookies = {
		access_token: event.cookies.get('access_token') as string,
		refresh_token: event.cookies.get('refresh_token') as string
	};
	try {
		event.locals.user = await getUser(cookies);
	} catch (error) {
		console.error(error);
	}

	const response = await resolve(event);
	return response;
};
