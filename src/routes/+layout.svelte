<script>
	import Container from "$lib/components/Container.svelte";
</script>

<Container>
	<div class="body">
		<slot />
	</div>
</Container>

<style lang="scss">
	:global(:root) {
		--body: #eee8d8;
		--text: #634904;
		--border: #634904;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: "Shippori Mincho", "Segoe UI", Tahoma, Geneva, Verdana,
			sans-serif;
		overflow-x: hidden;

		background-image: url("/background.png");

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
</style>