module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {
      preserve: false
    },
    'postcss-custom-media': {},
    'postcss-preset-env': {
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': true
      }
    },
    cssnano: {
      preset: 'default',
      mergeRules: false,
      normalizeUrl: false,
      zindex: false
    }
  }
};
