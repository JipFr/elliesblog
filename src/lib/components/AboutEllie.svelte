<div>
	<div class="about-wrapper">
		<div class="about">
			<div class="img-wrapper">
				<img src="/ellie.png" alt="Ellie" />
			</div>
			<h2>About Ellie</h2>
			<p>Fake person, writer of words, lover of clothes.</p>
		</div>
	</div>
</div>

<style lang="scss">
	.about-wrapper {
		margin-top: 30px;
		padding-left: 40px;
		border-left: 1px solid var(--border);
	}

	@media (prefers-color-scheme: dark) {
		.about-wrapper {
			border-left-color: transparent;
		}
	}
	.about {
		width: 190px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.img-wrapper {
		width: 150px;
		background: var(--highlight);
		padding-top: 20px;
		border-radius: 20px 20px 0 0;
		position: relative;
		background-blend-mode: difference;

		img {
			width: 100%;
			display: block;
		}

		&::after {
			content: "";
			display: block;
			width: 2rem;
			height: 2rem;
			background: url("/🌸.png");
			position: absolute;
			top: 22px;
			right: 30px;
		}
	}

	h2,
	p {
		margin: 0;
		text-align: center;
	}
	p {
		font-size: 0.9rem;
		margin-top: 10px;
	}
	h2 {
		margin-top: 10px;
		font-size: 1.1rem;
	}
</style>
