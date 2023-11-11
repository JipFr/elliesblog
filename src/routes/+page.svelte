<script lang="ts">
	import AboutEllie from "$lib/components/AboutEllie.svelte";
	import Cols from "$lib/components/Cols.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import MoreAboutEllie from "$lib/components/MoreAboutEllie.svelte";
	import PeoplePicks from "$lib/components/PeoplePicks.svelte";
	import PinSection from "$lib/components/PinSection.svelte";
	import Heading2 from "$lib/components/util/Heading2.svelte";
	import Paragraph from "$lib/components/util/Paragraph.svelte";
	import PinterestLink from "$lib/components/util/PinterestLink.svelte";
	import Section from "$lib/components/util/Section.svelte";

	export let data: any;
</script>

<Cols>
	<div>
		<PeoplePicks />
		<Divider />
		<MoreAboutEllie />
		<Divider />
		<Section>
			<Heading2>Ellie's pins</Heading2>
			<Paragraph>
				I love to go on Pinterest and pin whatever I see fit!
			</Paragraph>
			<PinSection pins={data.pins} />
			<PinterestLink href="https://pinterest.com/ellienorton_/pins/">
				See all my pins
			</PinterestLink>
		</Section>

		<Divider />

		<Section>
			<Heading2>Ellie's favourites</Heading2>
			<Paragraph>My very own favourites board!</Paragraph>
			<PinSection pins={data.favouritesPins} />
			<PinterestLink href="https://pinterest.com/ellienorton_/favourites/">
				View favourites board
			</PinterestLink>
		</Section>
	</div>
</Cols>
