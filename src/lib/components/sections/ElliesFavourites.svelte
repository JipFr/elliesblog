<script lang="ts">
	import PinSection from "../parts/PinSection.svelte";
	import Heading2 from "../util/Heading2.svelte";
	import Paragraph from "../util/Paragraph.svelte";
	import Section from "../util/Section.svelte";

	import PinterestLink from "../util/PinterestLink.svelte";

	import { page as pageStore } from "$app/stores";

	$: data = $pageStore.data;
</script>

<Section>
	<Heading2>Ellie's favourites</Heading2>
	<Paragraph>My very own favourites board!</Paragraph>
	<PinSection pins={data.favouritesPins} />
	<PinterestLink href="https://pinterest.com/ellienorton_/favourites/">
		View favourites board
	</PinterestLink>
</Section>
