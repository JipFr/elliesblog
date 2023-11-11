<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Meta from "$lib/components/util/Meta.svelte";

	import { page } from "$app/stores";
	const post = $page.data?.post;
</script>

<svelte:head>
	{#if post}
		<Meta
			title={`${post.meta.title} on Ellie's blog`}
			description={post.md.slice(0, 100).replace(/#\*|_|\[\]/g, "") + "..."}
			image={post.meta.thumbnail}
		/>
	{:else}
		<Meta />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#f7d26f" />
</svelte:head>

<Container>
	<div class="body">
		<Hero />
		<slot />
	</div>
</Container>

<style lang="scss">
	:global(:root) {
		--body: #eee8d8;
		--bg-image: url("/background.png");
		--text: #634904;
		--text-harsh: #000;
		--border: #634904;
		--highlight: #f7d26f;
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--body: #01030d;
			--bg-image: url("/background-dark.png");
			--text: #767b9a;
			--text-harsh: #717797;
			--border: #292d46;
			--highlight: url("https://png.pngtree.com/thumb_back/fh260/background/20210126/pngtree-cartoon-five-pointed-star-solid-color-background-image_541007.jpg"),
				#2626a2;
		}
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: "Shippori Mincho", "Segoe UI", Tahoma, Geneva, Verdana,
			sans-serif;
		overflow-x: hidden;

		background-image: var(--bg-image);

		background-color: var(--body);
		color: var(--text);
	}
	:global(*) {
		box-sizing: border-box;
	}

	.body {
		width: 100%;
		background-color: var(--body);
		min-height: 100vh;
		min-height: 100dvh;
		padding: 0 30px;
		position: relative;
		padding-bottom: 100px;

		&::after,
		&::before {
			content: "";
			width: 100%;
			height: 100%;
			max-width: 220px;
			position: absolute;
			top: 0;
			--direction: to left;
			background-image: linear-gradient(
				var(--direction),
				var(--body),
				transparent
			);
		}

		&::before {
			left: 0;
			transform: translateX(-100%);
		}

		&::after {
			--direction: to right;
			right: 0;
			transform: translateX(100%);
		}
	}

	@media (max-width: 1000px) {
		.body {
			padding-left: 0;
			padding-right: 0;
			background-color: transparent;

			&::before,
			&::after {
				display: none;
			}
		}
	}
</style>
