import { VERCEL_GIT_COMMIT_REF } from '$env/static/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	return {
		deploymentGitBranch: VERCEL_GIT_COMMIT_REF,
	};
};