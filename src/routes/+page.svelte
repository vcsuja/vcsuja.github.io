<script lang="ts">
	import vinnyImage from '$lib/images/vinny.jpg';
	import { Mail, Linkedin, Twitter } from 'lucide-svelte';

	const socialsData = [
		{
			icon: Mail,
			label: 'send mail',
			url: 'mailto:vinny@g.harvard.edu'
		},
		{
			icon: Linkedin,
			label: 'visit linkedin profile',
			url: 'https://www.linkedin.com/in/vineeth-chandran-suja-4700a264'
		},
		{
			icon: Twitter,
			label: 'visit twitter profile',
			url: 'https://twitter.com/vinnysuja'
		}
	];
</script>

<h1 class="text-4xl mb-2">Vineeth 'Vinny' Chandran Suja</h1>
<p class="text-sm mb-4">Postdoctoral Researcher @ Harvard | Stanford Chemical Engineering PhD</p>

<div class="md:float-right mx-auto md:mx-10 my-10">
	<img class="rounded-full mb-3 mx-auto" width="210" height="210" src={vinnyImage} alt="Vineeth 'Vinny' Chandran Suja" />
	<div class="flex justify-center">
		{#each socialsData as social}
			<a href={social.url} aria-label={social.label} target="_blank" class="mx-2"
				><svelte:component this={social.icon} size={20} /></a
			>
		{/each}
	</div>
</div>
<div>
	<p class="border-l-2 border-pink-400 pl-3 py-1 mb-5">
		I am a chemical engineer advancing interfacial and colloidal soft matter science for applications in drug delivery utilizing experimental, analytical, and data-driven tools. Check out my CV for more details.
				
	</p>

	<h2 class="text-2xl"></h2>
	<p>
	</p>
	<br />
	<p>
		
	</p>
	<br />
	<p>
		
	</p>
	<br />
	<p>
		
	</p>
	<br />
	<p>
		
	</p>
	<br />
	<p>
		
	</p>
	<br />
	<p>
		
	</p>
</div>
