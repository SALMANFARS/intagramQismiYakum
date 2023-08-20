import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png"
import logo from "../../assets/LOGO.png"
import appstore from "../../assets/appStore.png"
import googleplay from "../../assets/googlePlay.png"

const Login = () => {
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1 m-auto w-[400px] border border-gray-500 py-[20px]">
            <div className="img flex justify-center py-[20px] ">
              <img src={logo} alt="" />
            </div>

            <div className="inp py-[2px] text-center">
              <div className="inp1 py-[5]">
                <input
                  type="text"
                  className="border border-gray-400 py-[5px] w-[70%] pl-[5px] outline-none"
                  placeholder="Телефон, имя пользователя или эл. адрес "
                />
              </div>
              <div className="inp2 py-[5px]">
                <input
                  type="password"
                  className="border border-gray-400 py-[5px] w-[70%] pl-[5px] outline-none"
                  placeholder="Телефон"
                />
              </div>
            </div>

            <div className="btn  py-[30px] text-center">
              <Link to="/Home">
                <button className="text-white bg-blue-400 py-[5px] w-[70%] rounded-lg">
                  Войти
                </button>
              </Link>
            </div>

            <div className="or flex flex-wrap justify-center">
              <div className="p pr-[10px]">
                <p>____________</p>
              </div>
              <div className="or py-[5px]">
                <p>ИЛИ</p>
              </div>
              <div className="p pl-[10px]">
                <p>_____________</p>
              </div>
            </div>

            <div className="facebook flex items-center gap-3 justify-center px-[50px] py-[20px]">
              <div className="img w-[20px]">
                <img src={facebook} alt="" className="object-contain" />
              </div>
              <div className="text text-blue-900 font-bold">
                <p>Войти через facebook</p>
              </div>
            </div>

            <div className="text2 py-[20px] text-center">
              <p className="text-xs text-gray-500">Забыли пароль</p>
            </div>
          </div>

          <div className="block2   m-auto w-[400px] border border-gray-500 flex flex-wrap my-[20px]">
            <div className="porag flex flex-wrap justify-center m-auto py-[10px]">
              <div className="text1">
                <p>У вас еще нет акаунта?</p>
              </div>
              <div className="text2">
                <Link to="/register">
                  <p className="text-blue-500 font-bold ml-[5px]">
                    Зарегистрироваться
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="block3">
            <div className="porag1 text-center">
              <p>Установите приложения</p>
            </div>

            <div className="store  flex flex-wrap justify-center gap-2 py-[10px]">
              <div className="img1">
                <img src={appstore} alt="" />
              </div>
              <div className="img1">
                <img src={googleplay} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
