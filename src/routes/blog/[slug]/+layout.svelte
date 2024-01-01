<script>
	import { page } from '$app/stores';
</script>

<nav aria-label="Breadcrumb">
	<ol class="breadcrumb">
		<li class="breadcrumb-item"><a href="/blog">Blog List</a></li>
		<li class="breadcrumb-item">{$page.data.blogPost.title}</li>
	</ol>
</nav>

<slot />

<style>
	.breadcrumb {
		list-style: none;
		padding: 0;
		padding-left: 10px; /* Added padding on the left */
		margin-top: 20px;
		font-size: 0.9em;
		color: #666;
	}

	.breadcrumb-item {
		display: inline;
	}

	.breadcrumb-item + .breadcrumb-item::before {
		content: ' > ';
		padding: 0 5px;
		color: #0077cc;
	}

	.breadcrumb-item a {
		color: #0077cc;
		text-decoration: none;
	}

	.breadcrumb-item a:hover {
		text-decoration: underline;
	}
</style>
