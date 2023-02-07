const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
});
module.exports =
{
	css:
	{
		loaderOptions:
		{
			scss:
			{
				additionalData:
					`@import "@/assets/scss/_variables.scss";
					 @import "@/assets/scss/_normalize.scss";
					 @import "@/assets/scss/base.scss";
					 @import "@/assets/fonts/styles.scss";
					 `,
			},
		},
	},
};
