<script>
	import { enhance } from '$app/forms';

	export let form;
	export let data;
</script>

<h1>Log in</h1>
<p>Register</p>
<form method="POST" action="?/register" use:enhance>
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		First name
		<input name="firstName" type="text" />
	</label>
	<button>Register</button>
</form>
<h3>OR</h3>
<p>Log in</p>
<form method="POST" action="?/login" use:enhance>
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<button>Log in</button>
</form>
{#if form?.success}
	<p id="success">{form.success.msg}</p>
{/if}
{#if data?.firstName}
	<p>Welcome back, {data.firstName}!</p>
{/if}
{#if form?.error}
	<p style="color: red">{form.error.msg}</p>
{/if}

<style>
	#success {
		color: green;
	}
</style>
