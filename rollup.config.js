import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import litcss from 'rollup-plugin-lit-css';

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
    litcss(),
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ],
      extensions: [ '.css', '.scss' ],
    }),
    commonjs(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    replace({
      exclude: 'node_modules/**',
      MARCA: process.env.MARCA,
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};