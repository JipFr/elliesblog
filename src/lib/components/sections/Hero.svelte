<script lang="ts">
	import AboutEllie from "../parts/AboutEllie.svelte";

	import type { PageData } from "../../../routes/$types";
	import { page } from "$app/stores";
	$: data = $page.data as PageData;
	$: meta = data?.meta;
</script>

<header data-hide-about={!!meta.hideAbout}>
	<div>
		<h3>{meta?.subheading || ""}</h3>
		<a href="/"><h1>Ellie's blog</h1></a>
	</div>
	<div class="about">
		<AboutEllie align="right" />
	</div>
</header>

<style lang="scss">
	header {
		font-weight: 500;
		padding-bottom: 19px;
		border-bottom: 1px solid var(--border);
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		min-height: 150px;
	}
	header[data-hide-about="true"] .about {
		opacity: 0;
	}
	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			text-decoration: underline;
		}
	}
	h1 {
		margin: 0;
		font-weight: 800;
		font-size: 42px;
	}

	h3 {
		margin: 0;
	}

	@media (max-width: 800px) {
		header {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-end;

			.about {
				display: none;
			}
		}
	}
</style>
