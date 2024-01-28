<script>
	import FormField from '$lib/components/form/FormField.svelte';
	import FormButton from '$lib/components/form/FormButton.svelte';
	import Link from '$lib/components/Link.svelte';
	import Form from '$lib/components/form/Form.svelte';

	export let form;
</script>

{#if form?.success}
	<div class="flex flex-col w-1/5 mx-auto">
		Congratulations! You have successfully registered.
		<Link href="/login" content="Go here to login!" />
	</div>
{/if}

<Form method="POST" action="?/register" title="Register">
	<FormField
		name="username"
		label="Username"
		type="text"
		placeholder="John Doe"
		required={true}
		value={form?.username}
	/>
	<FormField
		name="email"
		label="Email"
		type="email"
		placeholder="johndoe@gmail.com"
		required={true}
		value={form?.email}
	/>
	<FormField name="password" label="Password" type="password" required={true} />
	<FormField
		name="password_confirmation"
		label="Confirm Password"
		type="password"
		required={true}
	/>

	<div class="flex justify-around mt-4">
		<Link href="/" content="Back" />
		<FormButton content="Register" />
	</div>
</Form>
