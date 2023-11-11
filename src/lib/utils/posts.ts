import fs from "fs";
import marked from "marked";

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

export function getPosts() {
	const postsPath = "./content/posts/";
	const paths = fs.readdirSync(postsPath);
	const posts: Post[] = paths
		.map((path: string) => {
			const content = fs.readFileSync(postsPath + path, "utf-8"); // Get markdown files
			const splitContent = content.split("---");
			const meta = Object.fromEntries(
				splitContent[1]
					.split("\n")
					.filter(Boolean)
					.map((t: string) => t.split(": "))
			) as PostMeta;
			const md = splitContent.slice(2).join("---").trim();
			const post: Post = {
				meta,
				md,
				html: marked.parse(md),
			};
			return post;
		})
		.sort((a: Post, b: Post) => {
			return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
		});

	return posts;
}
