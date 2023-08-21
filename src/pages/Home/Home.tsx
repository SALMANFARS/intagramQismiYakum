import React from 'react'
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import logo from "../../assets/logo.png";
import profil from "../../assets/photoProfil.jpg";
import { Pagination } from "swiper/modules";
import { AiFillCheckCircle } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa6"
import { BsSend } from "react-icons/bs"
import {BsBookmark} from "react-icons/bs"
import { FiMoreHorizontal } from "react-icons/fi"
import {VscSave} from "react-icons/vsc"
const Home = () => {
  return (
    <div>
      <div className="section1 lg:ml-[350px] sm:ml-0 mt-[50px]">
        <div className="conteiner flex">
          <div className="block1 mx-[0] lg:w-[65%] sm:w-full ">
            <div className="swipe">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  780: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1020: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img src={profil} alt="" />
                    </div>
                    <div className="text py-[5px]">
                      <h1 className="text-xs">salman_kadyrov</h1>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="main   flex justify-around items-center pt-[50px] pb-[20px] ">
              <div className="left">
                <div className="profilname flex items-center gap-2">
                  <div className="img">
                    <img
                      src={profil}
                      alt=""
                      className="w-[30px] rounded-full"
                    />
                  </div>
                  <div className="text1 flex">
                    <div className="texts">
                      <h1 className="font-bold">salman_kadyrov</h1>
                      <p>Original audio</p>
                    </div>
                    <div className="icons ml-[10px] mt-[5px]">
                      <AiFillCheckCircle />
                    </div>
                    <div className="ml-[10px] text-gray-500 text-xs py-[5px]">
                      <p> 5 m</p>
                    </div>
                  </div>
                  <div className="icon"></div>
                </div>
              </div>
              <div className="right">
                <FiMoreHorizontal />
              </div>
            </div>
            <div className="photo"></div>
            <div className="imgProfil m-auto w-[500px]">
              <img src={profil} alt="" />

              <div className="underPhoto flex justify-between py-[20px]">
                <div className="likeComments flex gap-5 ">
                  <div className="heart">
                    <AiOutlineHeart />
                  </div>
                  <div className="comments">
                    <FaRegComment />
                  </div>
                  <div className="send">
                    <BsSend />
                  </div>
                </div>
                <div className="saves">
                  <div className="save">
                    <BsBookmark />
                  </div>
                </div>
              </div>
              <div className="commntsAnd sm:w-full p-2">
                <div className="likes">
                  <p className="text-xs font-bold ">9.999 likes</p>
                </div>
                <div className="acaunt ">
                  <p className="md:w-[500px] sm:w-full ">
                    <b>salman_kadyrov </b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor
                  </p>
                </div>
                <p className="text-gray-500">See 99 comments</p>
                <p className="text-gray-500">9 HOURS AGO</p>
              </div>
            </div>
          </div>

          <div className=" block2 sm:hidden lg:block w-[35%]  mx-[40px]    ">
            <div className="list1 flex justify-between">
              <div className="blockCha flex  py-[5px] ">
                <div className="img w-[50px] ">
                  <img src={profil} alt="" className="rounded-full" />
                </div>
                <div className="text1 pt-[20px]">
                  <h1 className="text-xs font-bold ml-[20px] ">
                    salman_kadyrov
                  </h1>
                </div>
              </div>

              <div className="switch items-center pt-[20px] py-[5px]">
                <p className="text-blue-500 font-bold">Switch</p>
              </div>
            </div>

            <div className="list2 py-[20px]">
              <div className="texts flex justify-between">
                <div className="text1 text-gray-400 font-bold ">
                  <p>Saggested for you</p>
                </div>
                <div className="text2">
                  <p className="">See all</p>
                </div>
              </div>
            </div>

            <div className="list1 flex justify-between py-[10px]">
              <div className="blockCha flex  py-[5px] ">
                <div className="img w-[50px] ">
                  <img src={profil} alt="" className="rounded-full" />
                </div>
                <div className="text1 pt-[20px]">
                  <h1 className="text-xs font-bold ml-[20px] ">
                    salman_kadyrov
                  </h1>
                </div>
              </div>

              <div className="switch items-center pt-[20px] py-[5px]">
                <p className="text-blue-500 font-bold">Switch</p>
              </div>
            </div>

            <div className="list1 flex justify-between py-[10px]">
              <div className="blockCha flex  py-[5px] ">
                <div className="img w-[50px] ">
                  <img src={profil} alt="" className="rounded-full" />
                </div>
                <div className="text1 pt-[20px]">
                  <h1 className="text-xs font-bold ml-[20px] ">
                    salman_kadyrov
                  </h1>
                </div>
              </div>

              <div className="switch items-center pt-[20px] py-[5px]">
                <p className="text-blue-500 font-bold">Switch</p>
              </div>
            </div>

            <div className="porag text-gray-500  text-sm">
              <p className="py-[10px]">
                Information · Help · Prisoner · API · Job · Privacity ·
                Conditions · Locations · Trending accounts · Hashtags · Language
              </p>

              <p className="py-[10px]">© 2023 INSTAGRAM FROM META</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home