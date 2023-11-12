import { getPosts } from "$lib/utils/posts";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Post } from "$lib/types";

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const posts = await getPosts();
	const relevantPost = posts.find(
		(post: Post) => post.meta.slug === params.slug
	);

	if (!relevantPost) throw error(404, "Post not found");

	return {
		post: relevantPost,
		meta: {
			title: `${relevantPost.meta.title} on Ellie's blog`,
			description:
				relevantPost.md.slice(0, 100).replace(/#\*|_|\[\]/g, "") + "...",
			image: relevantPost.meta.thumbnail,
		},
	};
};
