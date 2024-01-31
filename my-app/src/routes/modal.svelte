<script>
	export let modal
</script>

<dialog bind:this={modal} on:close>
	<slot />
</dialog>

<style>
	dialog {
		border: none;
		border-radius: 8px;

	}

	dialog::backdrop {
		background-color: hsl(0 0% 0% / 40%);
	}
</style>
