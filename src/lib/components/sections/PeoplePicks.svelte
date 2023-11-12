<script lang="ts">
	import PeoplePicksList from "../parts/PeoplePicksList.svelte";
	import Heading2 from "../util/Heading2.svelte";
	import Paragraph from "../util/Paragraph.svelte";
	import Section from "../util/Section.svelte";

	export let oneRow = false;
</script>

<Section>
	<Heading2>Ellie's people picks</Heading2>
	<Paragraph>
		Where I pick somebody and share what I think of their fashion choices!
	</Paragraph>

	<PeoplePicksList {oneRow} />
</Section>
