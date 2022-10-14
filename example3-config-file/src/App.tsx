import * as React from 'react'
import * as Client from 'react-dom/client';
import { Panel1 } from './Panel1';
import { Panel2 } from './Panel2';
import './index.css';
import './Panel2.css';

let App = () => <div>
  <div className="border">Hello CodeMotion</div>
  <Panel1 />
  <Panel2 />
</div>

const root = Client.createRoot(
  document.getElementById('root')
);
root.render(<App />);

