<script lang="ts">
	import type { PageData } from "./$types";

	import Heading2 from "$lib/components/util/Heading2.svelte";
	import Section from "$lib/components/util/Section.svelte";
	import Cols from "$lib/components/util/Cols.svelte";
	import AboutEllie from "$lib/components/parts/AboutEllie.svelte";
	import Divider from "$lib/components/util/Divider.svelte";
	import MoreAboutEllie from "$lib/components/sections/MoreAboutEllie.svelte";

	export let data: PageData;
	const post = data.post;
</script>

<Section>
	<Cols>
		<div class="post">
			<Heading2>{post.meta.title}</Heading2>
			{#if post.meta.thumbnail}
				<img class="thumbnail" src={post.meta.thumbnail} alt="" />
			{/if}
			{@html post.html}

			<Divider />

			<MoreAboutEllie title="About the author" />
		</div>
		<div class="post-right">
			<AboutEllie align="center" />
		</div>
	</Cols>
</Section>

<style lang="scss">
	.post {
		.thumbnail {
			width: 25%;
			float: right;
			margin-top: 40px;
			margin-left: 40px;
			border-radius: 10px;
		}

		:global(h2) {
			font-size: 2rem;
			font-weight: 800;
		}

		:global(h2:not(:first-child)) {
			font-size: 1.5rem;
			margin-top: 40px;
		}

		:global(p) {
			font-size: 1.2rem;
		}

		:global(img) {
			max-width: 100%;
			border-radius: 20px;
		}
	}

	.post-right {
		display: flex;
		justify-content: flex-end;
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

	@media (max-width: 1250px) {
		.post-right {
			display: none;
		}
	}
</style>
