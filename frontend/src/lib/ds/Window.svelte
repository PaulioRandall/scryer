<script>
	// A window represents a visible window on the screen.
	// 
	// There is always at least one window, of course.
	//
	// A window must always be showing a view.

	let { children } = $props()
</script>

<div class="window">
	{@render children?.()}
</div>

<style>
	.window {
		width: 100vw;
		height: 100vh;
	}
</style>

