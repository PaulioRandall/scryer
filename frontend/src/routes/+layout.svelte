<script>
	import '../app.css'

	let { children } = $props()
</script>

<div class="page">
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;

		width: 100vw;
		height: 100vh;
	}

	.content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
