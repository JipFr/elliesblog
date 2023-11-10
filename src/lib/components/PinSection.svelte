<script lang="ts">
	import { page as pageStore } from "$app/stores";

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
			// We're at the end
			// console.log(colsToFill, colsFilled);
			const last = cols[cols.length - 1];
			cols[cols.length - 1] = {
				...last,
				span: last.span + 1,
			};
			colsFilled++;
		}
	}
	console.log(cols);
</script>

<section>
	<h2>Ellie's pins</h2>
	<p>I love to go on Pinterest and pin whatever I see fit!</p>
	<div class="grid">
		{#each cols as col}
			{#each col.pins as pinRowItem}
				<div
					class="grid-item"
					style="--cols: {col.span}; --row-span: {col.rowCount};"
				>
					<img src={getImageFromPin(pinRowItem)} alt="" />
				</div>
			{/each}
		{/each}
	</div>
	<!-- {JSON.stringify(pins)} -->
</section>

<style lang="scss">
	section {
		margin: 43px 0;
	}
	h2,
	p {
		margin: 0;
	}
	h2 {
		font-size: 26px;
		font-weight: 500;
	}
	p {
		margin-top: 13px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-auto-rows: 140px;
		grid-gap: 10px;
		margin-top: 30px;
		height: 280px;
		grid-auto-flow: column;

		.grid-item {
			grid-column: span var(--cols);
			grid-row: span var(--row-span);
			// display: grid;
			// grid-template-rows: 1fr 1fr;
			// height: 280px;

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 20px;
			}
		}
	}
</style>
