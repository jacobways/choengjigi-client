import React, { useState } from "react";
import Summary from "./Summary";

import { useSelector } from 'react-redux';

function CartPage() {

  const ProductList = useSelector(state => state.productReducer.product);
  const QuantityList = useSelector(state => state.productReducer.quantity);

  const CartList = ProductList
  .map((item, idx) => {
    return {...item, quantity: QuantityList[idx].quantity}
  })
  .filter(el => el.quantity>0)

  return (
    <>
    {CartList.length===0 ? 
    <main className="max-w-6xl mx-auto px-4 min-h-mainBasic h-auto flex justify-center items-center">
      <div className="text-2xl">장바구니에 담긴 상품이 없습니다.</div>
    </main>
    :
    <main className="max-w-6xl mx-auto px-4 min-h-mainBasic h-auto">
      <Summary CartList={CartList} />
    </main>
    }
    </>
  );
}

export default CartPage;