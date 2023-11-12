<div class="cols">
	<slot />
</div>

<style lang="scss">
	.cols {
		display: grid;
		grid-template-columns: 1fr 250px;
		grid-gap: 0;
	}

	@media (max-width: 1000px) {
		.cols {
			grid-template-columns: 100%;
		}
	}
</style>
