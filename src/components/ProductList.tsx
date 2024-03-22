'use client';

import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<TProduct[]>([])
  // DependencyList: 
  // 1. Không có dep => cứ có thay đổi thì render lại
  // 2. nếu để [] => chỉ chạy 1 lần duy nhất
  // 3. [state1, state2 ...] => chạy lại khi 1 trong các state được liệt kê có sự thay đổi
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/products')
      const data = await res.json()
      setProducts(data)
    })()
  }, [])
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Desc</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Discount Percentage</Table.HeadCell>
          <Table.HeadCell>Rating</Table.HeadCell>
          <Table.HeadCell>Stock</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((e) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" onClick={() => navigate(`/detail/${e.id}`)} key={e.id}>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {e.id}
              </Table.Cell>
              <Table.Cell>{e.title}</Table.Cell>
              <Table.Cell>{e.description}</Table.Cell>
              <Table.Cell>{e.category}</Table.Cell>
              <Table.Cell style={{ padding: "0 0 0 30px" }}>{e.price} $</Table.Cell>
              <Table.Cell>{e.discountPercentage}</Table.Cell>
              <Table.Cell>{e.rating}</Table.Cell>
              <Table.Cell>{e.stock}</Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Component;