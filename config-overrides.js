const { override, addWebpackPlugin, addWebpackAlias, adjustStyleRules } = require('customize-cra');

module.exports = override(
  addWebpackPlugin(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'path/to/legacyLib.js',
          to: 'legacyLib.js',
        },
      ],
    })
  ),
  addWebpackAlias({
    // Add any alias configurations here if needed
  }),
  adjustStyleRules(({ use: [MiniCssExtractPluginLoader, ...loaders] }) => {
    return [
      MiniCssExtractPluginLoader,
      ...loaders,
      {
        loader: 'sass-loader',
        options: {
          // Add any sass-loader options here if needed
        },
      },
    ];
  })
);