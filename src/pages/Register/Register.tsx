import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import logo from "../../assets/LOGO.png";
import appstore from "../../assets/appStore.png";
import googleplay from "../../assets/googlePlay.png";
import imageshome from "../../assets/images.png";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEamil] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();
  const onSubmit = async () => {
    const user = {
      userName: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await fetch(
        "http://65.108.148.136:8085/Account/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (data.statusCode === 200) {
        navigate("/");
      }
    } catch (e) {}
  };
  return (
    <div className="section1">
      <div className="conteiner">
        <div className="block1 m-auto w-[400px] border border-gray-500 py-[20px]">
          <div className="img flex justify-center py-[20px] ">
            <img src={logo} alt="" />
          </div>
          <div className="txt px-[80px] py-[10px]">
            <p className="text-gray-700 ">
              Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
            </p>
          </div>

          <div className="facebook bg-blue-400 text-white flex items-center gap-3 justify-center px-[20px] py-[5px] mx-[60px] rounded-md my-[20px]">
            <div className="img w-[20px]">
              <img src={facebook} alt="" className="object-contain" />
            </div>
            <div className="text ">
              <p>Войти через facebook</p>
            </div>
          </div>

          <div className="or flex flex-wrap justify-center text-gray-600">
            <div className="p pr-[10px]">
              <p>________________</p>
            </div>
            <div className="or py-[10px]">
              <p> или </p>
            </div>
            <div className="p pl-[10px]">
              <p>_________________</p>
            </div>
          </div>

          <div className="inp py-[2px] text-center">
            <div className="inp1 py-[5]">
              <input
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setName(event.target.value)
                }
                type="text"
                className="border border-gray-400 py-[5px] w-[70%]  outline-none pl-[5px]"
                placeholder="user Name"
              />
            </div>
            <div className="inp2 py-[5px]">
              <input
                type="email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEamil(event.target.value)
                }
                className="border border-gray-400 py-[5px] w-[70%] outline-none pl-[5px]"
                placeholder="email"
              />
            </div>

            <div className="inp2 py-[5px]">
              <input
                type="password"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.target.value)
                }
                className="border border-gray-400 py-[5px] w-[70%] outline-none pl-[5px]"
                placeholder="Пароль"
              />
            </div>

            <div className="inp2 py-[5px]">
              <input
                type="password"
                value={confirmPassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(event.target.value)
                }
                className="border border-gray-400 py-[5px] w-[70%] outline-none pl-[5px]"
                placeholder="Подтвердите Пароль"
              />
            </div>
          </div>

          <div className="dogovor py-[10px]">
            <div className="dogovor1 ">
              <p className="text-xs px-[70px]">
                Люди, которые пользуются нашим сервисом, могли загрузить вашу
                контактную информацию в Instagram.{" "}
                <span className="text-blue-900">Подробнее</span>
              </p>
            </div>
            <div className="dogovor py-[10px]">
              <p className="text-xs px-[70px]">
                Регистрируясь, вы принимаете наши{" "}
                <span className="text-blue-900">
                  Условия, Политику конфиденциальности и Политику в отношении
                  файлов cookie.
                </span>
              </p>
            </div>
          </div>

          <div className="btn  py-[30px] text-center">
            <button
              className="text-white bg-blue-400 py-[5px] w-[70%] rounded-lg"
              onClick={onSubmit}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>

        <div className="block2   m-auto w-[400px] border border-gray-500 flex flex-wrap my-[20px]">
          <div className="porag flex flex-wrap justify-center m-auto py-[20px]">
            <div className="text1">
              <p>Есть акаунт?</p>
            </div>
            <div className="text2">
              <Link to="/register">
                <Link to="/">
                  <p className="text-blue-500 ml-[5px]">Вход</p>
                </Link>
              </Link>
            </div>
          </div>
        </div>

        <div className="block3 text-center">
          <div className="porag1">
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
  );
};

export default Register;
