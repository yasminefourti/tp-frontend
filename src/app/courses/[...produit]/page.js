import React from 'react';

export default async function Courses({ params }) {
  const { produits } = params; 
  console.log(produits);

  return (
    <div>
      <p>Ma liste de courses</p>
      <ul>
        {produits && produits.map((prod, index) => (
          <li key={index}>{prod}</li> 
        ))}
      </ul>
    </div>
  );
}

export default Courses;
