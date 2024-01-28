import { supabase } from '$lib/server/supabaseClient';
import type { User } from '@supabase/supabase-js';

export const signUp = async (email: string, password: string, username: string) => {
	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: { username }
		}
	});
	if (error) {
		throw error;
	}
	return { message: 'success' };
};

export const signInWithPassword = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});
	if (error) {
		throw error;
	}
	return { message: 'success', data };
};

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	if (error) {
		throw error;
	}
	return { message: 'success' };
};

export const getUser = async (cookies: { access_token: string; refresh_token: string }) => {
	const {
		data: { user },
		error
	} = await supabase.auth.setSession({
		access_token: cookies.access_token,
		refresh_token: cookies.refresh_token
	});
	if (error) {
		throw error;
	}
	return user as User;
};
