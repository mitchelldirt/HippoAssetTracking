/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx,html}',
        './components/**/*.{ts,tsx,html}',
        './app/**/*.{ts,tsx,html}',
        './src/**/*.{ts,tsx,html}',
        './index.html'
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            gridTemplateColumns: {
                'header': '1fr 3fr 6fr'
            },
            boxShadow: {
                'header': '0px 4px 10px -7px #000',
                'footer': '0px -4px 10px -7px #000'
            },
            keyframes: {
                "accordion-down": {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}