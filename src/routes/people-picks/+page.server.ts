import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: "Ellie's people picks",
		},
	};
};
