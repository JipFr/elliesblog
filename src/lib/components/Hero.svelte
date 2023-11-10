<script>
	import AboutEllie from "./AboutEllie.svelte";
</script>

<header>
	<h1>Ellie's blog</h1>
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
	h1 {
		margin: 0;
		font-weight: 900;
		font-size: 42px;
	}
</style>
