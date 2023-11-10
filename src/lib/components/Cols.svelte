<div class="cols">
	<slot />
</div>

<style lang="scss">
	.cols {
		display: grid;
		grid-template-columns: 1fr 280px;
		grid-gap: 0;
	}
</style>
