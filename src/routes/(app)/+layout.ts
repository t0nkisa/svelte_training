import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	if (event.data.user) {
		return {
			props: {
				user: event.data.user
			}
		};
	} else {
		redirect(302, '/login');
	}
};
