module.exports = function(config) {
  config.set({
    basePath: '..',

    frameworks: ['jasmine'],

    files: [
      'tardis.js',
      'test/spec/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ]
  });
};
