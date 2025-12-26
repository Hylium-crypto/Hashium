/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'hashium-bg': '#0a0a0c',
                'hashium-bg-alt': '#0d0d12',
                'hashium-cyan': '#00f2ea',
                'hashium-cyan-glow': 'rgba(0, 242, 234, 0.4)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'cyan-glow': '0 0 30px rgba(0, 242, 234, 0.5), 0 0 60px rgba(0, 242, 234, 0.3)',
            },
        },
    },
    plugins: [],
}
