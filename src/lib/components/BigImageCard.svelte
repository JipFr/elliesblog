<script lang="ts">
	export let url: string;
</script>

<div class="big-image-card" style={`--url: url('${url}')`}>
	<slot />
</div>

<style lang="scss">
	.big-image-card {
		background-image: linear-gradient(to top, black, transparent 50%),
			var(--url);
		background-color: #033428;
		background-size: cover;
		background-position: center;
		height: 100%;
		padding: 20px 10px;
		font-size: 2rem;
		color: white;
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: flex-end;
		aspect-ratio: 2/3;
		border-radius: 10px;
	}
</style>
