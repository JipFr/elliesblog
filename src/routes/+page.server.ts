import type { Post } from "$lib/types";
import { getPosts } from "$lib/utils/posts";
import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const posts = await getPosts();
	const relevantPost = posts.find((post: Post) => post.meta.slug === params);

	return {
		post: relevantPost,
	};
};
