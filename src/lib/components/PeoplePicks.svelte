<script>
	import BigImageCard from "./BigImageCard.svelte";
	import Heading2 from "./util/Heading2.svelte";
	import Paragraph from "./util/Paragraph.svelte";
	import Section from "./util/Section.svelte";

	import { page as pageStore } from "$app/stores";

	$: page = $pageStore.data;
</script>

<Section>
	<Heading2>Ellie's people picks</Heading2>
	<Paragraph>
		Where I pick somebody and share what I think of their fashion choices!
	</Paragraph>

	<div class="grid">
		{#each page.posts as post}
			<a href={`/${post.meta.slug}`} class="hover-shift">
				<BigImageCard url={post.meta.thumbnail}
					>{post.meta.title_short}</BigImageCard
				>
			</a>
		{/each}
	</div>
</Section>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
		grid-gap: 20px;
		margin-top: 20px;
	}
	a {
		text-decoration: none;
		color: inherit;
	}

	.hover-shift :global(> *) {
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	.hover-shift:hover :global(> *) {
		position: relative;
		z-index: 100;
		transform: rotateX(-8deg) rotateY(-18deg);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	}
</style>
