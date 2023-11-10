<div class="cols">
	<slot />
</div>

<style lang="scss">
	.cols {
		display: grid;
		grid-template-columns: 1fr 200px;
		grid-gap: 20px;
	}
</style>
