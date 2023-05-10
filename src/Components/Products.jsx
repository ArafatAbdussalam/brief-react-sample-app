import React from 'react'

const Products = () => {

    const productSample = [
        {id: 1, isFruit: false, title: "cabbage"},
        {id: 2, isFruit: true, title: "Apples"},
        {id: 3, isFruit: false, title: "Garlic"},
        {id: 4, isFruit: false,title: "Lettuce"}
    ]

    const eachProduct = productSample.map(product => {
        <li key = {product.id}
            style = {{color: productSample.isFruit ? "magenta" : "darkgreen"}} >
            {product.title}
        </li>
    })

  return (
    <div>
      <ul>{eachProduct}</ul>
    </div>
  )
}

export default Products
