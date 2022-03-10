import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectAllFilter, clearAllFilter, checkFilter } from '../../actions';

const Filter = () => {

    const dispatch = useDispatch()

    const categoryList = []
    const FilterObj = useSelector(state => state.productReducer.filter);

    for (let key in FilterObj) {
      categoryList.push(key)
    }

    const SelectCheckBox = (category) => {
      dispatch(checkFilter(category))
    };

    const SelectAllCheck = () => {
        dispatch(selectAllFilter())
    }

    const ClearAllCheck = () => {
        dispatch(clearAllFilter())
    };

    

    return (
        <div className="2xl:container 2xl:mx-auto">
  

            <div id="filterSection" className="relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full ">
             
                

             
       
                    <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">

                    {categoryList.length === 0 ?
                      null 
                      :
                     categoryList.map((category) => {
                        return (
                          <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start" key={category}>
                            <input 
                            className="w-4 h-4 mr-2"       
                            type="checkbox"                                    
                            id={category}                                    
                            name={category}                                   
                            value={category}                                   
                            checked={FilterObj[category]}                                   
                            onChange={()=>SelectCheckBox(category)} 
                            />
                            <div className=" inline-block">
                                <div className=" flex space-x-6 justify-center items-center">
                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                                {category}
                                </label>
                                </div>
                            </div>
                          </div>
                        )
                     })

                      
                    }


                    </div>
                

             

                <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 md:px-40">
                    <button 
                      className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
                      onClick={SelectAllCheck}  
                    >
                        전체선택
                    </button>

                </div>
                <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 md:px-2">
                    <button 
                      className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
                      onClick={ClearAllCheck}  
                    >
                        전체해제
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default Filter;
