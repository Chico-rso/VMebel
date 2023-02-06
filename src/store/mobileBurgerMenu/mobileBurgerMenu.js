import {defineStore} from "pinia";

export const useMobileBurgerMenuStore = defineStore('mobileBurgerMenu',{
	state: () => ({
		isOpenMobileBurgerMenuList: false,
	})
})
