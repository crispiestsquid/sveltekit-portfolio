<script>
	import { formatIsoDateString } from '$lib/date';

	export let data;
</script>

<main>
	<section class="blog-list">
		{#if data.blogPosts.length > 0}
			<ul>
				{#each data.blogPosts as blogPost}
					<li>
						<a href={`blog/${blogPost.slug}`}
							>{blogPost.title}
							<span>Posted on {formatIsoDateString(blogPost.postDate)}</span></a
						>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No blog posts found.</p>
		{/if}
	</section>
</main>

<style>
	main {
		width: 80%;
		max-width: 700px;
		margin: 40px auto;
		background: #fff;
		padding: 20px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	}

	.blog-list ul {
		list-style: none;
		padding: 0;
	}

	.blog-list li {
		margin-bottom: 10px;
		padding: 10px;
		border-bottom: 1px solid #eaeaea;
	}

	.blog-list a {
		text-decoration: none;
		color: #0077cc;
		font-size: 1.2em;
	}

	.blog-list a:hover {
		color: #005fa3;
	}

	.blog-list span {
		font-size: 0.9em;
		color: #666;
		margin-left: 10px;
	}
</style>
