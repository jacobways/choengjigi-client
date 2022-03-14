import React, { useState, useEffect } from "react";
import ReadProduct from "./product/ReadProduct";
import CreateModal from "./product/CreateModal";
import Login from "./Auth/Login"
import { useSelector } from "react-redux";

import ReadOrder from "./order/ReadOrder";

function AdminPage() {

  const token = useSelector(state => state.userReducer.token);
  
  return (
    <main className="max-w-6xl mx-auto px-4 min-h-mainBasic h-auto">
      {token ? 
      <>
        <h3 className="text-xl font-bold mt-4 mb-1">상품 리스트</h3>
        <ReadProduct />
        <CreateModal />
        <h3 className="text-xl font-bold mt-7 mb-1">주문 리스트</h3>
        <ReadOrder />
      </>
      :
      <Login />
      }
    </main>
  );
}

export default AdminPage;