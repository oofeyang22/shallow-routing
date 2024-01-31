<script>
	export let data
</script>

<div class="center">
	<!--<img alt={data.image.alt} src={data.image.src} />-->
	<div class="user-info">
		<p>Name: {data.user.userData.name}</p>
		<p>Email: {data.user.userData.email}</p>
		<p>Phone: {data.user.userData.phone}</p>
		<p>Website: {data.user.userData.website}</p>
	</div>

</div>

<style>
	.center{
		height: 100%;
		display: grid;
		place-content: center;
		place-items: center;
	}

	.user-info {
		background-color: white;
		padding: 2px;
		border-radius: 10px;
		color: black;
		margin: 3px;
		width: 30rem;
		height: 15rem;
		font-size: 20px;
	}
</style>