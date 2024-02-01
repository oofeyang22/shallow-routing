<svelte:head>
	<title>Shallow Routing</title>
</svelte:head>


<slot />

<style>

    :global(::-webkit-scrollbar) {
		display: none;
	}

	:global(html, body) {
		height: 100%;
        background: rgb(28, 23, 23);
	}
    :global(.user-card) {
        background: white;
        padding: 10px;
        border-radius: 10px;
        margin: 3px;
        color: black;

    }


</style>