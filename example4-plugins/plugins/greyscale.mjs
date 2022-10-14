import sharp from 'sharp';

export  function greyscalePlugin() {
  return {
    name: 'greyscalePlugin',
    setup(builder) {
      // regex: must be a png and contain bw
      builder.onLoad({ filter: /bw.*.png$/ }, async (args) => {
        const output = await sharp(args.path).greyscale().toBuffer();
        return {
          contents: output,
          loader: 'dataurl'
        }
      })
    },
  }
}
