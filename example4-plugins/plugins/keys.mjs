import fs from 'fs';

export function keys() {
  return {
    name: 'loadKeys',
    setup(builder) {
      builder.onLoad({ filter: /\.keys$/ }, async (args) => {
        return {
          contents: await fs.promises.readFile(args.path, 'utf8'),
          loader: 'json',
        }
      })
    },
  }
}
