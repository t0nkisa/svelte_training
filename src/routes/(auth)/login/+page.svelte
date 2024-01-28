<script>
	import FormField from '$lib/components/form/FormField.svelte';
	import FormButton from '$lib/components/form/FormButton.svelte';
	import Link from '$lib/components/Link.svelte';
	import Form from '$lib/components/form/Form.svelte';
	export let form;
</script>

{#if form?.success}
	<div class="flex flex-col w-1/5 mx-auto">
		Congratulations! You have successfully logged in.
		<Link href="/profile" content="Go here to see your profile!" />
	</div>
{/if}

<Form method="POST" action="?/login" title="Login">
	<FormField name="email" label="Email" type="email" required={true} value={form?.email} />
	<FormField name="password" label="Password" type="password" required={true} />

	<div class="flex justify-around mt-4">
		<Link href="/" content="Back" />
		<FormButton content="Login" />
	</div>
</Form>
