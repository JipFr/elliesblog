<script>
	import Heading2 from "$lib/components/util/Heading2.svelte";
	import Section from "$lib/components/util/Section.svelte";

	import { page } from "$app/stores";
</script>

<Section>
	<Heading2>What in the name of tarnation do you think you're doing?!</Heading2>
	<p>
		I'm sorry to tell you this, but there's nothing here! ({$page.status})
	</p>
</Section>
