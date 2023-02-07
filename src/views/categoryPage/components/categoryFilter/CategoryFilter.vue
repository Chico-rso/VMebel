<template>
	<ul class="category-filter">
		<li>
			<ul>
				<li>
					<router-link to="#">Диваны и кресла</router-link>
				</li>
				<li>
					<router-link to="#">Movies, Music & Video Games</router-link>
				</li>
				<li>
					<router-link to="#">Gift Cards & Mobile Recharges</router-link>
				</li>
				<li>
					<router-link to="#">Car, Motorbike, Industrial</router-link>
				</li>
				<li>
					<router-link to="#">Mobiles, Computers</router-link>
				</li>
			</ul>
		</li>
		<li>
			<Accordion title="Цена, ₽">
				<div class="category-filter__price">
					<div class="category-filter__price-input">
						<input type="text" placeholder="от">
						<input type="text" placeholder="до">
					</div>
					<div class="category-filter__price-slider">
						<Slider/>
					</div>
				</div>
			</Accordion>
		</li>
		<li>
			<Accordion title="Бренд">
				<ul>
					<li>
						<router-link to="#">Диваны и кресла</router-link>
					</li>
					<li>
						<router-link to="#">Movies, Music & Video Games</router-link>
					</li>
					<li>
						<router-link to="#">Gift Cards & Mobile Recharges</router-link>
					</li>
					<li>
						<router-link to="#">Car, Motorbike, Industrial</router-link>
					</li>
					<li>
						<router-link to="#">Mobiles, Computers</router-link>
					</li>
				</ul>
			</Accordion>
		</li>
		<li>
			<Accordion title="Коллекция">

				<ul>
					<li>
						<router-link to="#">Диваны и кресла</router-link>
					</li>
					<li>
						<router-link to="#">Movies, Music & Video Games</router-link>
					</li>
					<li>
						<router-link to="#">Gift Cards & Mobile Recharges</router-link>
					</li>
					<li>
						<router-link to="#">Car, Motorbike, Industrial</router-link>
					</li>
					<li>
						<router-link to="#">Mobiles, Computers</router-link>
					</li>
				</ul>
			</Accordion>
		</li>
	</ul>
</template>

<script setup>
import Accordion from "@/components/accordion/Accordion.vue";
</script>

<style lang="scss">
@import "styles/categoryFilter";
</style>
