import React from "react";
import './ProductLife.css'
import Category from './Category'

export default function ProductLife() {
  const books = "https://cdn2.iconfinder.com/data/icons/book-22/210/1461-512.png"
  const clothing = "https://cdn2.iconfinder.com/data/icons/clothing-6/64/clothing-08-512.png"
  const electronics = "https://www.pinclipart.com/picdir/big/370-3707716_electronics-clipart-electronic-equipment-4-clip-art-mobile.png"
  const food = "https://static.thenounproject.com/png/1695234-200.png"
  const glass = "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/732/original/glass.png"
  const metal = "https://static.thenounproject.com/png/38756-200.png"
  const paper = "https://image.flaticon.com/icons/png/512/65/65686.png"
  const plastic = "https://img.icons8.com/ios/452/plastic.png"
  const wood = "https://static.thenounproject.com/png/40841-200.png"

  return (
    <div className="extend-product">
      <h2>Extend the life of your product</h2>
      <h3>Categories</h3>
      <Category type="Books" image={books} />
      <Category type="Clothing" image={clothing}  />
      <Category type="Electronics" image={electronics} />
      <Category type="Food" image={food} />
      <Category type="Glass" image={glass} />
      <Category type="Metal" image={metal} />
      <Category type="Paper" image={paper} />
      <Category type="Plastic" image={plastic} />
      <Category type="Wood" image={wood} />
    </div>
  )
}