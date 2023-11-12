<script>
	import PinSection from "../parts/PinSection.svelte";
	import Heading2 from "../util/Heading2.svelte";
	import Paragraph from "../util/Paragraph.svelte";
	import Section from "../util/Section.svelte";

	import PinterestLink from "../util/PinterestLink.svelte";

	import { page as pageStore } from "$app/stores";

	$: data = $pageStore.data;
</script>

<Section>
	<Heading2>Ellie's pins</Heading2>
	<Paragraph>I love to go on Pinterest and pin whatever I see fit!</Paragraph>
	<PinSection pins={data.pins} />
	<PinterestLink href="https://pinterest.com/ellienorton_/pins/">
		See all my pins
	</PinterestLink>
</Section>
