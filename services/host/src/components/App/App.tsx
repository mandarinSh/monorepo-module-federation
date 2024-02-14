import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { aboutRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutes } from '@packages/shared/src/routes/shop';

export const App = () => { 

  return (
    <div data-testid={"App.DataTestId"}>
      <h1>
       PAGE
      </h1>
      <Link to={aboutRoutes.about}>about</Link>
      <br/>
      <Link to={shopRoutes.main}>shop</Link>
      <Outlet/>
    </div>
  )
}