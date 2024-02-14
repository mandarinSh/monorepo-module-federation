import React from 'react';
import { Link } from 'react-router-dom';
import { aboutRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutes } from '@packages/shared/src/routes/shop';

const Shop = () => {
  return (
    <h1>
      SHOP
      <Link to={shopRoutes.second}> Go to Second</Link>
      <div>123</div>
    </h1>
  )
}

export default Shop;