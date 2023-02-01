import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{
		path: "/",
		component: () => import("../layout/BaseLayout.vue"),
		children: [
			{
				path: "/",
				name: "MainPage",
				component: () => import("../views/mainPage/MainPage.vue")
			}
		]
	},
	{
		path: "/not-found",
		component: () => import("../layout/PageNotLayout.vue"),
		children: [
			{
				path: "/not-found",
				name: "NotFoundPage",
				component: () => import("../views/notFoundPage/NotFoundPage.vue")
			}
		],
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});


export default router;
