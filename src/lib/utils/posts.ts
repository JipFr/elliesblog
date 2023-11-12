import fs from "node:fs";
import { Marked } from "marked";
import fm from "front-matter";

const marked = new Marked();

interface PostMeta {
	title: string;
	title_short: string;
	slug: string;
	date: string;
	thumbnail: string;
}

export interface Post {
	meta: PostMeta;
	md: string;
	html: string;
}

export async function getPosts() {
	const postsPath = "./content/posts/";
	const paths = fs.readdirSync(postsPath);
	const posts: Post[] = (
		await Promise.all(
			paths.map(async (path: string) => {
				const content = fs.readFileSync(postsPath + path, "utf-8"); // Get markdown files

				const { attributes: meta, body: md } = fm<PostMeta>(content);

				const post: Post = {
					meta,
					md,
					html: await marked.parse(md),
				};
				return post;
			})
		)
	).sort((a: Post, b: Post) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});

	return posts;
}
