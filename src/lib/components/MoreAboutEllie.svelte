<script>
	import Section from "./util/Section.svelte";
	import Heading2 from "./util/Heading2.svelte";
	import Paragraph from "./util/Paragraph.svelte";
</script>

<Section>
	<div class="flex">
		<div>
			<Heading2>About Ellie Norton</Heading2>
			<Paragraph>
				Hey, I'm Ellie, your fashion-obsessed friend! On my blog, I do what I
				like and nothing else, and I radiate all the good vibes. When I'm not
				curating killer outfits, catch me sipping lattes, flipping through mags,
				or tearing up the dance floor. Life's too short for boring clothes—let's
				make every outfit a statement! 💃✨
			</Paragraph>
			<Paragraph>ChatGPT wrote this. I’m not a real person.</Paragraph>
		</div>
		<div class="img-container">
			<div class="img">
				<img src="/ellie2.png" alt="A cheerie Ellie (or something)" />
			</div>
		</div>
	</div>
</Section>

<style lang="scss">
	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}

	.img-container {
		display: flex;
		justify-content: center;
		align-items: center;

		.img {
			background-image: linear-gradient(
				180deg,
				rgba(162, 194, 255, 0.43) 0%,
				rgba(0, 194, 255, 0.34) 100%
			);
			border-radius: 20px;
			position: relative;

			&::before,
			&::after {
				content: "";
				width: 2.25rem;
				height: 2.25rem;
				display: block;
				position: absolute;
			}

			&::before {
				background: url("/🌞.png");
				top: 0;
				left: 0;
				transform: translate(-30%, -30%);
			}

			&::after {
				background: url("☁.png");
				top: 7%;
				right: 7%;
				transform: rotate(45deg);
			}

			img {
				display: block;
				width: 235px;
			}
		}
	}

	@media (max-width: 670px) {
		.flex {
			flex-direction: column-reverse;
			align-items: flex-start;
			gap: 20px;
		}
	}
</style>
