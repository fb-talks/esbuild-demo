// src/Panel1.tsx
import axios from 'axios';
import { useEffect } from 'react';
import * as React from 'react'
export const Panel1 = () =>{
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res))
  }, [])
  return <h1>I'm panel 1!</h1>
}
