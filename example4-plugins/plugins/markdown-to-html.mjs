import fs from 'fs';
import md from 'markdown-it';

export function markdownToHTML() {
  return {
    name: 'markdown',
    setup(builder) {
      builder.onLoad({ filter: /\.md$/ }, async (args) => {
        let text = await fs.promises.readFile(args.path, 'utf8')
        return {
          contents: md().render(text),
          loader: 'text',
        }
      })
    },
  }
}
