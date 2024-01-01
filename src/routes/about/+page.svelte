<script>
	export let data;
</script>

<main>
	<section class="bio">
		{#if data.author.profilePicture}
			<figure class="author-headshot">
				<!-- Image of the author -->
				<img
					src={data.author.profilePicture + '?w=300'}
					alt={`A picture of ${data.author.firstName}`}
				/>
			</figure>
		{/if}
		<header>
			<h1>{data.author.firstName} {data.author.lastName}</h1>
			{#if data.author.title}
				<h2>{data.author.title}</h2>
			{/if}
		</header>
		<article>
			{@html data.author.bio}
		</article>
	</section>
</main>

<style>
	main {
		width: 80%;
		max-width: 600px;
		margin: 40px auto;
		background: #fff;
		padding: 20px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	}

	.bio .author-headshot img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		display: block;
		margin: 0 auto 20px;
	}

	.bio header h1 {
		font-size: 2em;
		margin-bottom: 0.5em;
		text-align: center;
	}

	.bio header h2 {
		font-size: 1.2em;
		color: #555;
		margin-bottom: 1em;
		text-align: center;
	}

	.bio article p {
		text-align: justify;
		margin-bottom: 1em;
	}
</style>
