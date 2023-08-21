import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCall } from "react-icons/md"
import { BsCameraVideo } from "react-icons/bs"
import { HiOutlineInformationCircle } from "react-icons/hi"
import {BiSmile} from "react-icons/bi"
import profil from "../../assets/photoProfil.jpg"

const Message = () => {
  return (
    <div className="section1 sm:flex sm:w-[100%] md:w-[80%] md:ml-[10%] lg:ml-[20%] md:mr-[20%] sm:justify-between h-[100vh]">
      <div className="left md:w-[30%] pd:ml-0 sm:w-full h-[100vh]">
        <div className="block1 flex items-center justify-around">
          <div className="message sm:flex flex-wrap items-center  gap-3 lg:pt-[100px] lg:pl-[20px]">
            <div className="textacaunt">
              <p className="font-bold text-xl">salman_kadyrov</p>
            </div>

            <div className="icn ">
              <BiDownArrowAlt />
            </div>
          </div>

          <div className="edit lg:pt-[100px] lg:pl-[20px]">
            <div className="editicn">
              <FiEdit />
            </div>
          </div>
        </div>

        <div className="block2">
          <div className="txts flex justify-around items-center py-[20px] border-b-2 border-black">
            <div className="xtext1">
              <p>Primary</p>
            </div>
            <div className="xtext1">
              <p>General</p>
            </div>
            <div className="xtext1">
              <p>Requests</p>
            </div>
          </div>
        </div>

        <div className="frends">
          <div className="block3 flex items-center">
            <div className="left">
              <div className="img">
                <img
                  src={profil}
                  alt=""
                  className="w-[65px] rounded-full ml-[10px] my-[10px]"
                />
              </div>
            </div>
            <div className="right block">
              <div className="texts font-bold ml-[10px]">
                <p>salman_kadyrov</p>
              </div>
              <div className="texts text-gray-400 ml-[10px]">
                <p>в сети 12 часов</p>
              </div>
            </div>
          </div>
          <div className="block3 flex items-center">
            <div className="left">
              <div className="img">
                <img
                  src={profil}
                  alt=""
                  className="w-[65px] rounded-full ml-[10px] my-[10px]"
                />
              </div>
            </div>
            <div className="right">
              <div className="texts font-bold ml-[10px]">
                <p>salman_kadyrov</p>
              </div>
              <div className="texts text-gray-400 ml-[10px]">
                <p>в сети 12 часов</p>
              </div>
            </div>
          </div>
          <div className="block3 flex items-center">
            <div className="left">
              <div className="img">
                <img
                  src={profil}
                  alt=""
                  className="w-[65px] rounded-full ml-[10px] my-[10px]"
                />
              </div>
            </div>
            <div className="right">
              <div className="texts font-bold ml-[10px]">
                <p>salman_kadyrov</p>
              </div>
              <div className="texts text-gray-400 ml-[10px]">
                <p>в сети 12 часов</p>
              </div>
            </div>
          </div>
          <div className="block3 flex items-center">
            <div className="left">
              <div className="img">
                <img
                  src={profil}
                  alt=""
                  className="w-[65px] rounded-full ml-[10px] my-[10px]"
                />
              </div>
            </div>
            <div className="right">
              <div className="texts font-bold ml-[10px]">
                <p>salman_kadyrov</p>
              </div>
              <div className="texts text-gray-400 ml-[10px]">
                <p>в сети 12 часов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right md:w-[70%] sm:w-full h-[100vh] ">
        <div className="block1 flex items-center justify-between  border-l border-black border-b   lg:pt-[70px] pb-[20px] lg:pl-[20px] ]">
          <div className="textImg flex items-center">
            <div className="img">
              <img src={profil} alt="" className="w-[50px]  rounded-full" />
            </div>
            <div className="texts ml-[10px]">
              <p className="font-bold text-xl">salman_kadyrov</p>
            </div>
          </div>

          <div className="icn flex mr-[20px] gap-5">
            <div className="inCall">
              <MdOutlineCall />
            </div>

            <div className="inCall">
              <BsCameraVideo />
            </div>

            <div className="inCall">
              <HiOutlineInformationCircle />
            </div>
          </div>
        </div>
        <div className="block2 border-l border-black">
          <div className="img flex justify-center mt-[10px]">
            <img
              src={profil}
              alt=""
              className="w-[70px] rounded-full mt-[50px] "
            />
          </div>

          <div className="txt text-center py-[10px] ">
            <p className="font-bold text-xl">salman_kadyrov</p>
            <p className="text-md text-gray-500">Online now</p>
          </div>
          <div className="btn text-center ">
            <button className="py-[15px] px-[25px] bg-gray-400 rounded-3xl">
              Wiev profile
            </button>
          </div>
          <div className="message text-right py-[10px] mr-[20px]">
            <button className="py-[10px] px-[10px] bg-slate-200 rounded-3xl">
              Hello
            </button>
          </div>

          <div className="inpIcon flex items-center  text-[24px] px-[10px]  ">
            <div className="icons pr-[5px]">
              <BiSmile />
            </div>
            <div className="inp  w-full">
              <input
                type="text"
                className="border-2 w-full  border-black  rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
