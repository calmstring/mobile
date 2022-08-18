module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@lib": "./lib",
            "@constants": "./constants",
            "@components": "./components",
            "@utils": "./utils",
            "@api": "./api",
            "@services": "./services",
            "@containers": "./containers",
          },
        },
      ],
    ],
  };
};
