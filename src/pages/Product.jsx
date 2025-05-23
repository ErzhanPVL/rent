import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import React from "react";
const Product = () => {
  const { id } = useParams();
  const {products} = useContext(ProductsContext);

  const product = products.find((item) => item.id.toString() === id);
  console.log(product);
  if (!product) {
    return <p className="p-4 text-red-600">Товар не найден</p>;
  }

  return (
    <div className="p-4 mt-10">
      <img src={product.image} alt="" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 text-xl font-semibold">цена: {product.price}$</p>
    </div>
  );
};

export default Product;
