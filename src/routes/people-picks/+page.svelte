<script lang="ts">
	import Cols from "$lib/components/util/Cols.svelte";
	import Meta from "$lib/components/util/Meta.svelte";
	import PeoplePicks from "$lib/components/sections/PeoplePicks.svelte";
</script>

<svelte:head>
	<Meta title="Ellie's people picks" />
</svelte:head>

<Cols>
	<PeoplePicks />
</Cols>
