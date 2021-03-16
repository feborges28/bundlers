import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import litcss from 'rollup-plugin-lit-css';
import html from '@open-wc/rollup-plugin-html';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist/',
    format: 'es'
  },
  format: 'es',
  sourceMap: 'inline',
  plugins: [
    replace({
      exclude: 'node_modules/**',
      MARCA: process.env.MARCA,
    }),
    html({
      template: `
      <html>
        <head><title>My app</title></head>
        <body class="${process.env.MARCA}">
          <my-element></my-element>
        </body>
      </html>`,
    }),
    litcss({
      include: ["src/**/*.scss", "src/**/*.css"]
    }),
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ],
      extensions: [ '.css', '.scss' ],
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};