const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      primary: {
        dark: "rgb(0, 132, 255)",
        light: "rgb(0, 122, 255)",
        text: {
          dark: "#e4e4e7",
          light: "#f4f4f5",
        },
      },
      secondary: {
        dark: "rgb(255,55,95)",
        light: "rgb(255,45,85)",
        text: {
          dark: "#e4e4e7",
          light: "#f4f4f5",
        },
      },
      background: {
        dark: "rgb(28, 28, 30)",
        light: "rgb(242, 242, 247)",
      },
      text: {
        dark: "#1c1917",
        light: "#e4e4e7",
      },
      ...colors,
    },
  },
};
