import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function NavbarComponent() {
    //
    const [navbarList , setNavbarList] = useState([
      {
        title : "Home",
        url : "/",
        active : true
      },
      {
        title : "Products",
        url : "/products",
        active : false
      }
      ,
      {
        title : "About Us",
        url : "/about-us",
        active : false
      },
      {
        title : "Service",
        url : "/service",
        active : false
      }
    ]);
    //get data from store
    const total = useSelector((state) => state.cart.total);
    //
    const handleClick = (list) => {
      setNavbarList((preValue) => {
        return preValue.map((item) => {
          if(item.title === list.title) {
            return{
              ...item, 
              active : true
            };
          }else{
            return{
              ...item,
              active : false
            }
          }
        });
      });
    };
  return (
    <>
      <Navbar  rounded className="max-w-screen-xl top-0 sticky mx-auto">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {
            navbarList.map((list,index) => {
              return (
                <Navbar.Link 
                key={index} 
                as={Link} 
                to={list.url}
                active = {list.active}
                onClick={() => handleClick(list)}
                >
                {list.title}
                </Navbar.Link>
              )
            })}
            <Navbar.Link as={Link} to={'/Cart'} >
              <div className="relative">
                <span className="absolute bg-red-600 rounded-full -top-4 -right-5 px-1">{total}</span>
                <FaCartArrowDown />
              </div>
            </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
