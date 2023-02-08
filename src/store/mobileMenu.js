import {defineStore} from "pinia";

export const useMobileMenuStore = defineStore('mobileMenu',{
	state: () => ({
		isOpenMobileMenuList: false,
	})
})
