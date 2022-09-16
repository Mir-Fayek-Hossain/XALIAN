<script>
	import { Constant } from '../../../src/app/constant';

	import HeroIcon from '../common/HeroIcon/HeroIcon.svelte';
	import { HeroIconSolid } from '../common/HeroIcon/HeroIconSolid';

	// your script goes here
</script>


<div class="p-5 grid grid-cols-4 border-b border-black">
	<div>
		<h2 class="footer--title header-font">CLIENT SERVICE</h2>
		<ul class="desc">
			<li class="underLine fromLeft">Contact Us</li>
			<li class="underLine fromLeft">Book an Appointment</li>
			<li class="underLine fromLeft">FAQs</li>
			<li class="underLine fromLeft">Orders and Shipping</li>
			<li class="underLine fromLeft">Return and Refunds</li>
			<li class="underLine fromLeft">Track your order</li>
		</ul>
	</div>
	<div>
		<h2 class="footer--title header-font">CORPORATE</h2>
		<ul class="desc">
			<li class="underLine fromLeft">Store Locator</li>
			<li class="underLine fromLeft">Careers</li>
			<li class="underLine fromLeft">Sustainability</li>
		</ul>
	</div>
	<div>
		<h2 class="footer--title header-font">THE COMPANY</h2>
		<ul class="desc">
			<li class="underLine fromLeft">Privacy Policies</li>
			<li class="underLine fromLeft">Cookie Policy</li>
			<li class="underLine fromLeft">Disclosure policy</li>
			<li class="underLine fromLeft">Terms and conditions</li>
			<li class="underLine fromLeft">Website terms of use</li>
			<li class="underLine fromLeft">Code of conduct</li>
			<li class="underLine fromLeft">Supplier's code of conduct</li>
			<li class="underLine fromLeft">Company information</li>
		</ul>
	</div>
	<div>
		<h2 class="footer--title header-font">FIND US ON</h2>
		<ul class="desc">
			<li class="">
				<a target="_blank" href={Constant.socialLink.facebook} class="text-dark text-center">
					<HeroIcon
						class="text-[#545766] hover:text-[#4267B2] transition ease-in-out duration-300 text-[12px]"
						icon={HeroIconSolid.facebook}
					/>
					Facebook
				</a>
			</li>
			<li class="">
				<a target="_blank" href={Constant.socialLink.instagram} class="text-dark text-center">
					<HeroIcon
						class="text-[#545766] hover:text-[#DD2A7B] transition ease-in-out duration-300 text-[12px]"
						icon={HeroIconSolid.instagram}
					/>
					Instagram
				</a>
			</li>
			<li class="">
				<a target="_blank" href={Constant.socialLink.twitter} class="text-dark text-center">
					<HeroIcon
						class="text-[#545766] hover:text-[#00acee] transition ease-in-out duration-300 text-[12px]"
						icon={HeroIconSolid.twitter}
					/>
					Twitter
				</a>
			</li>
			<li class="">
				<a target="_blank" href={Constant.socialLink.youtube} class="text-dark text-center">
					<HeroIcon
						class="text-[#545766] hover:text-[#FF0000] transition ease-in-out duration-300 text-[12px]"
						icon={HeroIconSolid.youtube}
					/>
					Youtube
				</a>
			</li>
		</ul>
	</div>
</div>
<div class="text-center py-2 desc">© 2022 Mir Fayek Hossain | All rights reserved</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
	.footer--title {
		@apply font-semibold text-[17px] mb-1 border-b-[3px] border-black w-fit;
	}
	ul li {
		transition: 0.3s ease-in-out;
		@apply py-2 w-fit;
	}
</style>
