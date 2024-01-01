<script>
	let count = 0;

	$: doubled = count * 2;

	function handleClick() {
		count += 1;
	}
</script>

<h1>This is my home page!</h1>
<p>Count: <span id="count">{count}</span></p>
<button on:click={handleClick}>Increment count</button>
{#if count > 10}
	<p>Count is really big!</p>
	<p>If you double it you would have {doubled}</p>
{/if}

<style>
	h1 {
		color: red;
	}
	#count {
		color: blue;
	}

	button {
		background-color: #eee;
	}
</style>
