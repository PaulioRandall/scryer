<script>
	import '../app.css'
	import { Window } from '$lib'

	let { children } = $props()
</script>

<Window>
	{@render children?.()}
</Window>
