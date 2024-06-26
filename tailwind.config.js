/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: "#3d3d3d",
            secondary: "#6e6d6d",
            inactive: "#888888",
            accent: "#DC4A2D",
            accent_secondary: "#fcb4a5",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                satoshi: ["satoshi", " sans-serif"],
                general: ["General Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
