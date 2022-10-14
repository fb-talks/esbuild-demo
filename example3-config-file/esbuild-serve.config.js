require('esbuild').serve({
  // open webserver in the public folder
  servedir: 'public',
  port: 1234
}, {
  // entry point for source code
  entryPoints: ['src/App.tsx'],
  // bundle output in public/dist/xxx.js
  outdir: 'public/dist',
  sourcemap: true,
  // NEW
  // assetNames: 'public/assets/[name]',
  bundle: true,
  /*loader: {
    '.png': 'dataurl',
    '.svg': 'text',
  },*/
}).then(server => {
  console.log('listen on http://localhost:1234/')
  // Call "stop" on the web server to stop serving
  // server.stop()
})

