<script lang="ts">
import HeroIcon from '$src/presentation/common/HeroIcon/HeroIcon.svelte';
import { HeroIconOutLined } from '$src/presentation/common/HeroIcon/HeroIconOutLined';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMount } from 'svelte';
import { fly } from 'svelte/transition';
import category from '../lib/category';

onMount(() => {
    AOS.init();
});
let selectedCategory = '';
let hoveredCategory = 'Home';
let email: any;
const submitForm = async () => {
    const submit = await fetch('https://api.reshop.one/v2/web/subscriptions/email', {
        method: 'POST',
        body: JSON.stringify({
            email
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await submit.json();
};
</script>

<div class="relative">
{#if hoveredCategory == 'Women'}
    <video autoplay muted loop id="myVideo" class="object-cover">
        <source src="/videos/woman.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
    </video>
{:else if hoveredCategory == 'Kids'}
    <div id="myVideo" style="background-image:url('/kid.jpg') ;" class="bg-cover bg-center">a</div>
{:else if hoveredCategory == 'Men'}
    <video autoplay muted loop id="myVideo" class="object-cover">
        <source src="/videos/man.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
    </video>
{:else if hoveredCategory == 'Home'}
    <video autoplay muted loop id="myVideo" class="object-cover">
        <source src="/videos/home.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
    </video>
{:else}
    <div id="myVideo" style="background-image:url('/gifts.jpg') ;" class="bg-cover bg-center" />
{/if}

<div class="content" >
    <ul class="header-font " data-aos="slide-right" data-aos-duration="2000" data-delay="1000">
        {#each category as item}
            <a href={`/${item?.slug}/`} class="list flex w-fit">
                <li
                    on:mouseenter={() => {
                        hoveredCategory = item?.name;
                    }}
                    on:click={() => (selectedCategory = item?.name)}
                    class:active={selectedCategory == item?.name}
                >
                    {item?.name}
                </li>
                {#if hoveredCategory == item?.name}
                    <span transition:fly={{ x: 20 }} class="mt-[4vh]">
                        <HeroIcon
                            icon={HeroIconOutLined.chevronRight}
                            class="text-white mx-3 mt-3 text-[2vh]"
                        /></span
                    >
                {/if}
            </a>
        {/each}
    </ul>
</div>
</div>
<div class=" flex justify-center border-b m-4 py-3 border-black ">
<div class="w-fit text-center">
    <h2 class="font-bold text-lg header-font ">ENTER THE WORLD OF XALIAN</h2>
    <p class="tracking-tight desc text-lg mb-2">
        Hear about exclusive events, collections and news.
    </p>

    <p class="mb-4 text-left">Email address*</p>
    <form on:submit|preventDefault={submitForm}>
        <input
            class="border border-black p-2 w-full"
            type="text"
            placeholder="Enter email address"
            bind:value={email}
        />
    </form>
</div>
<!-- <div class="pt-[40%] w-full  ">
    <ul class="w-full flex justify-between items-center ">
        <li class="mr-1">
            <a target="_blank" href={Constant.socialLink.facebook} class="text-dark">
                <div class="icons">
                    <HeroIcon
                        class="text-[#545766] hover:text-[#4267B2] transition ease-in-out duration-300 text-sm"
                        icon={HeroIconSolid.facebook}
                    />
                </div>
            </a>
        </li>
        <li class="mx-2">
            <a target="_blank" href={Constant.socialLink.instagram} class="text-dark">
                <div class="icons">
                    <HeroIcon
                        class="text-[#545766] hover:text-[#DD2A7B] transition ease-in-out duration-300 text-sm"
                        icon={HeroIconSolid.instagram}
                    />
                </div>
            </a>
        </li>
        <li class="mx-2">
            <a target="_blank" href={Constant.socialLink.instagram} class="text-dark">
                <div class="icons">
                    <HeroIcon
                        class="text-[#545766] hover:text-[#DD2A7B] transition ease-in-out duration-300 text-sm"
                        icon={HeroIconSolid.instagram}
                    />
                </div>
            </a>
        </li>
        <li class="mx-2">
            <a target="_blank" href={Constant.socialLink.instagram} class="text-dark">
                <div class="icons">
                    <HeroIcon
                        class="text-[#545766] hover:text-[#DD2A7B] transition ease-in-out duration-300 text-sm"
                        icon={HeroIconSolid.instagram}
                    />
                </div>
            </a>
        </li>
        <li class="mx-2">
            <a target="_blank" href={Constant.socialLink.twitter} class="text-dark">
                <div class="icons">
                    <HeroIcon
                        class="text-[#545766] hover:text-[#00acee] transition ease-in-out duration-300 text-sm"
                        icon={HeroIconSolid.twitter}
                    />
                </div>
            </a>
        </li>
        <li class="ml-1">
            <a
                target="_blank"
                href="https://www.youtube.com/channel/UC2-zKs-wrcLAnrq2PyNIRuA"
                class="text-dark"
            >
                <div class="icons">
                    <HeroIcon
                        class="text-[#545766] hover:text-[#FF0000] transition ease-in-out duration-300 text-sm"
                        icon={HeroIconSolid.youtube}
                    />
                </div>
            </a>
        </li>
    </ul>
</div> -->
</div>

<!-- markup (zero or more items) goes here -->
<style>
::-webkit-input-placeholder {
    font-style: italic;
}
:-moz-placeholder {
    font-style: italic;
}
::-moz-placeholder {
    font-style: italic;
}
:-ms-input-placeholder {
    font-style: italic;
}
.list li {
    list-style: none;
    transition: 0.3s ease-in-out;
    @apply text-white  w-fit font-semibold text-[3vw] py-4 cursor-pointer;
}

li:hover {
    -webkit-text-stroke: 0.5px #fff;
    color: transparent;
}
.active {
    @apply text-white;
}
#myVideo {
    position: absolute;
    right: 0;
    top: 0;
    min-width: 100%;
    height: 100vh;

    z-index: -1;
}

.content {
    background: rgba(0, 0, 0, 0.479);
    width: 100%;
    padding: 2vw;
    height: 100vh;
    padding-top: 20vh;
}
</style>
