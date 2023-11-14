<div class="container">
	<slot />
</div>

<style lang="scss">
	.container {
		max-width: calc(1034px + 4rem);
		margin: 0 auto;
		padding: 0 2rem;
	}

	@media (max-width: 1280px) {
		.container {
			max-width: calc(820px + 4rem);
		}
	}
</style>
