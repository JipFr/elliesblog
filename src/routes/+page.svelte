<script lang="ts">
	import AboutEllie from "$lib/components/AboutEllie.svelte";
	import Cols from "$lib/components/Cols.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import PeoplePicks from "$lib/components/PeoplePicks.svelte";
	import PinSection from "$lib/components/PinSection.svelte";
</script>

<Hero />

<Cols>
	<PeoplePicks />
	<div style="display: flex; justify-content: end;">
		<AboutEllie />
	</div>
</Cols>

<Cols>
	<Divider />
</Cols>

<Cols>
	<PinSection />
</Cols>
