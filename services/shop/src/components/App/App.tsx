import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


export const App = () => { 

  return (
    <div>
      <h1>
       PAGE shop module
      </h1>
      <Outlet/>
    </div>
  )
}