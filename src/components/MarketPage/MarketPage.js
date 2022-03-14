import React, { useState } from "react";
import ProductList from "./ProductList";
import Filter from "./Filter";

import { useSelector} from 'react-redux';

function MarketPage() {

  const ProductInfo = useSelector(state => state.productReducer.product);
  
  return (
    <>
      {ProductInfo.length===0 ? 
      <main className="max-w-6xl mx-auto px-4 min-h-mainBasic h-auto flex justify-center items-center">
        <div className="text-2xl">판매중인 상품이 없습니다.</div>
      </main>
      :
      <main className="max-w-6xl mx-auto px-4 min-h-mainBasic h-auto">
        <Filter />
        <ProductList />
      </main>
      }
    </>
  );
}

export default MarketPage;
