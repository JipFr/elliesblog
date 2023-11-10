<div>
	<div class="about-wrapper">
		<div class="about">
			<div class="img-wrapper">
				<img src="/ellie.png" alt="Ellie" />
			</div>
			<div class="text-wrapper">
				<h2>About Ellie</h2>
				<p>Fake person, writer of words, lover of clothes.</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.about-wrapper {
		margin-top: 30px;
	}
	.about {
		display: flex;
		flex-direction: row-reverse;
		align-items: flex-end;
	}
	.img-wrapper {
		width: 100px;
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
			width: 1.5rem;
			height: 1.5rem;
			background: url("/🌸.png");
			background-size: cover;
			position: absolute;
			top: 22px;
			right: 20px;
		}
	}

	.text-wrapper {
		margin-bottom: 0.5rem;
	}

	h2,
	p {
		margin: 0;
		text-align: right;
		margin-right: 1rem;
	}
	p {
		margin-top: 10px;
	}
	h2 {
		margin-top: 1.5rem;
		font-size: 1.2rem;
	}
</style>
