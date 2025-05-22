<script>
	// A view represents the content of a window.
	// It's what a webpage is to a website.
	//
	// A window will change views mostly through
	// the user's interaction with the UI.
	//
	// A view is a collection of panels.

	let { children } = $props()
</script>

<div class="view">
	{@render children?.()}
</div>

<style>
	.view {
		width: 100%;
		height: 100%;
	}
</style>

