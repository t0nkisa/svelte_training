<script lang="ts">
	export let label: string;
	export let type: string;
	export let name: string;
	export let placeholder: string = '';
</script>

<label class="flex flex-col text-black_russian dark:text-gin text-2xl">
	{label}
	<input
		{name}
		{type}
		class="dark:text-gin dark:placeholder:text-gin/60 placeholder:text-black_russian/50 px-4 py-2 dark:bg-golden_grass bg-gin border-golden_grass text-xl border-8 dark:border-0 font-extrabold dark:px-6 dark:py-4 min-w-[200px]"
		{placeholder}
	/>
</label>
