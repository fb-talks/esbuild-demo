import esbuild from 'esbuild';
import {toUpperCase} from "./plugins/to-uppercase.mjs";
import {markdownToHTML} from "./plugins/markdown-to-html.mjs";
import {keys} from "./plugins/keys.mjs";
import {greyscalePlugin} from "./plugins/greyscale.mjs";

esbuild.serve({
  servedir: 'public',
  port: 1234
}, {
  entryPoints: ['src/App.tsx'],
  outdir: 'public/dist',
  bundle: true,
  plugins: [
    toUpperCase(),
    markdownToHTML(),
    keys(),
    greyscalePlugin()
  ],
  define: { 'process.env.NODE_ENV': '"development"' },
  loader: {
    '.png': 'dataurl'
  }
  /*external: ['*.png', '/images/!*'],*/
}).then(server => {
  console.log('listen on http://localhost:1234/')
  // Call "stop" on the web server to stop serving
  // server.stop()
})
