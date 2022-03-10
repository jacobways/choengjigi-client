import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux'
import { loadDBProduct, deleteToken } from '../../../actions';

export default function CreateModal() {

  const [IsOpened, setIsOpened] = useState(false);

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [weight, setWeight] = useState(null);
  const [category, setCategory] = useState(null);
  const [form, setForm] = useState("액체");
  const [supplier, setSupplier] = useState(null);
  const [effect, setEffect] = useState(null);
  const [note, setNote] = useState(null);
  const [image, setImage] = useState(null);

  const NameHandler = (event) => {
    setName(event.target.value)
  }

  const PriceHandler = (event) => {
    setPrice(event.target.value)
  }

  const WeightHandler = (event) => {
    setWeight(event.target.value)
  }

  const CategoryHandler = (event) => {
    setCategory(event.target.value)
  }

  const FormHandler = (event) => {
    setForm(event.target.value)
  }

  const SupplierHandler = (event) => {
    setSupplier(event.target.value)
  }

  const EffectHandler = (event) => {
    setEffect(event.target.value)
  }

  const NoteHandler = (event) => {
    setNote(event.target.value)
  }

  const ImageHandler = (event) => {
    setImage(event.target.files[0])
  }

  async function sendImage ({image, id}) {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("id", id);
    console.log('formData', formData)

    const result = await axios.post(`${process.env.REACT_APP_SERVER_API}/image`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
    return result.data;
  }

  const [Alert, setAlert] = useState(false)

  const dispatch = useDispatch()

  const InitializeState = () => {
    setName(null)
    setPrice(null)
    setWeight(null)
    setCategory(null)
    setForm("액체")
    setSupplier(null)
    setEffect(null)
    setNote(null)
    setImage(null)
  }

  const token = useSelector(state => state.userReducer.token);

  const SubmitCreate = (event) => {

    event.preventDefault()
    if (!name || !price || !weight || !category || !form || !supplier || !effect) {
      setAlert(true);
    } else {
      setAlert(false);

      axios.post(`${process.env.REACT_APP_SERVER_API}/product`, {
        name,
        price,
        weight,
        category,
        form,
        supplier,
        effect,
        note,
        token: token
      })
      .then(res => {
        if (!image) {
          return res;
        } else {
          sendImage({image, id:res.data.data.id})
        }
      })
      .then(res => {
        dispatch(loadDBProduct())
        InitializeState()
        setIsOpened(false)
      })
      .catch(err=>{
        console.log(err);
        if (err.message = "Request failed with status code 401") {
          dispatch(deleteToken())
        } else {
          alert('서버에 일시적인 오류가 있습니다.')
        }
      })
    }
  }

  const CancelModal = () => {
    setIsOpened(false)
    InitializeState()
  }


  return (
    <>
        <button 
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm mt-1 px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
          type="button"
          onClick={() => setIsOpened(true)} 
        >
        상품 추가
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
                  <h3 className="text-2xl font-semibold">
                    상품 추가하기
                  </h3>

                </div>
    
            <form>
            <div className="bg-white dark:bg-gray-800">

      
                <div className="container mx-auto bg-white dark:bg-gray-800 mt-1 rounded px-4">
      
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto text-left">
                            <div className="md:w-3/4 flex flex-col mb-3">
                                <label htmlFor="Name" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    상품명
                                </label>
                                <input 
                                  type="text" 
                                  id="Name" 
                                  name="Name" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  placeholder="예시 : 고추장"
                                  onChange={NameHandler}
                                  // value={name}
                                />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-3">
                                <label htmlFor="price" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    가격(원)
                                </label>
                                <input 
                                  type="text" 
                                  id="price" 
                                  name="price" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  placeholder="예시 : 5000"
                                  onChange={PriceHandler}
                                  // value={price}
                                />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-3">
                                <label htmlFor="weight" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    무게(kg)
                                </label>
                                <input 
                                  type="text" 
                                  id="weight" 
                                  name="weight" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  placeholder="예시 : 5 또는 5.0"
                                  onChange={WeightHandler}
                                  // value={weight}
                                />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-3">
                                <label htmlFor="category" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  카테고리
                                </label>
                                <input 
                                  type="text" 
                                  id="category" 
                                  name="category" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  placeholder="예시 : 양념"
                                  onChange={CategoryHandler}
                                  // value={category}
                                />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-3">
                                <label htmlFor="form" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  형태
                                </label>
                                <select
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  onChange={FormHandler}
                                  required
                                  // value="액체"
                                >
                                  <option value="액체">액체</option>
                                  <option value="고체">고체</option>
                                  <option value="기체">기체</option>
                                </select>
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-3">
                                <label htmlFor="supplier" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  공급처
                                </label>
                                <input 
                                  type="text" 
                                  id="supplier" 
                                  name="supplier" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  placeholder="예시 : 조합원"
                                  onChange={SupplierHandler}
                                  // value={supplier}
                                />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-3">
                                <label htmlFor="effect" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  효능
                                </label>
                                <input 
                                  type="text" 
                                  id="effect" 
                                  name="effect" 
                                  required 
                                  className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                  placeholder="예시 : 감기예방"
                                  onChange={EffectHandler}
                                  // value={effect}
                                />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-3">
                              <label htmlFor="note" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                비고
                              </label>
                              <input 
                                type="text" 
                                id="note" 
                                name="note" 
                                required 
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                placeholder="예시 : 품질인증"
                                onChange={NoteHandler}
                                // value={note}
                              />
                            </div>
                            <div className="md:w-3/4 flex flex-col mb-3">
                              <label htmlFor="image" className="pb-0.5 text-sm font-bold text-gray-800 dark:text-gray-100">
                                비고
                              </label>
                              <input 
                                type="file" 
                                id="image" 
                                name="image" 
                                required 
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-1 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" 
                                accept="image/*"
                                onChange={ImageHandler}
                              />
                            </div>
                            {Alert ? <div>필수 항목의 모든 항목에 값을 입력해야합니다</div> : null}
                          </div>
                        </div>
                      </div>


                    </div>
                  </form>






                {/*footer*/}
                <div className="flex items-center justify-start p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={CancelModal}
                  >
                    취소하기
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={SubmitCreate}
                  >
                    추가하기
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
