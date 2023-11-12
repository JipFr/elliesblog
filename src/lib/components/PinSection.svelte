<script lang="ts">
	export let pins: any[];
	const pinsClone = Object.assign([], pins);

	function getImageFromPin(pin: any) {
		const { images } = pin;
		return images["474x"].url;
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
					aria-label={`Pinterest pin: ${pinRowItem.description}`}
				>
					<img loading="lazy" src={getImageFromPin(pinRowItem)} alt="" />
				</a>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 10px;
		margin-top: 30px;

		.grid-item {
			grid-column: span var(--cols);
			display: grid;
			--h: clamp(70px, 15vw, 180px); // Max 180px, min 70px
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

	.hover-shift img {
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	@media (hover: hover) {
		.hover-shift:hover img {
			position: relative;
			z-index: 100;
			transform: rotateX(-8deg) rotateY(-18deg);
			box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
		}
	}

	@media (max-width: 1000px) {
		.grid {
			grid-gap: 1px;
			border-radius: 20px;
			overflow: hidden;

			.grid-item img {
				border-radius: 0;
			}
		}
	}
</style>
