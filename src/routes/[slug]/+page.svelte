<script lang="ts">
	import type { PageData } from "./$types";

	import Heading2 from "$lib/components/util/Heading2.svelte";
	import Section from "$lib/components/util/Section.svelte";

	export let data: PageData;
	const post = data.post;
</script>

<Section>
	<div class="post">
		<Heading2>{post.meta.title}</Heading2>
		<img class="thumbnail" src={post.meta.thumbnail} alt="" />
		{@html post.html}
	</div>
</Section>

<style lang="scss">
	.post {
		background-image: url(https://alpha.cafe/img/notebook.png);
		padding: 20px;
		border-radius: 20px;
		max-width: 700px;
		margin: 0 auto;

		.thumbnail {
			width: 120px;
			float: left;
			margin-top: 20px;
			margin-right: 20px;
			border-radius: 10px;
		}

		:global(h2) {
			font-size: 1.5rem;
			font-weight: 900;
		}

		:global(p) {
			font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
				Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
				sans-serif;
			font-size: 1.2rem;
		}

		:global(img) {
			max-width: 100%;
			border-radius: 20px;
		}
	}
	// .post :global(h2) {
	// 	width: 100%;
	// 	text-align: center;
	// 	font-weight: bold;
	// 	font-size: 1.5rem;
	// 	padding: 30px 0;
	// 	background: rgb(140 97 56 / 10%);
	// 	border-radius: 20px;
	// }
</style>
