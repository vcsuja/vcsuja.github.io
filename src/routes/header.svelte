<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme';
	import { Moon, Sun } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
</script>

<nav
	class="border-b border-b-slate-600 fixed top-0 left-0 right-0 z-10 opacity-100 dark:bg-zinc-900 bg-white"
>
	<div class="max-w-screen-md mx-auto flex items-center px-5">
		<a href="/" class="text-lg">
			<strong class="font-bold">Vineeth</strong> Chandran Suja
		</a>

		<ul class="flex ml-auto space-x-3">
			<li>
				<a href="/cv">CV</a>
			</li>
		</ul>

		{#if $theme === 'dark'}
			<button
				aria-label="Change to light mode"
				in:fly={{ y: 10 }}
				class="overflow-hidden p-4"
				on:click={toggleTheme}
			>
				<Sun />
			</button>
		{:else}
			<button
				aria-label="Change to dark mode"
				in:fly={{ y: -10 }}
				class="overflow-hidden p-4"
				on:click={toggleTheme}
			>
				<Moon />
			</button>
		{/if}
	</div>
</nav>
