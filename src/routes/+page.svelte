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
<p class="text-sm mb-4">Post doctoral Researcher, Harvard University</p>

<div class="md:float-right mx-auto max-w-[210px] md:mx-10 my-10">
	<img class="rounded-full mb-3" src={vinnyImage} alt="Vineeth 'Vinny' Chandran Suja" />
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
		 We aim to build an inclusive and highly interdisciplinary environment
		that brings together diverse researchers - including, but not limited to, engineers, physical
		and life scientists, mathematicians, computer scientists, and MD-PhD students!
		<br />
		<br />
		If you are interested in joining us or learning more about the lab, please reach out to me . A group
		website will be up shortly!
	</p>

	<h2 class="text-2xl">Inspiration</h2>
	<p>
		Our macroscopic world is made up of molecules that assemble into diverse and complex material
		phases and states - familiar examples include foams, emulsions, <a
			href="/cv"
			class="underline decoration-dotted underline-offset-4">crystalline solids</a
		>, immiscible liquids, and polymeric materials .
	</p>
	<br />
	<p>
		Cells comprise billions of biomolecules that self-organize into dozens of microscopic assemblies
		called biomolecular condensates. Biomolecular condensates are found across the tree of life,
		play key roles in development and physiology, and misregulated or aberrant in diseased states.
		Phase transitions are increasingly understood to be a unifying mechanism driving condensate
		assembly and function.
	</p>
	<br />
	<p>
		Our research aims to advance this emerging paradigm of biomolecular condensates as functional
		multiphase matter and dynamic biological assemblies. This will enable us to understand and
		control fundamental biological processes, pinpoint and potentially reverse aberrant disease
		pathways, and engineer adaptive multiphase materials. To do this, we will flexibly work at the
		interface of multiple fields - often bridging our expertise across chemical/biomolecular
		engineering and soft matter physics in the context of living cells.
	</p>
	<br />
	<p>
		Cells comprise billions of biomolecules that self-organize into dozens of microscopic assemblies
		called biomolecular condensates. Biomolecular condensates are found across the tree of life,
		play key roles in development and physiology, and misregulated or aberrant in diseased states.
		Phase transitions are increasingly understood to be a unifying mechanism driving condensate
		assembly and function.
	</p>
	<br />
	<p>
		Our research aims to advance this emerging paradigm of biomolecular condensates as functional
		multiphase matter and dynamic biological assemblies. This will enable us to understand and
		control fundamental biological processes, pinpoint and potentially reverse aberrant disease
		pathways, and engineer adaptive multiphase materials. To do this, we will flexibly work at the
		interface of multiple fields - often bridging our expertise across chemical/biomolecular
		engineering and soft matter physics in the context of living cells.
	</p>
	<br />
	<p>
		Cells comprise billions of biomolecules that self-organize into dozens of microscopic assemblies
		called biomolecular condensates. Biomolecular condensates are found across the tree of life,
		play key roles in development and physiology, and misregulated or aberrant in diseased states.
		Phase transitions are increasingly understood to be a unifying mechanism driving condensate
		assembly and function.
	</p>
	<br />
	<p>
		Our research aims to advance this emerging paradigm of biomolecular condensates as functional
		multiphase matter and dynamic biological assemblies. This will enable us to understand and
		control fundamental biological processes, pinpoint and potentially reverse aberrant disease
		pathways, and engineer adaptive multiphase materials. To do this, we will flexibly work at the
		interface of multiple fields - often bridging our expertise across chemical/biomolecular
		engineering and soft matter physics in the context of living cells.
	</p>
</div>
