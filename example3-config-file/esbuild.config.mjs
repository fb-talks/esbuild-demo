import time from 'esbuild-plugin-time';
import * as esbuild from "esbuild";

(async () => {
  const res = await esbuild.build({
    entryPoints: ['src/App.tsx'],
    // ony one entryPoint
    // outfile: 'public/dist/App.js',
    // multiple entryPoints
    outdir: 'public/dist',
    // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    bundle: true,
    sourcemap: true,
    minify: true,
    plugins:     [
      time(),
    ],
    // NEW
    metafile: true,
    watch: {
      onRebuild(error, result) {
        if (error) console.error('watch build failed:', error)
        else console.log('watch build succeeded:', result)
      },
    },
  })

  // NEW
  const text = await esbuild.analyzeMetafile(res.metafile, {
    verbose: true,
  })
  // console.log(text)
})()
