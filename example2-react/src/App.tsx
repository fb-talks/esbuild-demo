import * as React from 'react'
import * as Client from 'react-dom/client';

let App = () => <div className="bg">Hello CodeMotion</div>

const root = Client.createRoot(
  document.getElementById('root')
);
root.render(<App />);

