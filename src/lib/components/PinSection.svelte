<script lang="ts">
	import { page as pageStore } from "$app/stores";
	import Pinterest from "$lib/icons/Pinterest.svelte";
	import Heading2 from "./util/Heading2.svelte";
	import Paragraph from "./util/Paragraph.svelte";
	import Section from "./util/Section.svelte";

	let page: any;
	pageStore.subscribe((l) => {
		page = l;
	});
	const pins = page?.data?.pins;
	const pinsClone = Object.assign([], pins);

	function getImageFromPin(pin: any) {
		const { images } = pin;
		const { orig } = images;
		return orig.url;
	}

	// Generate grid layout randomly
	const colCount = 9;
	let colsFilled = 0;
	let cols: any = [];

	while (colsFilled < colCount) {
		const possibleCols = [2, 2, 3];
		const colsToFill = Math.min(
			possibleCols[Math.floor(Math.random() * possibleCols.length)],
			colCount - colsFilled
		);

		const booleanRandom = Math.random() >= 0.5;
		const rows = colsToFill === 2 ? (booleanRandom ? 2 : 1) : 1;

		if (colsToFill === 2 || colsToFill === 3) {
			cols.push({
				span: colsToFill,
				pins: pinsClone.splice(0, rows),
				rowCount: rows === 2 ? 1 : 2,
				t: colsFilled,
			});
			colsFilled += colsToFill;
		}
		if (colsToFill === 1) {
			const last = cols[cols.length - 1];
			cols[cols.length - 1] = {
				...last,
				span: last.span + 1,
			};
			colsFilled++;
		}
	}
</script>

<Section>
	<Heading2>Ellie's pins</Heading2>
	<Paragraph>I love to go on Pinterest and pin whatever I see fit!</Paragraph>

	<div class="grid">
		{#each cols as col}
			<div
				class="grid-item"
				style="--cols: {col.span}; --row-span: {col.rowCount};"
			>
				{#each col.pins as pinRowItem}
					<a
						class="hover-shift"
						href={`https://pinterest.com/pin/${pinRowItem.id}/`}
						target="_blank"
					>
						<img src={getImageFromPin(pinRowItem)} alt="" />
					</a>
				{/each}
			</div>
		{/each}
	</div>

	<div class="social-link-wrapper">
		<a
			href="https://pinterest.com/ellienorton_/pins/"
			target="_blank"
			class="social-link"
		>
			<Pinterest />
			See all my pins
		</a>
	</div>
</Section>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 10px;
		margin-top: 30px;

		.grid-item {
			grid-column: span var(--cols);
			display: grid;
			--h: 180px;
			grid-template-rows: var(--h) var(--h);
			grid-gap: inherit;

			a {
				grid-row: span var(--row-span);
			}
			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 20px;
			}
		}
	}
	.social-link-wrapper {
		width: 100%;
		margin-top: 30px;
		display: flex;
		justify-content: center;

		.social-link {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20px;
			color: var(--text-harsh);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.hover-shift img {
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	.hover-shift:hover img {
		position: relative;
		z-index: 100;
		transform: rotateX(-8deg) rotateY(-18deg);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
	}
</style>
