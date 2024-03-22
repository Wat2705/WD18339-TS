import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { TProduct } from '@/interfaces/TProduct'


const ProductDetail = () => {
  const params = useParams();

  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3000/products/${params.id}`)
      const data = await res.json()
      setProduct(data);
      console.log(data)
    })()
  }, []);

  return (
    <div>
      <div>ID: {product?.id}</div>
      <div>Title: {product?.title}</div>
      <div>Brand: {product?.brand}</div>
      <div>Cate: {product?.category}</div>
      <div>Desc: {product?.description}</div>
      <div>Discount: {product?.discountPercentage}%</div>
      <div>Price: {product?.price}$</div>
      <div>Rating: {product?.rating}</div>
      <div>Stock: {product?.stock}</div>
      <img src={product?.thumbnail} alt="" />
    </div>
  )
}

export default ProductDetail
