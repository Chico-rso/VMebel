<template>
	<header
		is-open-catalog-menu-list
		is-mobile-list-open
		class="header"
		:class="{'header--sticky': stickyHeader === true}"
		sticky-header
	>
		<div class="container">
			<div class="header__wrapper">
				<div class="header__top">
					<div class="header__burger">
						<input
							id="header__toggle"
							type="checkbox"
							:checked="isOpenMobileMenuList"
						/>
						<label
							class="header__btn"
							for="header__toggle"
							@click="toggleMoileMenuList()"
						>
							<span></span>
						</label>
					</div>
					<div>
						<router-link to="/" class="header__logo">
							<img src="@/assets/img/svg/header/mainLogo.svg" alt="">
							<span>Вся мебель в одном месте</span>
						</router-link>
					</div>
					<div class="header__phone">
						<a href="tel:8(800)600-08-88">8 (800) 600-08-88</a>
						<span>Республика Северная Осетия — Алания</span>
					</div>
					<ul class="header__info">
						<li class="header__info-item">
							<router-link to="#">Магазины</router-link>
						</li>
						<li class="header__info-item">
							<router-link to="/about">О компании</router-link>
						</li>
						<li class="header__info-item">
							<router-link to="/contacts">Контакты</router-link>
						</li>
					</ul>
					<div class="header__rigth">
						<img src="@/assets/img/svg/searchIcon.svg" alt="">
						<img src="@/assets/img/svg/header/favoritIcon.svg" alt="">
					</div>
				</div>
				<div class="header__bottom">
					<button
						class="header__catalog-btn"
						:class="{'header__catalog-btn--active': isOpenCatalogMenuList === true}"
						@click="openCatalogMenuList"
					>
						<div class="header__catalog-burger" ref="burger">
							<span></span>
							<img src="@/assets/img/svg/header/burgerClose.svg" alt="">
						</div>
						Каталог
					</button>
					<label class="header__bottom-label">
						<img src="@/assets/img/svg/searchIcon.svg" alt="">
						<base-input class="header__bottom-input" :placeholder="placeholderText"></base-input>
					</label>
					<ul class="header__bottom-menu">
						<li>
							<router-link to="#" class="header__bottom-profile">
								<img src="@/assets/img/svg/header/profile.svg" alt="">
								<span>Войти</span>
							</router-link>
						</li>
						<li>
							<router-link to="/favorites" class="header__bottom-favorit">
								<img src="@/assets/img/svg/header/favoritIcon.svg" alt="">
								<span>Избранное</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { useMobileMenuStore } from "@/store/mobileMenu";
import { storeToRefs } from "pinia";

const emit = defineEmits(["closeCatalogMenu"]);
const props = defineProps({
	isOpenCatalogMenuList: {
		type: Boolean,
		required: true,
	},
	stickyHeader: {
		type: Boolean,
		required: true,
	},
});

const { isOpenMobileMenuList } = storeToRefs(useMobileMenuStore());

const placeholderText = "Поиск";
let burger = ref(null);

function openCatalogMenuList()
{
	emit("openCatalogMenuList");
}

function toggleMoileMenuList()
{
	isOpenMobileMenuList.value = !isOpenMobileMenuList.value;
}
</script>

<style lang="scss">
@import "./styles/header";
</style>
