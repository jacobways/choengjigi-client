import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux'
import { loadDBProduct, deleteToken } from '../../../actions';

export default function DeleteModal( { name, id }) {

  const [IsOpened, setIsOpened] = useState(false);

  const dispatch = useDispatch()

  const token = useSelector(state => state.userReducer.token);

  const SubmitDelete = (event) => {

    event.preventDefault()

    axios.delete(`${process.env.REACT_APP_SERVER_API}/image`, {
      params: { id, token: token}
    })
    .then(res => {
      axios.delete(`${process.env.REACT_APP_SERVER_API}/product`, {
        params: {id, token: token}
      })
      .then(res => {
        setIsOpened(false)
        dispatch(loadDBProduct())
      })
      .catch(err=>{
        console.log(err);
        if (err.message = "Request failed with status code 401") {
          dispatch(deleteToken())
        } else {
          alert('서버에 일시적인 오류가 있습니다.')
        }
      })
    })
    .catch(err=>{
      console.log(err);
      if (err.message = "Request failed with status code 401") {
        dispatch(deleteToken())
      } else {
        alert('이미지 삭제 오류')
      }
    })
    


  }

  return (
    <>
     <button 
       className="text-indigo-600 hover:text-indigo-900"
       onClick={() => setIsOpened(true)}
      >
      삭제
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
   
                {/*body*/}
                <div className="relative p-6 flex-auto text-center">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {name} 상품을 삭제하시겠습니까?
                  </p>
                </div>


                {/*footer*/}
                <div className="flex items-center justify-center p-2 border-t border-solid border-blueGray-200 rounded-b">
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
                    onClick={SubmitDelete}
                  >
                    삭제하기
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
