import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { initializeQuantity } from '../../actions';

export default function Modal( { totalPrice, CartList }) {

  const navigate = useNavigate();

  const [IsOpened, setIsOpened] = useState(false);

  const [Name, setName] = useState('');
  const [CP, setCP] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');

  const NameHandler = (event) => {
    setName(event.target.value)
  }

  const CPHandler = (event) => {
    setCP(event.target.value)
  }

  const EmailHandler = (event) => {
    setEmail(event.target.value)
  }

  const AddressHandler = (event) => {
    setAddress(event.target.value)
  }

  const dispatch = useDispatch()

  const SubmitOrder = () => {

    axios.post(`${process.env.REACT_APP_SERVER_API}/order`, {
      customer: Name,
      CP: CP,
      email: Email,
      address: Address,
      totalPrice: totalPrice,
      CartList: CartList
    })
    .then(res => {
      dispatch(initializeQuantity())
      setIsOpened(false)
      navigate('/orderconfirm')
    })
    .catch(err=>{
      console.log(err);
      if (err) alert('서버에 일시적인 오류가 있습니다.')
    })
  }

  return (
    <>
      <button
        className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white"
        onClick={() => setIsOpened(true)}
      >
        주문하기
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
                  <h3 className="text-3xl font-semibold">
                    주문서 작성
                  </h3>

                </div>
                {/*body*/}



            <form>
            <div className="bg-white dark:bg-gray-800">

      
                <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
      
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto">
                            <div className="md:w-3/4 flex flex-col mb-6">
                                <label htmlFor="Name" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    주문자명
                                </label>
                                <input 
                                  type="text" 
                                  id="Name" 
                                  name="Name" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  placeholder="예시 : 홍길동"
                                  value={Name}
                                  onChange={NameHandler}
                                />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-6">
                                <label htmlFor="CP" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    휴대폰번호
                                </label>
                                <input 
                                  type="text" 
                                  id="CP" 
                                  name="CP" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  placeholder="예시 : 01012345678"
                                  value={CP}
                                  onChange={CPHandler}
                                />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-6">
                                <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Email (선택사항) 
                                </label>
                                <div className="border border-green-400 shadow-sm rounded flex">
                                    <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={3} y={5} width={18} height={14} rx={2} />
                                            <polyline points="3 7 12 13 21 7" />
                                        </svg>
                                    </div>
                                    <input 
                                      type="text" 
                                      id="Email" 
                                      name="email" 
                                      className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400" 
                                      placeholder="example@gmail.com" 
                                      value={Email}
                                      onChange={EmailHandler}
                                    />
                                </div>
                                <div className="flex justify-between items-center pt-1 text-green-400">
                                    <p className="text-xs">Email submission success!</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                        <path
                                            className="heroicon-ui"
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                            stroke="currentColor"
                                            strokeWidth="0.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-6">
                                <label htmlFor="Address" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  주소
                                </label>
                                <input 
                                  type="text" 
                                  id="Address" 
                                  name="Address" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                  value={Address}
                                  onChange={AddressHandler}
                                />
                            </div>

                            

                        </div>
                    </div>
                </div>


            </div>
        </form>






                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
                    onClick={SubmitOrder}
                  >
                    주문하기
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
