<script lang="ts">
	import PeoplePicksList from "../parts/PeoplePicksList.svelte";
	import Heading2 from "../util/Heading2.svelte";
	import Paragraph from "../util/Paragraph.svelte";
	import Section from "../util/Section.svelte";

	export let oneRow = false;
	export let showLink = false;
	export let forceGrid = false;
</script>

<Section>
	<div class="flex">
		<div>
			<Heading2>Ellie's people picks</Heading2>
			<Paragraph>
				Where I pick somebody and share what I think of their fashion choices!
			</Paragraph>
		</div>
		{#if showLink}<a href="/people-picks">View all people picks</a>{/if}
	</div>

	<PeoplePicksList {oneRow} {forceGrid} />
</Section>

<style lang="scss">
	.flex {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 10px;
	}

	a {
		display: block;
		padding: 5px 10px;
		border-radius: 10px;
		background: var(--highlight);
		color: var(--text);
		text-decoration: none;
		transition: background 200ms;
		background-blend-mode: difference;

		&:hover {
			background: var(--highlight-alt);
		}
	}

	@media (max-width: 700px) {
		.flex {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
