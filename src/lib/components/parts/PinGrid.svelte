<script lang="ts">
	import type { Pin } from "$lib/types";

	export let pins: Pin[];
	const pinsClone = Object.assign([], pins);

	function getImageFromPin(pin: Pin) {
		const { images } = pin;
		return images["474x"].url;
	}

	interface Col {
		span: number;
		pins: Pin[];
		rowCount: number;
		t: number;
	}

	// Generate grid layout randomly
	export let rowCount = 2;
	const colCount = 9;
	const rows: Col[][] = [];

	for (let r = 0; r < rowCount; r++) {
		let cols: Col[] = [];
		let colsFilled = 0;
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
		rows.push(cols);
	}
</script>

<div class="grid">
	{#each rows as row}
		<div class="row">
			{#each row as col}
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
	{/each}
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 10px;
		margin-top: 30px;

		.row {
			display: grid;
			grid-gap: inherit;
			grid-column: 1 / -1;
			grid-template-columns: subgrid;
		}

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
