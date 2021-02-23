var compilerOptions = {
  modules: 'system',
  moduleIds: false,
  externalHelpers: true,
  comments: true,
  compact: false,
};

var path = {
  source: 'src/**/*.js',
  html: '**/*.html',
  json: 'src/**/*.json',
  templates: 'src/**/*.html',
  imputLess: 'src/assets/less/*.less',
  themes: ['app/assets/dark.css', 'app/assets/light.css'],
  themesOutput: 'public/assets/',
  output: 'public/app',
  outputCss: 'public/assets/css/',
  css: ['src/**/*.css', '!app/assets/**/*.css'],
};

var serve = {
  port: 9000,
  rootPath: './public'
}

module.exports = {
  path: path,
  compilerOptions: compilerOptions,
  serve: serve
}
