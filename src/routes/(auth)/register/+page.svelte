<script>
	import FormField from '$lib/components/form/FormField.svelte';
	import FormButton from '$lib/components/form/FormButton.svelte';
	import Link from '$lib/components/Link.svelte';
	import Form from '$lib/components/form/Form.svelte';
</script>

<Form method="POST" action="?/register" title="Register">
	<FormField name="username" label="Username" type="text" placeholder="John Doe" />
	<FormField name="email" label="Email" type="email" placeholder="johndoe@gmail.com" />
	<FormField name="password" label="Password" type="password" />
	<FormField name="password_confirmation" label="Confirm Password" type="password" />

	<div class="flex justify-around mt-4">
		<Link href="/" content="Back" />
		<FormButton content="Register" />
	</div>
</Form>
