<template>
	<div class="header">
		<div class="header__top">
			<img class="header__burger" src="@/assets/img/svg/header/burger.svg" alt="">
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
		</div>
		<div class="header__bottom">

		</div>
		<div class="header__rigth">
			<img src="@/assets/img/svg/header/searchIcon.svg" alt="">
			<img src="@/assets/img/svg/header/favoritIcon.svg" alt="">
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style lang="scss">
.header
{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 20px;
	> img{cursor: pointer;}
}
//.header__top
//{
//	display: flex;
//	align-items: center;
//	flex: 1 0 100%;
//}
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
.header__phone{display: none;}
.header__info{display: none;}
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
	.header{margin-bottom: 36px;}
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
}
</style>
