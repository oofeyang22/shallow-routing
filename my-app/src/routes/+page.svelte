<script>
	import { goto, preloadData, pushState } from '$app/navigation'
	import { page } from '$app/stores'
	import Modal from './modal.svelte'
	import User from './clients/[id]/+page.svelte'

	export let data

	let modal

	async function showModal(e) {
		// get URL
		const { href } = e.currentTarget

		// get result of `load` function
		const result = await preloadData(href)
		console.log(result)

		// create new history entry
		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data })
			modal.showModal()
		} else {
			goto(href)
		}
	}

	function closeModal() {
		history.back()
	}
</script>

<Modal bind:modal on:close={closeModal}>
	{#if $page.state.selected}
		<User data={$page.state.selected} />
	{/if}
</Modal>

<div class="feed">
	{#each data.infos as info}
		<a on:click|preventDefault={showModal} href="/clients/{info.id}">
			<div class="box">
				<!--<img alt={data.image.alt} src={data.image.src} />-->
				<div class="user-card">
					<p>Name: {info.userData.name}</p>
					<p>Email: {info.userData.email}</p>
					<p>Phone: {info.userData.phone}</p>
					<p>Website: {info.userData.website}</p>
				</div>
			</div>
			<!--<img alt={info.alt} src={info.src} />-->
		</a>
	{/each}
</div>

<style>
	.feed {
		max-inline-size: 600px;
		display: grid;
		gap: 2rem;
		margin-inline: auto;
		padding-block: 2rem;
	}

	.feed a{
		text-decoration: none;
	}
</style>
