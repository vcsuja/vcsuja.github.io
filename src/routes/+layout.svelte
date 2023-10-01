<script>
	import '@fontsource/roboto/100.css';
	import '@fontsource/roboto/300.css';
	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/500.css';
	import '@fontsource/roboto/700.css';
	import '@fontsource/roboto/900.css';
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
</script>

<div class="grid grid-rows-[1fr_auto] min-h-screen dark:bg-zinc-900 dark:text-gray-300 font-light">
	<Header />
	<main class="max-w-screen-md w-full mx-auto mt-20 px-5">
		<slot />
	</main>
	<Footer />
</div>
