import React from "react";
import { useDispatch } from 'react-redux';
import { setQuantity, initializeQuantity } from '../../actions';
import OrderModal from './OrderModal'

const Summary = ( { CartList } ) => {

    const dispatch = useDispatch()

    let productPrice = 0;

    CartList.forEach(item => {
      productPrice += (item.quantity * item.price)
    })

    const onChangeQuantity = (event, id) => {
      dispatch(setQuantity(id, event.target.value))
    }

    const deleteFromCart = (id) => {
      dispatch(setQuantity(id, 0))
    }

    const clearAllCart = () => {
      dispatch(initializeQuantity())
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <>                    
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-center md:justify-end item-center space-y-2">
                <button 
                  className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 bg-gray-800 text-base font-medium leading-4 text-white"
                  onClick={clearAllCart}
                >
                장바구니 비우기</button>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    
                    
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        
                        {CartList.map(item => {
                          return (
                            <div key={item.id} className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-full hidden md:block" src={item.image} alt="이미지 준비중" />
                                <img className="w-full md:hidden" src={item.image} alt="이미지 준비중" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-center w-full pb-8 space-y-4 md:space-y-0">
                                <div className="w-full md:w-52 flex flex-col justify-start items-start space-y-8 ">
                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base leading-none text-gray-800">
                                            <span className="text-gray-600">무게: </span> {item.weight}kg
                                        </p>
                                        <p className="text-base leading-none text-gray-800">
                                            <span className="text-gray-600">종류: </span> {item.category}
                                        </p>
                                        <p className="text-base leading-none text-gray-800">
                                            <span className="text-gray-600">형태: </span> {item.form}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base xl:text-lg leading-6">
                                        {numberWithCommas(item.price)}원
                                    </p>
                                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                                    <input 
                                    className="border border-gray-200 focus:outline-none"
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(event)=>onChangeQuantity(event, item.id)}
                                    >
                                    </input>

                                    </p>
                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">{numberWithCommas( item.price * item.quantity )}원</p>

                                    <button className="bg-pink-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                                            type="button"
                                            onClick={()=>deleteFromCart(item.id)}
                                    >
                                    삭제</button>
                                </div>
                            </div>
                            </div>
                          )
                        })
                    }
                        

                    </div>


                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-3xl font-semibold leading-5 text-gray-800 mb-2">주문금액</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-xl leading-4 text-gray-800">상품가격</p>
                                    <p className="text-xl leading-4 text-gray-600">{numberWithCommas(productPrice)}원</p>
                                </div>
           
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-xl leading-4 text-gray-800">배송비</p>
                                    <p className="text-xl leading-4 text-gray-600">5,000원</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-2xl font-semibold leading-4 text-gray-800">총 주문가격</p>
                                <p className="text-2xl font-semibold leading-4 text-gray-600">{numberWithCommas(productPrice+5000)}원</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800 text-center">[비로그인] 비회원 주문 서비스만 제공합니다</h3>

                            <div className="w-full flex justify-center items-center">
                                {/* <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">주문하기</button> */}
                                <OrderModal totalPrice={productPrice+5000} CartList={CartList}/>
                            </div>
                        </div>
                    </div>
                </div>
         
            </div>
        </div>
        
        </>
    );
};

export default Summary;
