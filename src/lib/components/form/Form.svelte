<script lang="ts">
	export let method: string;
	export let action: string;
	export let title: string;
</script>

<form
	{method}
	{action}
	class="flex flex-col gap-4 w-1/3 h-1/2 m-auto p-8 dark:bg-kimberly-800 bg-gin"
>
	<h1 class="text-4xl text-black_russian dark:text-gin self-center">{title}</h1>
	<slot />
</form>
