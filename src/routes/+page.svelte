<script lang="ts">
	import Cols from "$lib/components/util/Cols.svelte";
	import Divider from "$lib/components/util/Divider.svelte";
	import MoreAboutEllie from "$lib/components/sections/MoreAboutEllie.svelte";
	import PeoplePicks from "$lib/components/sections/PeoplePicks.svelte";
	import ElliesPins from "$lib/components/sections/ElliesPins.svelte";
	import ElliesFavourites from "$lib/components/sections/ElliesFavourites.svelte";
</script>

<Cols>
	<div>
		<PeoplePicks />

		<Divider />

		<MoreAboutEllie />

		<Divider />

		<ElliesPins />

		<Divider />

		<ElliesFavourites />
	</div>
</Cols>
