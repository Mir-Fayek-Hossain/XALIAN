<script lang="ts">
	import { page } from '$app/stores';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import category from '../../lib/category';
	import { authController } from '../common/controllers/authController';
	import HeroIcon from '../common/HeroIcon/HeroIcon.svelte';
	import { HeroIconOutLined } from '../common/HeroIcon/HeroIconOutLined';
	import { HeroIconSolid } from '../common/HeroIcon/HeroIconSolid';
	import Modal from '../common/Modal/Modal.svelte';
	import LoginContainer from '../pages/login/LoginContainer.svelte';
	import { isAuthenticated } from '../store/baseStore';
	onMount(() => {
		AOS.init();
	});
	function authCheck(){
		
		user = authController.userInfo();
		console.log(user);
	}
	function logOut(){
		authController.logout()
		authCheck()
	}
	let user: any;
	let hoveredCategory: any;
	let modalVisibility = false;
	let categories: string[] = ['MEN', 'WOMEN', 'KIDS', 'ACCESORIES'];
	let isSearchFielsVisible: boolean = false;
</script>

<nav class="  sticky top-0 ">
	<!-- content here -->
	<div
		class="flex p-4 hover:bg-white hover:text-black text-white"
		class:bg-white={isSearchFielsVisible}
		class:text-black={isSearchFielsVisible}
		class:hover:bg-white={$page.routeId == ''}
		class:hover:text-black={$page.routeId == ''}
		class:text-white={$page.routeId == ''}
	>
		<a href="/" class="text-4xl font-semibold header-font ">XALIAN</a>
		<ul>
			{#each category as item}
				<div class="relative leading-4">
					<li class="desc" on:mouseenter={() => (hoveredCategory = item)}>
						<a href={`/${item?.slug}/`}>{item?.name}</a>
						<!-- {#if hoveredCategory == item?.name}
						{#each item?.children as subCats,index}
							<li transition:fly={{ x: 20, delay: 400 + index * 300 }}>{subCats?.name}</li>
						{/each}
					{/if} -->
					</li>
				</div>
			{/each}
		</ul>
		<div class="p-3 w-full flex justify-end">
			<div class="relative ">
				{#if isSearchFielsVisible}
					<input
						transition:fly={{ y: -20 }}
						type="text"
						class=" rounded-xl px-2 absolute right-9 bg-transparent border border-black"
						placeholder="Search"
					/>

					<!-- <svg
						on:click={() => (isSearchFielsVisible = false)}
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 absolute  right-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="white"
						stroke-width="2"
					>
						<path
							in:draw
							out:blur
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg> -->
					<span on:click={() => (isSearchFielsVisible = false)} class="absolute right-0">
						<HeroIcon icon={HeroIconOutLined.xCircle} class=" mx-2" svgAnimation={true} />
					</span>
				{:else}
					<!-- else content here -->

					<!-- <svg
						on:click={() => (isSearchFielsVisible = true)}
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 absolute right-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="white"
						stroke-width="2"
					>
						<path
							in:draw
							out:draw
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg> -->
					<span on:click={() => (isSearchFielsVisible = true)} class="absolute right-0">
						<HeroIcon
							icon={HeroIconOutLined.search}
							class="cursor-pointer mx-2"
							svgAnimation={true}
						/>
					</span>
				{/if}
			</div>
			{#if user}
			
			<span on:click={() => (logOut())}>
				<HeroIcon icon={HeroIconSolid.user} class="cursor-pointer mx-3" />
			</span>
			
			{:else}
				<span on:click={() => (modalVisibility = true)}>
					<HeroIcon icon={HeroIconOutLined.user} class="cursor-pointer mx-3" />
				</span>
			{/if}

			<HeroIcon icon={HeroIconOutLined.heart} class=" " />
		</div>
	</div>

	{#if hoveredCategory}
		<!-- content here -->
		<div
			class="bg-white grid grid-cols-2 relative border-b-[30px] border-[#f9b949]"
			transition:fly
			on:mouseleave={() => (hoveredCategory = '')}
		>
			<div class="p-10">
				{#each hoveredCategory.children as category, index}
					<li
						in:fly={{ x: 20, delay: 400 + index * 200 }}
						class="text-4xl mb-10 "
						on:click={() => {
							hoveredCategory = '';
						}}
					>
						<span class="underLine fromLeft w-fit">
							{category?.name}
						</span>
					</li>
				{/each}
			</div>
			<div class=" flex justify-end">
				<img class="object-cover w-full max-h-[75vh]" src={hoveredCategory?.thumb} alt="" />
			</div>
		</div>
	{/if}
	{#if $isAuthenticated || modalVisibility}
		<div transition:fade>
			<Modal
				onClose={() => {
					modalVisibility = false;
				}}
			>
				<LoginContainer bind:modalVisibility />
			</Modal>
		</div>
	{/if}
</nav>

<style>
	ul {
		display: flex;
		justify-content: space-around;
		@apply w-2/4 py-3;
	}
	li {
		letter-spacing: 1px;
		list-style: none;
		transition: 0.3s ease-in-out;
		@apply cursor-pointer;
	}
	.active {
		transition: 0.4s ease-in-out;
		@apply border-b-2 border-white;
	}
	nav {
		transition: 0.2s ease-in-out;
	}
</style>
