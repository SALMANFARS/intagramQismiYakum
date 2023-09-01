import React from "react";
import profil from "../../assets/photoProfil.jpg";

const EditProfil = () => {
  return (
    <div className="section1 text-[black] first-letter:sm:ml-[20px] md:ml-[120px] lg:ml-[280px] ">
      <div className="text-[24px]  mt-[30px]">Настройка</div>
      <div className="block1 border flex flex-wrap border-gray-500 ">
        <div className="left grid grid-cols-1 justify-items-center w-[20%] py-[50px]  border-r border-gray-500">
          <div className="metablock">
            <p className="">Meta</p>
            <p>Центр аккаунтов</p>
            <p className="text-xs">
              Управляйте кросс-сервисными <br /> функциями и настройками <br />{" "}
              аккаунтов на платформах Meta.
            </p>
            <a href="">
              <p>Личная Инфармация</p>
            </a>
            <a href="">
              <p>Пароль и безопасность</p>
            </a>
            <a href="">
              {" "}
              <p>Рекламное предпочтение</p>
            </a>

            <a href="">
              <p>Рекламное предпочтение</p>
            </a>
          </div>
          <div className="redactirovka border-t border-gray-500">
            <p className="font-bold">Редактировать профиль</p>
          </div>
        </div>
        <div className="w-[80%]">
          <h1 className=" py-[20px] ml-[30px] text-[24px]">
            Редактировать профиль
          </h1>
          <div className="right flex flex-col items-center gap-10">
            <div className="flex gap-[20px]">
              <div className="img">
                <img src={profil} alt="" className="w-[50px] rounded-full " />
                <p className="pt-[10px]">Сайт</p>

                <p className="pt-[100px]">О себе</p>
                <p className="pt-[70px]">Пол</p>
              </div>
              <div className="texts ">
                <p>salman_kadyrov</p>
                <p className="text-blue-600 text-[16px]">
                  Измененить фото профиля{" "}
                </p>
                <input
                  type="text"
                  className="mt-[15px] border-[2px] border-gray-600 outline-none w-[100%] bg-gray-200 py-[5px]"
                />
                <p className="text-xs text-gray-500">
                  Изменить ссылки можно только в мобильной версии. <br />{" "}
                  Перейдите в приложение Instagram и коснитесь <br />{" "}
                  "Редактировать профиль".
                </p>

                <textarea
                  cols="40"
                  rows=""
                  className="border-2 border-black mt-[50px]"
                ></textarea>
                <p className="ml-[5px] mt-[5px] text-xs">0/50</p>

                <select className="border-gray-500 border-2 outline-none rounded-md my-[10px]">
                  <option value="">Предпачитаю не указывать</option>
                  <option value="">Предпачитаю не указывать</option>
                  <option value="">Предпачитаю не указывать</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfil;
