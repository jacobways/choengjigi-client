import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setQuantity } from '../../actions';
import { useNavigate } from "react-router-dom";
import { NavCart } from '../../actions/nav';

function ProductList() {
  
  const ProductList = useSelector(state => state.productReducer.product);
  const QuantityList = useSelector(state => state.productReducer.quantity);

  const ProductQuantityList = ProductList
  .map((item, idx) => {
    return {...item, quantity: QuantityList[idx].quantity}
  })

  const FilterObj = useSelector(state => state.productReducer.filter);
  
  const filteredProduct = ProductQuantityList.filter(product => {
    return FilterObj[product.category]
  })
  

  const dispatch = useDispatch()

  const onChangeQuantity = (event, id) => {
    dispatch(setQuantity(id, event.target.value))
  }

  const navigate = useNavigate();

  const NavigateToCart = (event) => {
    event.preventDefault();
    dispatch(NavCart())
    navigate('/cart')
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div> 
        {filteredProduct.length===0 ? 

        <div>선택된 상품이 없습니다</div> :

          filteredProduct.map((product)=> {
              return (
            <div key={product.id} className="md:flex items-center mt-14 py-8 border-t border-gray-200">
            <div className="w-1/4 md:w-60">
                <img src={product.image} className="w-full h-full object-center object-cover" alt="이미지 준비중" />
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-xl font-black leading-none text-gray-800">{product.name}</p>
                    
                    <input 
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                    type="number"
                    value={product.quantity}
                    min="0"
                    onChange={(event)=>onChangeQuantity(event, product.id)}
                    >
                    </input>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-base leading-3 text-gray-600 pt-2">무게: {product.weight}kg | 종류: {product.category} | 형태: {product.form}</p>
                    <p className="text-base leading-3 text-gray-600 py-4">공급처: {product.supplier}</p> 
                    <p className="text-base leading-3 text-gray-600 pb-4">효능: {product.effect}</p>
                    {product.note ? 
                    <p className="w-96 text-base leading-3 text-gray-600">비고: {product.note}</p>
                    : null}
                  </div>
                  {product.quantity >= 1 ?
                      <button 
                        className="bg-pink-500 text-white active:bg-pink-600 font-bold text-sm mt-9 mr-6 mb-6 px-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150" 
                        type="button"
                        onClick={NavigateToCart}
                      >
                      장바구니 이동
                    </button>
                  : null
                  }
                </div>

                <div className="flex items-center justify-between pt-5 pr-6">
                  <p className="text-base font-black leading-none text-gray-800">{numberWithCommas(product.price)} 원</p>
                </div>
            </div>
        </div>
              )
          })}
              
      </div>

      <style>
          {` /* width */
          #scroll::-webkit-scrollbar {
              width: 1px;
          }

          /* Track */
          #scroll::-webkit-scrollbar-track {
              background: #f1f1f1;
          }

          /* Handle */
          #scroll::-webkit-scrollbar-thumb {
              background: rgb(133, 132, 132);
          }
`}
      </style>
    </>
  );
}

export default ProductList;
