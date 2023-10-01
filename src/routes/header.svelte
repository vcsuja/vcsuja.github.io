<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme';
	import { Moon, Sun } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
</script>

<nav class="border-b border-b-slate-600 fixed top-0 left-0 right-0 z-10 opacity-100 dark:bg-zinc-900 bg-white px-5">
	<div class="container mx-auto flex items-center">
		<a href="/" class="text-lg">
			<strong class="font-bold">Vineeth</strong> Chandran Suja
		</a>

		<ul class="flex ml-auto space-x-3">
			<li>
				<a href="/cv">CV</a>
			</li>
		</ul>

		<button class="overflow-hidden p-4" on:click={toggleTheme}>
			{#if $theme === 'dark'}
				<div in:fly={{ y: 10 }}>
					<Sun />
				</div>
			{:else}
				<div in:fly={{ y: -10 }}>
					<Moon />
				</div>
			{/if}
		</button>
	</div>
</nav>
