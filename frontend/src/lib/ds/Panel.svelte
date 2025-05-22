<script>
	// A panel represents a section within a view.

	let { children } = $props()
</script>

<div class="panel">
	{@render children?.()}
</div>

<style>
	.panel {
	}
</style>

