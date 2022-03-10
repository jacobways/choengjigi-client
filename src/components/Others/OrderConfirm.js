import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OrderConfirm() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>navigate('/'), 3000)  
  }, [])
  
  return (
    <main className="max-w-6xl mx-auto px-4">
      <div>주문이 완료되었습니다.</div>
      <div>3초 후 홈으로 이동합니다.</div>
    </main>
  );
}

export default OrderConfirm;
