import React from 'react';

import ProdImg1 from './pat-taylor-12V36G17IbQ-unsplash.jpg'
import ProdImg2 from './reuben-mansell-nwOip8AOZz0-unsplash.jpg'
import ProdImg3 from './hitesh-dewasi-3krhHJK4opY-unsplash.jpg'
import ProdImg4 from './felipepelaquim-bNW0HC_a3KE-unsplash.jpg'
import ProdImg5 from './tim-mossholder-VOXs79vySFo-unsplash.jpg'
import ProdImg6 from './artem-sapegin-DErxVSSQNdM-unsplash.jpg'
import ProdImg7 from './angelina-yan-rVdLmULqVTQ-unsplash.jpg'
import ProdImg8 from './xavier-teo-SxAXphIPWeg-unsplash.jpg'




const Products = () => {
  const productList = [
    { id: 1, name: 'Product 1', price: '$100', img:ProdImg1},
    { id: 2, name: 'Product 2', price: '$150', img: ProdImg2 },
    { id: 3, name: 'Product 3', price: '$200', img: ProdImg3 },
    { id: 4, name: 'Product 4', price: '$250', img: ProdImg4 },
    { id: 5, name: 'Product 5', price: '$300', img: ProdImg5 },
    { id: 6, name: 'Product 6', price: '$350', img: ProdImg6 },
    { id: 7, name: 'Product 7', price: '$400', img: ProdImg7 },
    { id: 8, name: 'Product 8', price: '$450', img: ProdImg8 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {productList.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
          <img className="w-full h-48 object-cover rounded-md" src={product.img} alt={product.name} />
          <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
          <p className="text-blue-600 font-semibold">{product.price}</p>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy Now</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
