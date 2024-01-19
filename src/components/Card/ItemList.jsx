import React from 'react'
import Products from '../Products/Products'
const  ItemList=() =>  {
    return (
        <>
        {Products.map((Product) => (
         <li key={Product.id}  title={Product.title} description={Product.description} deliveryTime={Product.deliveryTime} /> 
       ))}
        </>
        
    )
}

export default ItemList
