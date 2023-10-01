import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const theme = writable((browser && localStorage.getItem('color-scheme')) ?? 'dark');

export const toggleTheme = () => {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		if (newTheme === 'light') {
			document.documentElement.className = 'light';
		} else {
			document.documentElement.className = 'dark';
		}
		localStorage.setItem('color-scheme', newTheme);
		return newTheme;
	});
};
