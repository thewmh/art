module.exports = {
    theme: {
        extend: {
            scale: {
                '995': '.995',
            },
            typography: {
                DEFAULT: {
                    css: {
                        p: {
                            marginTop: 0,
                            marginBottom: 0,
                        },
                    },
                },
            },
        },
    },
    content: [
        './public/**/*.html',
        './src/**/*.{astro, js, jsx, svelte, ts, tsx, vue}',
    ],
    plugins: [
        require('@tailwindcss/typography'),
    ],
};