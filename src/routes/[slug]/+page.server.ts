import { getPosts } from "$lib/utils/posts";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const posts = await getPosts();
	console.log(params.slug);
	const relevantPost = posts.find(
		(post: any) => post.meta.slug === params.slug
	);

	if (!relevantPost) throw error(404, "Post not found");

	return {
		post: relevantPost,
	};
};
