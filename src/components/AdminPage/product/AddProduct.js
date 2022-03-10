import React, { useState, useEffect } from "react";
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { loadDBProduct } from '../../../actions';

function AddProduct() {

  const [Name, setName] = useState(null);
  const [Price, setPrice] = useState(null);
  const [Weight, setWeight] = useState(null);
  const [Category, setCategory] = useState(null);
  const [Form, setForm] = useState(null);
  const [Supplier, setSupplier] = useState(null);
  const [Effect, setEffect] = useState(null);
  const [Note, setNote] = useState(null);

  const NameHandler = (event) => {
    setName(event.target.value);
  }

  const PriceHandler = (event) => {
    setPrice(event.target.value);
  }

  const WeightHandler = (event) => {
    setWeight(event.target.value);
  }

  const CategoryHandler = (event) => {
    setCategory(event.target.value);
  }

  const FormHandler = (event) => {
    setForm(event.target.value);
  }

  const SupplierHandler = (event) => {
    setSupplier(event.target.value);
  }

  const EffectHandler = (event) => {
    setEffect(event.target.value);
  }

  const NoteHandler = (event) => {
    setNote(event.target.value);
  }

  const [Alert, setAlert] = useState(false)

  const dispatch = useDispatch()

  const token = useSelector(state => state.userReducer.token);
  

  const AddInfo = (event) => {
    event.preventDefault();
    if (!Name || !Price || !Weight || !Category || !Form || !Supplier || !Effect) {
      setAlert(true);
    } else {
      setAlert(false);

      axios.post(`${process.env.REACT_APP_SERVER_API}/product`, {
        name: Name,
        price: Price,
        weight: Weight,
        category: Category,
        form: Form,
        supplier: Supplier,
        effect: Effect,
        note: Note
      })
      .then(data => dispatch(loadDBProduct()))
      .catch(console.log)
    }
  }

  
  return (
    <section>
   
      <h3 className="mt-7 text-xl font-bold">상품 추가하기</h3>
      <form>
        <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="name" 
          type="text" 
          placeholder="품명" 
          onChange={NameHandler}
        />
        <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="price" 
          type="text" 
          placeholder="가격"
          onChange={PriceHandler}
        />
         <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="weight" 
          type="text" 
          placeholder="무게"
          onChange={WeightHandler}
        />
        <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="category" 
          type="text" 
          placeholder="종류"
          onChange={CategoryHandler}
        />
        <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="form" 
          type="text" 
          placeholder="형태"
          onChange={FormHandler}
        />
        <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="supplier" 
          type="text" 
          placeholder="공급처"
          onChange={SupplierHandler}
        />
        <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="effect" 
          type="text" 
          placeholder="효능"
          onChange={EffectHandler}
        />
        <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="note"
          type="text"
          placeholder="비고(선택사항)"
          onChange={NoteHandler}
        />
        <input 
          className="shadow appearance-none border rounded text-gray-700  focus:outline-none focus:shadow-outline"
          id="image"
          type="file"
          placeholder="이미지 파일"
          accept="image/*"
          // onChange={NoteHandler}
        />
        <br></br>
        <button 
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
          type="button"
          onClick={AddInfo}
        >
        상품 추가
        </button>
        {Alert ? <div>필수 항목의 모든 항목에 값을 입력해야합니다</div> : null}
      </form>
      

    </section>
  );
}

export default AddProduct;