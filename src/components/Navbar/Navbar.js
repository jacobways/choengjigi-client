import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { loadDBProduct } from '../../actions';
import { NavHome, NavIntro, NavMarket, NavCart, NavCommunity } from '../../actions/nav';

function Navbar() {


  const navState = useSelector(state => state.navReducer.nav);

  const [menuToggle, setMenuToggle] = useState(false);

  const dispatch = useDispatch()

  const ClickCart = () => {
    dispatch(loadDBProduct())
    dispatch(NavCart())
  }

  

  let mobileCurrentPage;

  if (navState.home) mobileCurrentPage = "Home"
  if (navState.intro) mobileCurrentPage = "사업소개"
  if (navState.market) mobileCurrentPage = "장보기"
  if (navState.cart) mobileCurrentPage = "장바구니"
  if (navState.community) mobileCurrentPage = "생산지발자국"

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴 */}
          <div className="flex space-x-4">

            {/* home */}
            <div>
              <Link 
              to="/" 
              className="flex items-center py-5 px-2 text-gray-700"
              onClick={()=>dispatch(NavHome())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold">청지기마을</span>
              </Link>
            </div>
          </div>

          {/* 메뉴 */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={"py-5 px-3 text-gray-700 hover:text-gray-900 " + (navState.home ? "bg-gray-200" : null)}
              onClick={()=>{dispatch(NavHome())}}
            >
              Home
            </Link>
            <Link
              to="/intro"
              className={"py-5 px-3 text-gray-700 hover:text-gray-900 " + (navState.intro ? "bg-gray-200" : null)}
              onClick={()=>{dispatch(NavIntro())}}
            >
              사업소개
            </Link>
            <Link
              to="/market"
              className={"py-5 px-3 text-gray-700 hover:text-gray-900 " + (navState.market ? "bg-gray-200" : null)}
              onClick={()=>{dispatch(NavMarket())}}
            >
              장보기
            </Link>
            <Link
              to="/cart"
              className={"py-5 px-3 text-gray-700 hover:text-gray-900 " + (navState.cart ? "bg-gray-200" : null)}
              onClick={ClickCart}
            >
              장바구니
            </Link>
            <Link
              to="/community"
              className={"py-5 px-3 text-gray-700 hover:text-gray-900 " + (navState.community ? "bg-gray-200" : null)}
              onClick={()=>{dispatch(NavCommunity())}}
            >
              생산지발자국
            </Link>
          </div>

          {/* mobile menu */}

          {menuToggle ? 
          null : 
          <div className="md:hidden flex items-center text-gray-700">
          {mobileCurrentPage}
          </div>
          }


          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      {/* <div className={classNames("md:hidden", { hidden: !menuToggle })}> */}
       
      { menuToggle ? (
        <div className="md:hidden">
          <Link 
          to="/intro" 
          className={"block py-2 px-4 text-sm hover:bg-gray-200 " + (navState.intro ? "bg-gray-200" : null)}
          onClick={()=>{dispatch(NavIntro())}}
          >
            사업소개
          </Link>
          <Link 
          to="/market" 
          className={"block py-2 px-4 text-sm hover:bg-gray-200 " + (navState.market ? "bg-gray-200" : null)}
          onClick={()=>{dispatch(NavMarket())}}
          >
            장보기
          </Link>
          <Link 
          to="/cart" 
          className={"block py-2 px-4 text-sm hover:bg-gray-200 " + (navState.cart ? "bg-gray-200" : null)}
          onClick={()=>{dispatch(NavCart())}}
          >
            장바구니
          </Link>
          <Link 
          to="/community" 
          className={"block py-2 px-4 text-sm hover:bg-gray-200 " + (navState.community ? "bg-gray-200" : null)}
          onClick={()=>{dispatch(NavCommunity())}}
          >
            생산지발자국
          </Link>
        </div>
      ) : (
        <div className="md:hidden hidden">
          <Link 
          to="/intro" 
          className={"block py-2 px-4 text-sm hover:bg-gray-200 " + (navState.intro ? "bg-gray-200" : null)}
          onClick={()=>{dispatch(NavIntro())}}
          >
            사업소개
          </Link>
          <Link 
          to="/market" 
          className={"block py-2 px-4 text-sm hover:bg-gray-200 " + (navState.market ? "bg-gray-200" : null)}
          onClick={()=>{dispatch(NavMarket())}}
          >
            장보기
          </Link>
          <Link 
          to="/cart" 
          className={"block py-2 px-4 text-sm hover:bg-gray-200 " + (navState.cart ? "bg-gray-200" : null)}
          onClick={()=>{dispatch(NavCart())}}
          >
            장바구니
          </Link>
          <Link 
          to="/community" 
          className={"block py-2 px-4 text-sm hover:bg-gray-200 " + (navState.community ? "bg-gray-200" : null)}
          onClick={()=>{dispatch(NavCommunity())}}
          >
            생산지발자국
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;