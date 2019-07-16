const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withCSS = require('@zeit/next-css');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = withCSS({
  cssModules: true,
  webpack(config, options) {
    if (options.isServer && options.dev) {
      /** 型チェック */
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
      /** eslint */
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|ts|jsx|tsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      });
      /** stylelint */
      config.plugins.push(
        new StyleLintPlugin({
          configFile: '.stylelintrc.js',
          files: ['**/*.css']
        })
      );
    }

    return config;
  }
});
