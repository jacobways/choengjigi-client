import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import ItemModal from "./ItemModal"
import DepositModal from "./DepositModal"
import DateModal from "./DateModal";

function ReadOrder() {

  // https://www.samuelliedtke.com/blog/react-table-tutorial-part-2/
  // https://tailwindui.com/components/application-ui/lists/tables
  // 링크 참고해서 테이블 꾸미기
  

  const [OrderList, setOrderList] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_API}/order`)
    .then(res=>{
      setOrderList(res.data.data)
    })
  }, [])
  
  
  return (
    <section>
      
      {OrderList.length === 0 ? 
       <div>주문 정보가 없습니다.</div>
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
                      주문번호
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      주문자명
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      휴대폰
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      이메일
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      주소
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      금액
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      날짜
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                    >
                      입금
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">삭제</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {OrderList.map((order, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.OrderNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.CP}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{order.totalPrice}</td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td> */}
                      <DateModal date={order.date} OrderNumber={order.OrderNumber} customer={order.customer} />
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                        {/* {order.deposit} */}
                        <DepositModal id={order.id} OrderNumber={order.OrderNumber} Deposit={order.deposit} customer={order.customer} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
                        <ItemModal ItemList={order.itemList} customer={order.customer} OrderNumber={order.OrderNumber} />
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

export default ReadOrder;

// 입금여부 선택 할때 사용 가능

{/* <td className="px-6 py-4 whitespace-nowrap">
<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
  Active
</span>
</td> */}

