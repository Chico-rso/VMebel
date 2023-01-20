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
@import "footer.scss";
</style>
