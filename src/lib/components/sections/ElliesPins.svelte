<script lang="ts">
	import PinGrid from "../parts/PinGrid.svelte";
	import Heading2 from "../util/Heading2.svelte";
	import Paragraph from "../util/Paragraph.svelte";
	import Section from "../util/Section.svelte";

	import PinterestLink from "../util/PinterestLink.svelte";

	import type { PageData } from "../../../routes/$types";
	import { page as pageStore } from "$app/stores";
	$: data = $pageStore.data as PageData;
</script>

<Section>
	<Heading2>Ellie's pins</Heading2>
	<Paragraph>I love to go on Pinterest and pin whatever I see fit!</Paragraph>
	<PinGrid pins={data.pins} rowCount={1} />
	<PinterestLink href="https://pinterest.com/ellienorton_/pins/">
		See all my pins
	</PinterestLink>
</Section>
