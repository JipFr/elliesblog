<script lang="ts">
	import Container from "$lib/components/util/Container.svelte";
	import Hero from "$lib/components/sections/Hero.svelte";
	import Meta from "$lib/components/util/Meta.svelte";

	import { page } from "$app/stores";
	$: meta = $page.data?.meta;
</script>

<svelte:head>
	{#if meta}
		<Meta
			title={meta.title}
			description={meta.description}
			image={meta.image}
		/>
	{:else}
		<Meta />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="theme-color"
		content="#f7d26f"
		media="(prefers-color-scheme: light)"
	/>
	<meta
		name="theme-color"
		content="#000"
		media="(prefers-color-scheme: dark)"
	/>
</svelte:head>

<Container>
	<div class="body">
		<Hero />
		<slot />
	</div>
</Container>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;800&display=swap");

	:global(:root) {
		--body: #eee8d8;
		--bg-image: url("/background.png");
		--bg-opacity: 0.2;
		--text: #634904;
		--text-harsh: #1f1f1f;
		--border: #634904;
		--highlight: #f7d26f;
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--body: #01030d;
			--bg-image: url("/background-dark.png");
			--text: #767b9a;
			--text-harsh: #9096b4;
			--border: #292d46;
			--highlight: url("https://png.pngtree.com/thumb_back/fh260/background/20210126/pngtree-cartoon-five-pointed-star-solid-color-background-image_541007.jpg"),
				#2626a2;
		}
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: "Shippori Mincho", serif, sans-serif;
		overflow-x: hidden;

		background-color: var(--body);
		color: var(--text);
		position: relative;
	}
	:global(body::before) {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: var(--bg-opacity);
		background-image: var(--bg-image);
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
		:global(:root) {
			--text: var(--text-harsh);
			--bg-opacity: 0.15;
		}
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

	@media (prefers-color-scheme: dark) and (max-width: 1000px) {
		:global(:root) {
			--bg-opacity: 0.1;
		}
	}
</style>
