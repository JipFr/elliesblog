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

	@media (max-width: 600px) {
		.post {
			width: 100%;
			max-width: auto;
		}
		.post .thumbnail {
			width: 100%;
			border-radius: 20px;
			margin-right: 0;
			margin-bottom: 20px;
		}
	}
</style>
