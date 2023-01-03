<template>
	<div class="footer">
		<div class="container">
			<div class="footer__wrapper">
				<div class="footer__left">
					<span>Есть вопросы? Звоните:  <a href="">8 (800) 600-08-88</a></span>
					<span>Режим работы с 8 до 22</span>
				</div>
				<div class="footer__right">
					<span>Или пишите</span>
					<div class="footer__right-social-links">
						<a href="">
							<img src="@/assets/img/svg/footer/telegram.svg" alt="telegram">
						</a>
						<a href="">
							<img src="@/assets/img/svg/footer/watsapp.svg" alt="watsapp">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style lang="scss">
.footer__wrapper
{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 18px 0;
}
.footer__left
{
	display: flex;
	flex-direction: column;
	> span{margin-bottom: 5px;}
	> span:last-child{margin-bottom: 0;}
	span
	{
		font-family: $baseFont;
		font-style: normal;
		font-weight: $regular;
		font-size: 8px;
		line-height: 9px;
		color: $grey;
	}
}
.footer__right
{
	display: flex;
	align-items: center;
	span
	{
		margin-right: 13px;
		font-family: $baseFont;
		font-style: normal;
		font-weight: $regular;
		font-size: 8px;
		line-height: 9px;
		color: $black;
	}
	a:not(:last-child){margin-right: 13px;}
}
@media (min-width: 768px)
{
	.footer__right
	{
		span
		{
			font-size: 13px;
			line-height: 15px;
		}
	}
	.footer__left
	{
		flex-direction: row;
		> span{margin-bottom: 0;}
		> span:last-child{margin-bottom: 0;}
		> span:not(:last-child){margin-right: 20px;}
		span
		{
			font-size: 13px;
			line-height: 15px;
		}
	}
}
</style>
