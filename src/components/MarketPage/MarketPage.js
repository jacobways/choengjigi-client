import React, { useState } from "react";
import ProductList from "./ProductList";
import Filter from "./Filter";

import { useSelector} from 'react-redux';

function MarketPage() {

  const ProductInfo = useSelector(state => state.productReducer.product);
  
  return (
    <main className="max-w-6xl mx-auto px-4">
      {ProductInfo.length===0 ? 
      <div className="justify-center items-center flex">판매중인 상품이 없습니다.</div>
      :
      <>
      <Filter />
      <ProductList />
      </>
      }

    </main>
  );
}

export default MarketPage;
