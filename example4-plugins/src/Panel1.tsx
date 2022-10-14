// src/Panel1.tsx
import axios from 'axios';
import { useEffect } from 'react';
import * as React from 'react'
import css from './Panel1.module.css';

export const Panel1 = () =>{
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res))
  }, [])
  return <h2 className={css.bg}>I'm panel 2!</h2>
}
