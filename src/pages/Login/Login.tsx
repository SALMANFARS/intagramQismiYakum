import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import logo from "../../assets/LOGO.png";
import appstore from "../../assets/appStore.png";
import googleplay from "../../assets/googlePlay.png";
import imageshome from "../../assets/images.png";
import { saveToken } from "../../utils/token";

const Login = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      userName: name,
      password: password,
    };

    try {
      const response = await fetch("http://65.108.148.136:8085/Account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.statusCode === 200) {
        saveToken(data.data);
        navigate("/home");
      }
    } catch (e) {}
  };
  return (
    <div>
      <div className="section1 ">
        <div className="conteiner py-[40px] flex flex-wrap justify-center gap-[100px] ">
          <div>
            <img src={imageshome} alt="" />
          </div>
          <div className="blocks ]">
            <div className="block1  border border-gray-500 py-[20px] rounded-2xl">
              <div className="img flex justify-center py-[20px] ">
                <img src={logo} alt="" />
              </div>
              <form onSubmit={onSubmit}>
                <div className="inp py-[2px] text-center">
                  <div className="inp1 py-[5]">
                    <input
                      type="text"
                      value={name}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName(event.target.value)
                      }
                      className="border border-gray-400 py-[5px] w-[70%] pl-[5px] outline-none"
                      placeholder="Телефон, имя пользователя или эл. адрес "
                    />
                  </div>
                  <div className="inp2 py-[5px]">
                    <input
                      value={password}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(event.target.value)
                      }
                      type="password"
                      className="border border-gray-400 py-[5px] w-[70%] pl-[5px] outline-none"
                    />
                  </div>
                </div>

                <div className="btn  py-[30px] text-center">
                  <button
                    type="submit"
                    className="text-white bg-blue-400 py-[5px] w-[70%] rounded-lg"
                  >
                    Войти
                  </button>
                </div>
              </form>

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

            <div className="block2 rounded-xl   m-auto w-[400px] border border-gray-500 flex flex-wrap my-[20px]">
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
    </div>
  );
};

export default Login;
