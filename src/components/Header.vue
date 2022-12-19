<template>
	<div class="header">
		<div class="header__top">
			<div class="header__burger">
				<input id="header__toggle" type="checkbox"/>
				<label class="header__btn" for="header__toggle">
					<span></span>
				</label>
			</div>
			<div class="header__logo">
				<img src="@/assets/img/svg/header/mainLogo.svg" alt="">
				<span>Вся мебель в одном месте</span>
			</div>
			<div class="header__phone">
				<a href="tel:8 (800) 600-08-88">8 (800) 600-08-88</a>
				<span>Республика Северная Осетия — Алания</span>
			</div>
			<ul class="header__info">
				<li class="header__info-item">
					<router-link to="#">Магазины</router-link>
				</li>
				<li class="header__info-item">
					<router-link to="#">О компании</router-link>
				</li>
				<li class="header__info-item">
					<router-link to="#">Контакты</router-link>
				</li>
			</ul>
			<div class="header__rigth">
				<img src="@/assets/img/svg/header/searchIcon.svg" alt="">
				<img src="@/assets/img/svg/header/favoritIcon.svg" alt="">
			</div>
		</div>
		<div class="header__bottom">
			<button class="header__catalog-btn">
				<span ></span>
				Каталог
			</button>
			<label class="header__bottom-input">
				<img src="@/assets/img/svg/header/searchIcon.svg" alt="">
				<base-input placeholder="Поиск"></base-input>
			</label>
			<div class="header__bottom-profile">
				<img src="@/assets/img/svg/header/profile.svg" alt="">
				<span>Войти</span>
			</div>
			<div class="header__bottom-favorit">
				<img src="@/assets/img/svg/header/favoritIcon.svg" alt="">
				<span>Избранное</span>
			</div>
		</div>
	</div>
</template>

<script>
import {ref} from "vue";
export default {
	name: "Header",
	components: {},
	setup ()
	{
		const placeholderText =  ref("Поиск");
		return {
			placeholderText,
		};
	},

};
</script>

<style lang="scss">
.header
{
	display: flex;
	justify-content: space-between;
	padding-top: 20px;
	> img{cursor: pointer;}
}
.header__catalog-btn{display: none;}
.header__rigth
{
	display: flex;
	> img:not(:last-child){margin-right: 24px;}
	img{cursor: pointer;}
}
.header__logo
{
	position: relative;
	left: 12px;
	> span{display: none}
}
.header__top
{
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-basis: 100%;
	margin-bottom: 38px;
}
.header__catalog-btn{position: relative;}
/* скрываем чекбокс */
#header__toggle {
  opacity: 0;
}

/* стилизуем кнопку */
.header__btn
{
	display: flex; /* используем flex для центрирования содержимого */
	align-items: center; /* центрируем содержимое кнопки */
	position: fixed;
	top: 20px;
	left: 20px;
	width: 16px;
	height: 26px;
	cursor: pointer;
	z-index: 1;
}

/* добавляем "гамбургер" */
.header__btn > span,
.header__btn > span::before,
.header__btn > span::after
{
	display: block;
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: #616161;
}

.header__btn > span::before
{
	content: '';
	top: -8px;
}

.header__btn > span::after
{
	content: '';
	top: 8px;
}

#header__toggle:checked ~ .header__btn > span{transform: rotate(45deg);}

#header__toggle:checked ~ .header__btn > span::before
{
	top: 0;
	transform: rotate(0);
}

#header__toggle:checked ~ .header__btn > span::after
{
	top: 0;
	transform: rotate(90deg);
}

#header__toggle:checked ~ .header__box
{
	visibility: visible;
	left: 0;
}
.header__bottom{display: none;}
.header__phone{display: none;}
.header__info{display: none;}
.header__bottom-profile{display: none;}
.header__bottom-favorit{display: none;}
@media screen and (min-width: 768px)
{
	.header
	{
		margin-bottom: 30px;
		padding-top: 15px;
	}
	.header__logo
	{
		display: flex;
		align-items: center;
		flex-direction: column;
		> span
		{
			display: inline-block;
			font-size: 11px;
			line-height: 13px;
			font-weight: $regular;
			color: $grey;
		}
	}
}
@media screen and (min-width: 1024px)
{
	.header
	{
		flex-direction: column;
		margin-bottom: 36px;
	}
	.header__burger{display: none;}
	.header__rigth{display: none;}
	.header__logo
	{
		left: 0;
		> img{align-self: flex-start;}
	}
	.header__phone
	{
		display: flex;
		flex-direction: column;
		position: relative;
		right: 80px;
		> a
		{
			display: inline-block;
			margin-bottom: 8px;
			font-size: 16px;
			line-height: 19px;
			font-weight: $medium;
		}
		> span
		{
			font-weight: $light;
			font-size: 13px;
			line-height: 15px;
			color: $black;
		}
		&:hover {color: $btn-color;}
	}
	.header__info{display: flex;}
	.header__info-item
	{
		> a
		{
			font-weight: $regular;
			font-size: 18px;
			line-height: 21px;
			color: $grey;
		}
		&:not(:last-child){margin-right: 80px;}
		&:hover > a{color: $btn-color;}
	}
	.header__catalog-btn
	{
		display: flex;
		position: relative;
		padding: 0 30px;
		background: #FC4442;
		border-radius: 100px;
		color: $white;
		font-size: 13px;
		font-weight: 500;
		line-height: 52px;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		border: none;
	}
	.header__btn
	{
		position: relative;
		top: 6px;
		left: -17px;
	}
	.header__bottom
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 26px;
	}
	.header__bottom-input
	{
		position: relative;
		flex: 1;
		img
		{
			position: absolute;
			top: 50%;
			right: 20px;
			transform: translateY(-50%);
			z-index: 11;
			cursor: pointer;
		}
		input
		{
			height: 52px;
			padding-right: 40px;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;
			color: rgba(45, 45, 45, 0.5)
		}
	}
	.header__bottom-profile,
	.header__bottom-favorit
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 26px;
		cursor: pointer;
		font-size: 18px;
		line-height: 21px;
		color: $black;
		&:hover{color: $btn-color;}
	}
}
</style>
