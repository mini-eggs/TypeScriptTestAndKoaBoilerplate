module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = "./server.ts";
    config.module.rules.push({ test: /\.ts$/, loader: "ts-loader" });
    config.resolve.extensions = [".js", ".ts", ".json"];
    return config;
  }
};
