module.exports = {
    baseUrl: './',
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/styles/main.scss";`
            }
        }
    }
};
