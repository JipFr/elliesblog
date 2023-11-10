<script lang="ts">
	import Pinterest from "$lib/icons/Pinterest.svelte";

	export let href: string;
</script>

<div class="social-link-wrapper">
	<a {href} target="_blank" class="social-link">
		<Pinterest />
		<slot />
	</a>
</div>

<style lang="scss">
	.social-link-wrapper {
		width: 100%;
		margin-top: 30px;
		display: flex;
		justify-content: center;

		.social-link {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20px;
			color: var(--text-harsh);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
