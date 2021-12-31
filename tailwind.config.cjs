module.exports = {
    theme: {
        extend: {
            backgroundPosition: {
                '0/100': '0 100%',
                '100/100': '100% 100%'
            },
            backgroundSize: {
                '0/1px': '0% 1px',
                '100/1px': '100% 1px'
            },
            scale: {
                '995': '.995',
            },
            transitionProperty: {
                'background-size': 'background-size',
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