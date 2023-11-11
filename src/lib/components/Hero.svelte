<script>
	import AboutEllie from "./AboutEllie.svelte";
</script>

<header>
	<a href="/"><h1>Ellie's blog</h1></a>
	<AboutEllie />
</header>

<style lang="scss">
	header {
		font-weight: bold;
		padding-bottom: 19px;
		border-bottom: 1px solid var(--border);
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
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
		font-weight: 900;
		font-size: 42px;
	}

	@media (max-width: 700px) {
		header {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
