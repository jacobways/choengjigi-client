import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux'
import { deleteToken } from '../../../actions';

export default function DepositModal( { id, OrderNumber, customer, Deposit }) {

  const [IsOpened, setIsOpened] = useState(false);

  const [deposit, setDeposit] = useState(Deposit)

  const depositHandler = (event) => {
    setDeposit(event.target.value)
  }

  const dispatch = useDispatch()
  const token = useSelector(state => state.userReducer.token);
  

  const SubmitEdit = () => {

    axios.patch(`${process.env.REACT_APP_SERVER_API}/order`, {
      id,
      deposit,
      token: token
    })
    .then(res => {
      setIsOpened(false)
    })
    .catch(err=>{
      console.log(err);
      if (err.message = "Request failed with status code 401") {
        dispatch(deleteToken())
      } else {
        alert('서버에 일시적인 오류가 있습니다.')
      }
    })
    
  }

  return (
    <>
    
      { deposit === "입금예정" &&
        <button 
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
          onClick={() => setIsOpened(true)}  
        >
        {deposit}
        </button>
      } 
      { deposit === "입금완료" &&
        <button 
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          onClick={() => setIsOpened(true)}  
        >
        {deposit}
        </button>
      }
      {  deposit === "주문취소" &&
        <button 
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
          onClick={() => setIsOpened(true)}  
        >
        {deposit}
        </button>
      }
    
    
      {/* <button 
        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
        onClick={() => setIsOpened(true)}  
      >
      {deposit}
      </button> */}

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
                    {OrderNumber}({customer})의 입금상태 변경
                  </h3>

                </div>
                {/*body*/}



            <form>
            <div className="bg-white dark:bg-gray-800">

      
                <div className="container mx-auto bg-white dark:bg-gray-800 mt-1 rounded px-4">
      
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto text-left flex flex-col">
                            <div className="md:w-3/4 mb-6">
                              <label htmlFor="Waiting" className="mr-1.5 pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  입금예정
                              </label>
                              <input 
                                type="radio" 
                                id="Waiting" 
                                name="deposit" 
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                value="입금예정"
                                checked={deposit === "입금예정"}
                                onChange={depositHandler}
                              />
                            </div>
                            <div className="md:w-3/4 mb-6">
                              <label htmlFor="Completed" className="mr-1.5 pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                입금완료
                              </label>
                              <input 
                                type="radio" 
                                id="Completed" 
                                name="deposit"
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                value="입금완료"
                                checked={deposit === "입금완료"}
                                onChange={depositHandler}
                              />
                            </div>
                            <div className="md:w-3/4 mb-6">
                              <label htmlFor="Canceled" className="mr-1.5 pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                주문취소
                              </label>
                              <input 
                                type="radio" 
                                id="Canceled" 
                                name="deposit"
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                checked={deposit === "주문취소"}
                                value="주문취소"
                                onChange={depositHandler}
                              />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </form>






                {/*footer*/}
                <div className="flex items-center justify-start p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsOpened(false)}
                  >
                    취소하기
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={SubmitEdit}
                  >
                    수정하기
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
