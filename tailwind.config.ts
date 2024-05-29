import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/TechfusionAcademy/assets/background/bg-1.png')",
        bg2: "url('/TechfusionAcademy/assets/background/bg-2.png')",
        bgLogin: "url('/TechfusionAcademy/assets/background/bg-Login.png')",
        bgLogin2: "url('/TechfusionAcademy/assets/background/bg-Login2.png')",
        bgLogin3:
          "url('/TechfusionAcademy/assets/background/bg-responsive.png')",
        bgLogin4:
          "url('/TechfusionAcademy/assets/background/bg-responsive2.png')",
        bgButton: "url('/TechfusionAcademy/assets/background/bg-button.png')",
        bgBlog:
          "url('/TechfusionAcademy/assets/background/bg-content-blog.png')",
        bgDetailClass:
          "url('/TechfusionAcademy/assets/background/bg-detailClass.png')",
        bgFooter: "url('/TechfusionAcademy/assets/background/bg-footer.png')",
        bgContentCourses:
          "url('/TechfusionAcademy/assets/background/bg-content-corses.png')",
        bgCourses: "url('/TechfusionAcademy/assets/background/bg-courses.png')",
        bgText: "url('/TechfusionAcademy/assets/background/bg-text.png')",
      },
      colors: {
        color: {
          c1: "#D0FEE1",
          c2: "#56B86F",
          c3: "#EDFFF3",
          c4: "#FFFFFF",
          c5: "#000",
          c6: "#3D9553",
          c7: "#25262B",
          c8: "#F3F4F6",
          c9: "#9EE34C",
          c10: "#055C20",
          text: { 1: "#96A199", 2: "#828282" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
