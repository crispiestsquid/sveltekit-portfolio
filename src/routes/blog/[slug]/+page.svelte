<script>
	export let data;
</script>

<article>
	<header>
		<h1>{data.blogPost.title}</h1>
	</header>

	<section>
		{@html data.blogPost.content}
	</section>

	<footer>
		<aside>
			<h2>About the Author</h2>
			<figure>
				{#if data.author.profilePicture}
					<img
						src={data.author.profilePicture + '?w=200'}
						alt={`A picture of ${data.author.firstName}`}
					/>
				{/if}
				<figcaption>
					<strong>Author's Name:</strong>
					{data.author.firstName}
					{data.author.lastName}
					{#if data.author.title}
						<br />
						<em>{data.author.title}</em>
					{/if}
				</figcaption>
			</figure>
		</aside>
	</footer>
</article>

<style>
	article {
		width: 80%;
		max-width: 800px;
		margin: 20px auto;
		background: #fff;
		padding: 20px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	}

	header h1 {
		font-size: 2em;
		color: #333;
		margin-bottom: 10px;
	}

	section {
		margin-top: 20px;
	}

	:global(.embedded-asset) {
		display: block;
		max-width: 100%;
		height: auto;
		margin: 0 auto;
	}

	footer {
		margin-top: 40px;
		padding-top: 20px;
		border-top: 1px solid #eaeaea;
	}

	aside h2 {
		font-size: 1.2em;
		color: #666;
	}

	figure {
		display: flex;
		align-items: center;
		margin-top: 10px;
	}

	figure img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-right: 15px;
	}

	figcaption {
		font-size: 0.9em;
	}

	strong {
		font-weight: bold;
	}

	em {
		font-style: italic;
		color: #555;
	}
</style>
