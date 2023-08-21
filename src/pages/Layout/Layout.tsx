import React from 'react'
import "../../App.css";
import { HiHome } from "react-icons/hi"
import { BsSearch } from "react-icons/bs"
import { IoCompassOutline } from "react-icons/io5"
import { BiMoviePlay } from "react-icons/bi"
import { RiMessengerLine } from "react-icons/ri"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlinePlusSquare } from "react-icons/ai"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "../../assets/logo.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


import profil from "../../assets/photoProfil.jpg"
import { Link, Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
      <div className="section1">
        <div className="conteiner flex">
          <div className="navbar fixed sm:hidden md:block border-r-2 border-gray-500 bg-white sm:w-[80px] md:w-[100px] lg:w-[250px] pl-5">
            <div className="img">
              <img src={logo} alt="" className="md:hidden lg:block" />
              <AiOutlineInstagram className="text-[40px] md:block lg:hidden" />
            </div>
            <div className="home flex items-center md:m-auto py-[20px] ">
              <HiHome className="text-[40px]" />
              <Link to={"/home"}>
                <p className="sm:hidden lg:block xl:flex font-bold ml-[20px]">
                  Home
                </p>
              </Link>
            </div>

            <div className="search flex items-center py-[20px] ml-[4px]">
              <BsSearch className="text-[30px] " />
              <p className="sm:hidden lg:block xl:flex ml-[25px]">Search</p>
            </div>

            <div className="compas flex items-center py-[20px] ml-[4px]">
              <IoCompassOutline className="text-[30px]" />
              <Link to={"/home/explore"}>
                <p className="sm:hidden lg:block xl:flex ml-[25px]">Explore</p>
              </Link>
            </div>

            <div className="compas flex items-center py-[20px] ml-[4px]">
              <BiMoviePlay className="text-[30px]" />
              <p className="sm:hidden lg:block xl:flex ml-[25px]">Reels</p>
            </div>
            <div className="compas flex items-center py-[20px] ml-[4px]">
              <RiMessengerLine className="text-[30px]" />
              <Link to={"/home/message"}>
                <p className="sm:hidden lg:block xl:flex font-bold ml-[20px]">
                  Message
                </p>
              </Link>
            </div>

            <div className="compas flex items-center py-[20px] ml-[4px]">
              <AiOutlineHeart className="text-[30px]" />
              <p className="sm:hidden lg:block xl:flex ml-[25px]">
                Notifications
              </p>
            </div>

            <div className="compas flex items-center py-[20px] ml-[4px]">
              <AiOutlinePlusSquare className="text-[30px]" />
              <p className="sm:hidden lg:block xl:flex ml-[25px]">Creat</p>
            </div>

            <div className="compas flex items-center py-[20px] ml-[0px]">
              <img src={profil} alt="" className="rounded-full w-[35px]" />
              <Link to={"/home/User"}>
                <p className="sm:hidden lg:block xl:flex ml-[25px]">Profil</p>{" "}
              </Link>
            </div>

            <div className="compas flex items-center py-[20px] ml-[0px]">
              <AiOutlineMenu className="text-[30px]" />
              <p className="sm:hidden lg:block xl:flex ml-[25px]">More</p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <footer className="">
        <div className="sm:flex justify-between md:hidden bottom-0 w-full fixed  border-t-2 border-gray-500  px-5 bg-white">
          <div className="img sm:hidden">
            <img src={logo} alt="" className="sm:hidden md:block" />
            <AiOutlineInstagram className="text-[40px] md:hidden" />
          </div>
          <div className="home flex items-center py-[20px] ">
            <HiHome className="text-[40px]" />
            <p className="sm:hidden xl:flex font-bold ml-[20px]">Home</p>
          </div>

          {/* <div className="search flex items-center py-[20px] ml-[4px]">
            <BsSearch className="text-[30px] " />
            <p className="sm:hidden xl:flex ml-[25px]">Search</p>
          </div> */}

          <div className="compas flex items-center py-[20px] ml-[4px]">
            <IoCompassOutline className="text-[30px]" />
            <p className="sm:hidden xl:flex ml-[25px]">Explore</p>
          </div>

          <div className="compas flex items-center py-[20px] ml-[4px]">
            <BiMoviePlay className="text-[30px]" />
            <p className="sm:hidden xl:flex ml-[25px]">Reels</p>
          </div>
          <div className="compas flex items-center py-[20px] ml-[4px]">
            <RiMessengerLine className="text-[30px]" />
            <p className="sm:hidden xl:flex ml-[25px]">Messages</p>
          </div>

          {/* <div className="compas flex items-center py-[20px] ml-[4px]">
            <AiOutlineHeart className="text-[30px]" />
            <p className="sm:hidden xl:flex ml-[25px]">Notifications</p>
          </div> */}

          <div className="compas flex items-center py-[20px] ml-[4px]">
            <AiOutlinePlusSquare className="text-[30px]" />
            <p className="sm:hidden xl:flex ml-[25px]">Creat</p>
          </div>

          <div className="compas flex items-center py-[20px] ml-[0px]">
            <img src={profil} alt="" className="rounded-full w-[35px]" />
            <Link to="/home/User">
              <p className="sm:hidden xl:flex ml-[25px]  cursor-pointer">
                Profil
              </p>
            </Link>
          </div>

          {/* <div className="compas flex items-center py-[20px] ml-[0px]">
            <AiOutlineMenu className="text-[30px]" />
            <p className="sm:hidden xl:flex ml-[25px]">More</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default Layout