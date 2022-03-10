import React, { useState, useEffect } from "react";

export default function DateModal( { date, OrderNumber, customer }) {

  const [IsOpened, setIsOpened] = useState(false);

  function MonthDayFormat(date) {
    // console.log(typeof(date))
    // let month = date.getMonth() + 1;
    // let day = date.getDate();

    // month = month >= 10 ? month : '0' + month;
    // day = day >= 10 ? day : '0' + day;

    // return month + '-' + day;
    return date.slice(5,10)
  }

  function dateFormat(date) {
    // let month = date.getMonth() + 1;
    // let day = date.getDate();
    // let hour = date.getHours();
    // let minute = date.getMinutes();
    // let second = date.getSeconds();

    // month = month >= 10 ? month : '0' + month;
    // day = day >= 10 ? day : '0' + day;
    // hour = hour >= 10 ? hour : '0' + hour;
    // minute = minute >= 10 ? minute : '0' + minute;
    // second = second >= 10 ? second : '0' + second;

    // return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    return date.slice(0,10) + '  ' + date.slice(11,19)
  }


  return (
    <>
     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
       onClick={() => setIsOpened(true)}
      >
      {MonthDayFormat(date)}
      </td>

      {IsOpened ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-full md:w-3/5">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    {OrderNumber}({customer}) 주문일시
                  </h3>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto text-center">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {dateFormat(date)}
                  </p>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-center p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsOpened(false)}
                  >
                    닫기
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
