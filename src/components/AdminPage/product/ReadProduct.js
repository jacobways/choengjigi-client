import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

function ReadProduct() {

  // https://www.samuelliedtke.com/blog/react-table-tutorial-part-2/
  // https://tailwindui.com/components/application-ui/lists/tables
  // 링크 참고해서 테이블 꾸미기
  
  const ProductList = useSelector(state => state.productReducer.product);
  
  return (
    <section>
      
      {ProductList.length === 0 ? 
       <div>상품 리스트 정보가 없습니다.</div>
      :
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      품명
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      가격(원)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      무게(kg)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      카테고리
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      형태
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      공급처
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      효능
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      비고
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">수정</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">삭제</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ProductList.map((product, idx) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{product.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{product.weight}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{product.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{product.form}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{product.supplier}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{product.effect}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-900">{product.note}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
                        {/* <button className="text-indigo-600 hover:text-indigo-900">
                          수정
                        </button> */}
                        <EditModal ProductList={ProductList} idx={idx} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
                        <DeleteModal id={product.id} name={product.name} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    }

    </section>
  );
}

export default ReadProduct;