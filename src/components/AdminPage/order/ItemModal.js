import React, { useState, useEffect } from "react";

export default function EditModal( { ItemList, OrderNumber, customer  }) {

  const [IsOpened, setIsOpened] = useState(false);

  return (
    <>
      <button 
        className="text-indigo-600 hover:text-indigo-900"
        onClick={() => setIsOpened(true)}  
      >
      상품보기
      </button>
      {IsOpened ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-full md:w-3/5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    {OrderNumber}({customer}) 상품확인
                  </h3>

                </div>
                {/*body*/}


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
                            개수
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                          >
                            개별 가격
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                          >
                            총 가격
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-left">
                        {ItemList.map((item) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{item.item}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{item.quantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{item.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">{item.totalPrice}</td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>





                {/*footer*/}
                <div className="flex items-center justify-start p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsOpened(false)}
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
