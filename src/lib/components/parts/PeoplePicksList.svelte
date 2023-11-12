<script>
	import { page as pageStore } from "$app/stores";
	import BigImageCard from "./BigImageCard.svelte";
	$: page = $pageStore.data;

	export let oneRow = false;
</script>

<div class="grid-wrapper">
	<div class="grid" class:one-row={oneRow}>
		{#each page.posts as post}
			<a href={`/${post.meta.slug}`} class="hover-shift">
				<BigImageCard url={post.meta.thumbnail}>
					{post.meta.title_short}
				</BigImageCard>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
		grid-gap: 20px;
		margin-top: 20px;

		&.one-row {
			grid-template-rows: 1fr;
			grid-auto-rows: 0px;
			overflow-y: hidden;
			grid-gap: 0 20px;
		}
	}
	a {
		text-decoration: none;
		color: inherit;
	}

	.hover-shift :global(> *) {
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	@media (hover: hover) {
		.hover-shift:hover :global(> *) {
			position: relative;
			z-index: 100;
			transform: rotateX(-8deg) rotateY(-18deg);
			box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
		}
	}

	@media (max-width: 1000px) {
		.grid-wrapper {
			display: grid;
			grid-template-columns: 100%;
			width: calc(100% + 4rem);
			margin-left: -2rem;
			position: relative;
		}
		.grid {
			display: flex;
			overflow-x: auto;
			overflow-y: hidden;
			max-width: 100%;
			scroll-snap-type: x mandatory;

			> :global(*) {
				min-width: 200px;
				scroll-snap-align: start;
				scroll-margin-left: 2rem;
			}

			> :global(*:first-child) {
				margin-left: 2rem;
			}

			> :global(*:last-child) {
				display: flex;
			}
			> :global(*:last-child::after) {
				content: "";
				display: block;
				min-width: 2rem;
				height: 1px;
			}
		}
	}
</style>
