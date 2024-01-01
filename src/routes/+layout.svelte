<svelte:head>
	<title>Kevin Little Tech</title>
</svelte:head>

<div id="nav-bar">
	<p>{'<kevinlittle.tech />'}</p>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/blog">Blog</a>
		<a href="/login">Log In</a>
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
	}

	#nav-bar p {
		font-weight: bold;
		padding: 0px;
		margin: 0px;
	}

	nav a {
		color: #fff;
		text-decoration: none;
		margin-right: 1rem;
	}
</style>
