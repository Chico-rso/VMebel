import {createRouter, createWebHistory} from "vue-router";
import {NotFoundPage} from "@/views/notFoundPage/NotFoundPage.vue";

const routes = [
	{
		path: "/",
		component: () => import("../layout/BaseLayout.vue"),
		children: [
			{
				path: "/",
				name: "MainPage",
				component: () => import("../views/mainPage/MainPage.vue"),
				breadcrumb: 'VMebel'
			},
			{
				path: "category/:id",
				name: "CategoryPage",
				component: () => import("../views/categoryPage/CategoryPage.vue"),
				breadcrumb: 'Категория'
			},
			{
				path: "about",
				name: "AboutPage",
				component: () => import("../views/aboutPage/AboutPage.vue"),
				breadcrumb: 'О нас'
			},
			{
				path: "contacts",
				name: "ContactsPage",
				component: () => import("../views/contactsPage/ContactsPage.vue"),
				breadcrumb: 'Контакты'
			},
			{
				path: "favorites",
				name: "FavoritesPage",
				component: () => import("../views/favoritePage/FavoritePage.vue"),
				breadcrumb: 'Избранное'
			}
		]
	},
	{
		path: "/not-found",
		component: () => import("../layout/PageNotLayout.vue"),
		children: [
			{
				path: '/:pathMatch(.*)*',
				name: "NotFoundPage",
				component: () => import("../views/notFoundPage/NotFoundPage.vue")
			}
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});


export default router;
