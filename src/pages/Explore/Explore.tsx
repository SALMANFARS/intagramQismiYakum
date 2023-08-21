import React from 'react'
import profil from "../../assets/photoProfil.jpg"

const Explore = () => {
  return (
    <div className="section1 max-w-[600px] mx-auto md:max-w-[1000px] ">
    {/* <div className="section1 sm:w-[100%] md:w-[60%]  "> */}
      <div className="conteiner">
        <div className="block1  grid grid-cols-3 gap-5 pt-[20px] m-auto sm:pl-[0] md:pl-[200px] ">
          <div className="img  ">
            <img src={profil} alt="" className="" />
          </div>
          <div className="img  ">
            <img src={profil} alt="" className="" />
          </div>
          <div className="img  ">
            <img src={profil} alt="" className="" />
          </div>
          <div className="img ">
            <img src={profil} alt="" className=" " />
          </div>
          <div className="img ">
            <img src={profil} alt="" className="" />
          </div>
          <div className="img ">
            <img src={profil} alt="" className="" />
          </div>
          <div className="img ">
            <img src={profil} alt="" className="" />
          </div>
          <div className="img ">
            <img src={profil} alt="" className="" />
          </div>
          <div className="img ">
            <img src={profil} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore