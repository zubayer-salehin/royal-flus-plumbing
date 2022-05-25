module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffd333",
          secondary: "#3d464d",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}