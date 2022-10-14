import fs from 'fs';

export function toUpperCase() {
  return {
    name: 'uppercase',
    setup(builder) {
      builder.onLoad({ filter: /\.txt$/ }, async (args) => {
        let text = await fs.promises.readFile(args.path, 'utf8')
        return {
          //contents: JSON.stringify(text.split(/\s+/)),
          contents: JSON.stringify(text.toUpperCase()),
          loader: 'json',
        }
      })
    },
  }
}
