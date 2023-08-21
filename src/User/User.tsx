import React from "react";
import profil from "../../src/assets/photoProfil.jpg";
import { IoIosSettings } from "react-icons/io";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";

import { GrGrid } from "react-icons/gr";

const User = () => {
  return (
    <div>
      <div className="section sm:w-[100%] md:w-[60%] m-auto">
        <div className="conteiner ">
          <div className="block1   py-[50px] w-[80%] m-auto  ">
            <div className="accaunt grid grid-cols-2  items-center  m-auto">
              <div className="left m-auto">
                <img src={profil} alt="" className="w-[150px] rounded-full" />
              </div>

              <div className="right">
                <div className="btns flex gap-5 ml-[10px]">
                  <div className="text1">
                    <p className="font-bold text-[24px]">salman_kadyrov</p>
                  </div>
                  <div className="btn py-[7px]">
                    <button>Редактировать профиль</button>
                  </div>
                  <div className="btn py-[7px]">
                    <button>Паказать архив</button>
                  </div>
                  <div className="icn py-[10px]">
                    <IoIosSettings />
                  </div>
                </div>

                <div className="followers  flex gap-5 ml-[150px] font-bold  ">
                  <div className="posts  flex gap-1 pt-[20px] ">
                    <p>0</p>
                    <p>posts</p>
                  </div>

                  <div className="followers flex gap-1 pt-[20px]  ">
                    <p>1.M</p>
                    <p>followers</p>
                  </div>

                  <div className="posts  flex gap-1 pt-[20px]">
                    <p>0</p>
                    <p>following</p>
                  </div>
                </div>
                <div className="profilName ]">
                  <p className="font-bold py-[20px] ml-[15px]">
                    salman_kadyrov
                  </p>
                  <p className="ml-[15px] text-blue-900">Личный блог</p>
                </div>
              </div>
            </div>

            <div className="histori flex justify-start items-center w-[100%] m-auto gap-10 py-[50px]">
              <div className="first">
                <img
                  src={profil}
                  alt=""
                  className="sm:w-[80px] md:w-[100px] rounded-full"
                />
                <div className="txt items-center py-[10px]">
                  <p className="ml-[15px]">Dushanbe</p>
                </div>
              </div>
              <div className="first">
                <img
                  src={profil}
                  alt=""
                  className="sm:w-[80px] md:w-[100px] rounded-full"
                />
                <div className="txt items-center py-[10px]">
                  <p className="ml-[15px]">Dushanbe</p>
                </div>
              </div>

              <div className="first">
                <img
                  src={profil}
                  alt=""
                  className="sm:w-[80px] md:w-[100px] rounded-full"
                />
                <div className="txt items-center py-[10px]">
                  <p className="ml-[15px]">Dushanbe</p>
                </div>
              </div>
              <div className="first">
                <img
                  src={profil}
                  alt=""
                  className="sm:w-[80px] md:w-[100px] rounded-full"
                />
                <div className="txt items-center py-[10px]">
                  <p className="ml-[15px]">Dushanbe</p>
                </div>
              </div>

              <div className="first">
                <AiFillPlusCircle className="w-[120px] h-[120px]" />

                <div className="txt items-center py-[10px]">
                  <p className="text-center">Добавить</p>
                </div>
              </div>
            </div>

            <div className="iconkaho flex justify-around">
              <div className="ic1">
                <GrGrid className="text-[24px]" />
              </div>

              <div className="ic2">
                <BiMoviePlay className="text-[32px]" />
              </div>

              <div className="ic3">
                <BiUserPin className="text-[32px]" />
              </div>
            </div>

            <div className="images grid grid-cols-3 gap-2">
              <div className="img1">
                <img src={profil} alt="" className="w-[250px]" />
              </div>

              <div className="img1">
                <img src={profil} alt="" className="w-[250px]" />
              </div>

              <div className="img1">
                <img src={profil} alt="" className="w-[250px]" />
              </div>

              <div className="img1">
                <img src={profil} alt="" className="w-[250px]" />
              </div>

              <div className="img1">
                <img src={profil} alt="" className="w-[250px]" />
              </div>

              <div className="img1">
                <img src={profil} alt="" className="w-[250px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
