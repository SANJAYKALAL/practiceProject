module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
          '.style.ts',
        ],
        alias: {
          '@imageIndex': './src/assets/imageIndex',
          '@svgIndex': './src/assets/svgIconIndex',
          '@components': './src/component/componentIndex.ts',
          '@card': './src/component/cardIndex.ts',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@redux': './src/services/redux',
          '@api': './src/services/api',
          '@config': './src/services/config',
          '@theme': './src/theme/index.ts',
          '@utility': './src/utility',
          '@context': './src/context',
          '@localization': './src/localization',
        },
      },
    ],
  ],
};
