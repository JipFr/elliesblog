<div class="divider">
	<img src="/🌷.png" width="26" height="27" alt="" />
</div>

<style lang="scss">
	.divider {
		margin: 40px 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 30px;

		&::before,
		&::after {
			content: "";
			width: 100%;
			height: 1px;
			--direction: to left;
			background-image: linear-gradient(
				var(--direction),
				var(--border),
				transparent
			);
		}

		&::after {
			--direction: to right;
		}
	}
</style>
