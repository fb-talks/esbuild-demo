import * as React from 'react'
import * as Client from 'react-dom/client';

import { Panel1 } from './Panel1';
import { Panel2 } from './Panel2';
import txt from './file_readme.txt'
import markdown from './file_markdown.md'
import keys from './files_keys.keys'
import react1 from '../public/images/bwreact.png'  // converted in grayscale since it start with bw
import react2 from '../public/images/react.png'

let App = () => <div>
  <h1>JSX</h1>
  <div className="border">Hello CodeMotion</div>
  <Panel1 />
  <Panel2 />
  <hr/>
  <h1>Custom Plugins</h1>
  <div>{txt}</div>
  <div>{keys.hi}</div>
  <div dangerouslySetInnerHTML={{__html: markdown}} />
  <img src={react1} alt="" width={50}/>
  <img src={react2} alt="" width={50}/>
</div>

const root = Client.createRoot(
  document.getElementById('root')
);
root.render(<App />);

