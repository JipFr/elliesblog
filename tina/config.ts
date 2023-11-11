import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: "e552258c-17fd-47c2-a7ec-898478a9a83c", // Get this from tina.io
	token: "33fa76798a51fcf651752c46d1523095a69e357d", // Get this from tina.io

	build: {
		outputFolder: "admin",
		publicFolder: "static",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "static",
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "content/posts",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "string",
						name: "title_short",
						label: "Title (short)",
						required: true,
					},
					{
						type: "string",
						name: "slug",
						label: "Slug",
						required: true,
					},
					{
						type: "datetime",
						name: "date",
						label: "Date",
						required: true,
					},
					{
						type: "image",
						name: "thumbnail",
						label: "Thumbnail",
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
		],
	},
});
