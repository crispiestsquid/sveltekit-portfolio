<script>
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;
</script>

<svelte:head>
	<title>Kevin Little Tech</title>
</svelte:head>

<div id="nav-bar">
	<a href="/"><p>{'<kevinlittle.tech />'}</p></a>
	<nav>
		<a href="/" class:active={pathname === '/'}>Home</a>
		<a href="/about" class:active={pathname === '/about'}>About</a>
		<a href="/blog" class:active={pathname.includes('/blog')}>Blog</a>
		<a href="/login" class:active={pathname === '/login'}>Log In</a>
	</nav>
</div>

<slot />

<style>
	:global(body) {
		font-family: 'Quicksand', sans-serif;
		line-height: 1.6;
		color: #333;
		background-color: #f4f4f4;
		margin: 0;
		padding: 0;
	}

	#nav-bar {
		background-color: #333;
		color: #fff;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#nav-bar a {
		text-decoration: none;
		color: inherit;
	}

	#nav-bar p {
		font-weight: bold;
		margin: 0;
		cursor: pointer;
	}

	nav a {
		color: #fff;
		margin-right: 1rem;
		transition: color 0.3s;
	}

	nav a:hover,
	nav a.active {
		color: #0077cc;
	}

	nav a.active {
		border-bottom: 2px solid #0077cc;
	}
</style>
