// import React from 'react'
// import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
// import { TProduct } from '@/interfaces/TProduct'

// type Props = {
//   product: TProduct
// }

const Home = () => {
  return (
    <div className='my-5'>
      <h2 className='mb-5'>Danh sach sản phẩm:</h2>
      <ProductList />
    </div>
  )
}

export default Home
