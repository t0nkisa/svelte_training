<script>
	import FormField from '$lib/components/form/FormField.svelte';
	import FormButton from '$lib/components/form/FormButton.svelte';
	import Link from '$lib/components/Link.svelte';
	import Form from '$lib/components/form/Form.svelte';
</script>

<Form method="POST" action="?/login" title="Login">
	<FormField name="email" label="Email" type="email" />
	<FormField name="password" label="Password" type="password" />

	<div class="flex justify-around mt-4">
		<Link href="/" content="Back" />
		<FormButton content="Login" />
	</div>
</Form>
