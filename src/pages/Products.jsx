import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useFetch } from "../services/servis";
import { ProductsContext } from "../context/ProductContext";
import { formatId } from "../utils/util";
function Products() {
  const { products } = useContext(ProductsContext);
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/api/products"
  );
  console.log(data);
  
  const [openModal, setOpenModal] = useState(false);
  const [oncount, setoncount] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const onModal = () => {
    setOpenModal(!openModal);
  };
  const Onsetoncount = (id) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter((item) => item !== id));
      // setoncount(!oncount)
    } else {
      setSelectedCards([...selectedCards, id]);
    }
  };
  return (
    <div className="mt-10 w-full max-w-[1200px] px-5">
      <div className="w-full">
        <p className="text-[#1A1A1A80] text-[12px] mb-6">
          {" "}
          Главная • Каталог • Столы
        </p>
        <p className="text-[#161616] text-[22px] font-bold mb-8">
          Аренда столов в Санкт-Петербурге
        </p>
        {openModal && (
          <div className="flex items-center gap-4 md:hidden">
            <IoMdClose
              onClick={onModal}
              className="cursor-pointer text-[24px]"
            />
            <span className="text-[12px] text-[#161616] font-bold">
              Сбросить
            </span>
          </div>
        )}
        {!openModal && (
          <div
            onClick={onModal}
            className="flex gap-5 items-center cursor-pointer mb-8 lg:hidden"
          >
            <img src="./stol/menu.svg" className="w-6 h-5" alt="" />
            <img
              src="./stol/text.svg"
              className="p-2 border border-[#8759F2] rounded-[8px]"
              alt=""
            />
          </div>
        )}
        <div className="hidden lg:block">
          <div className="flex items-center gap-4 mb-4">
            <button className="text-[#161616]  rounded-[4px] border border-[#BFBFBF66] font-normal text-[14px] w-[62px] h-12 cursor-pointer">
              все
            </button>
            <button className="text-[#8759F2] flex gap-2 items-center px-2 rounded-[4px] border border-[#8759F2] font-normal text-[14px] w-[164px] h-12 cursor-pointer">
              <img src="./stol/img1.svg" className="mt-3" alt="" />
              стандартные
            </button>
            <button className="text-[#FC3172] flex gap-2 items-center px-2 rounded-[4px] border border-[#FC3172] font-normal text-[14px] w-[243px] h-12 cursor-pointer">
              <img src="./stol/img2.svg" className="mt-3" alt="" />
              барные и коктейльные
            </button>
            <button className="text-[#1A1A1A] flex gap-2 items-center px-2 rounded-[4px] border border-[#1A1A1A1A] font-normal text-[14px] w-[168px] h-12 cursor-pointer">
              <img src="./stol/img3.svg" className="mt-3 w-8" alt="" />
              журнальные{" "}
            </button>
            <button className="text-[#1A1A1A] flex gap-2 items-center px-2 rounded-[4px] border border-[#1A1A1A1A] font-normal text-[14px] w-[164px] h-12 cursor-pointer">
              <img src="./stol/img1.svg" className="mt-3" alt="" />
              стандартные
            </button>
          </div>
          <div className="flex items-center gap-4 mb-16">
            <button className="text-[#1A1A1A] flex gap-2 items-center px-2 rounded-[4px] border border-[#1A1A1A1A] font-normal text-[14px] w-[164px] h-12 cursor-pointer">
              <img src="./stol/img1.svg" className="mt-3" alt="" />
              стандартные
            </button>
            <button className="text-[#1A1A1A] flex gap-2 items-center px-2 rounded-[4px] border border-[#1A1A1A1A] font-normal text-[14px] w-[168px] h-12 cursor-pointer">
              <img src="./stol/img3.svg" className="mt-3 w-8" alt="" />
              журнальные{" "}
            </button>
            <button className="text-[#1A1A1A] flex gap-2 items-center px-2 rounded-[4px] border border-[#1A1A1A1A] font-normal text-[14px] w-[243px] h-12 cursor-pointer">
              <img src="./stol/img2.svg" className="mt-3" alt="" />
              барные и коктейльные
            </button>
          </div>
        </div>
        {!openModal && (
          <p className="flex gap-2 items-start mb-4">
            <span className="text-[12px] text-[#161616] font-normal">
              Сортировать по:
            </span>
            <span className="text-[12px] text-[#161616] font-bold">цене</span>
            <img src="./navbarimages/bottom.svg" className="mt-1" alt="" />
          </p>
        )}

        <div className="flex gap-4">
          <div className="w-[20%] hidden lg:block px-1">
            <p className="text-[#1A1A1A] text-[20px] font-normal mb-6">Цена</p>
            <div className="flex gap-2 items-center mb-6">
              <p className="text-[#1A1A1A] text-[16px] font-normal w-16 h-10 border-1 border-[#1A1A1A1A] flex justify-center items-center rounded-[4px]">
                1000
              </p>
              <div className="w-[14px] h-[1px] bg-[#1A1A1A1A]"></div>

              <p className="text-[#1A1A1A] text-[16px] font-normal w-16 h-10 border-1 border-[#1A1A1A1A] flex justify-center items-center rounded-[4px]">
                2400
              </p>
            </div>

            <div className="flex items-center mb-12">
              <p className="w-4 h-4 rounded-full border border-[#8759F2]"></p>
              <div className="w-[115px] h-[1px]  bg-[#8759F2]"></div>
              <p className="w-4 h-4 rounded-full border border-[#8759F2]"></p>
              <div className="w-[46px] h-[1px]  bg-[#C4C4C4]"></div>
            </div>
            <p className="text-[#1A1A1A] text-[20px] font-normal mb-6">Цвет</p>
            <div className="grid grid-cols-4 w-[80%]">
              <p className="w-6 h-6 rounded-full border border-[#C4C4C4]"></p>
              <p className="w-6 h-6 rounded-full border-none flex justify-center items-center bg-[#1A1A1A]">
                <IoMdClose className="text-white" />
              </p>
              <p className="w-6 h-6 rounded-full border-none bg-[#FEBE0C]"></p>
              <p className="w-6 h-6 rounded-full border-none bg-[#24F213]"></p>
              <p className="w-6 h-6 rounded-full border-none mt-2 bg-[#FC4068]"></p>
              <p className="w-6 h-6 rounded-full border-none mt-2 mb-12 bg-[#1A8BFB]"></p>
            </div>

            <p className="text-[#1A1A1A] text-[20px] font-normal mb-4">Форма</p>
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                className="w-6 h-6 border border-[#1A1A1A]"
                name=""
                id=""
              />
              <span className="text-[16px] text-[#161616]">Круг</span>
            </div>
            <div className="flex gap-1 items-center mt-4">
              <input
                type="checkbox"
                className="w-6 h-6 border border-[#1A1A1A]"
                name=""
                id=""
              />
              <span className="text-[16px] text-[#161616]">Квадрат</span>
            </div>
            <div className="flex gap-1 items-center mt-4 mb-12">
              <input
                type="checkbox"
                className="w-6 h-6 border border-[#1A1A1A]"
                name=""
                id=""
              />
              <span className="text-[16px] text-[#161616]">Другое</span>
            </div>

            <p className="text-[#1A1A1A] text-[20px] font-normal mb-4">
              Можно использовать на улице?
            </p>
            <div className="flex items-center gap-4 px-1 mb-12">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#1A1A1A]"
                  name=""
                  id=""
                />
                <span className="text-[16px] text-[#161616]">Да</span>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#1A1A1A]"
                  name=""
                  id=""
                />
                <span className="text-[16px] text-[#161616]">Нет</span>
              </div>
            </div>

            <p className="text-[16px] text-[#1A1A1A] font-bold mb-[34px]">
              Вы недавно смотрели:
            </p>
            <div className="card">
              <img src="./stol/photo.svg" alt="" />
            </div>
            <div className="card">
              <img src="./stol/kreslo.svg" alt="" />
            </div>
            <div className="card">
              <img src="./stol/photo.svg" alt="" />
            </div>
            <div className="card">
              <img src="./stol/kreslo.svg" alt="" />
            </div>
          </div>
          {!openModal && (
            <div className="lg:w-[819px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-2 justify-center">
              {isPending && (
                <p className="my-10 text-3xl font-bold text-center w-full">
                  Загрузка
                </p>
              )}
              {!isPending && !data && (
                <p className="my-10 text-3xl font-bold text-center w-full">
                  Нет товаров
                </p>
              )}
              {products &&
                products.map((item) => {
                  return (
                    <Link to={`/amstersam/${item.id}`}>
                      <div className="w-[251px] group relative mx-auto cursor-pointer  h-[477px]  px-6 pt-[31px] pb-[20px]">
                        <div className="w-full flex justify-between items-center mb-[43px]">
                          <p className="text-[#1A1A1A] text-[12px] ">
                            Арт.: {item.article}
                          </p>
                          <img src="./stol/heartz.svg" alt="" />
                        </div>
                        <img
                          src={item.images[0]?.url}
                          className="mb-[68px] w-[200px] h-[100px]  "
                          alt=""
                        />
                        {!oncount && (
                          <div>
                            <img
                              src="./amstersam/promo.svg"
                              className="absolute hidden  group-hover:block top-52 left-40"
                              alt=""
                            />
                            <img
                              src="./stol/colors.svg"
                              className="hidden group-hover:block absolute top-64 left-5 w-8 "
                              alt=""
                            />
                          </div>
                        )}
                        <p className="text-[16px] font-bold text-[#1A1A1A] mb-2">
                          {item.name}
                        </p>
                        <p className="flex items-center gap-4">
                          <span className="text-[24px] text-[#1A1A1A] font-[300]">
                            {item.price} ₽
                          </span>
                          <img src="./stol/answer.svg" alt="" />
                        </p>
                        <p className="font-normal text-[12px] group-hover:mb-6 mb-9">
                          {item.stock}₽ со второго дня
                        </p>
                        <button className="text-sm group-hover:hidden font-bold w-full h-10 flex items-center justify-center border-2 rounded-[4px] text-[#1A1A1A]">
                          Арендовать
                        </button>
                        {!oncount && (
                          <div
                            onClick={() => Onsetoncount(item.id)}
                            className="w-[208px]  hidden cursor-pointer group-hover:flex justify-center items-center h-14 bg-[url('./home/Union.svg')]  bg-cover"
                          >
                            <p className="btn-text text-center mb-3">
                              Арендовать
                            </p>
                          </div>
                        )}
                        {oncount && (
                          <div className="w-full hidden group-hover:flex items-center gap-12 justify-center h-12 bg-[url('./korzina/btn.svg')] bg-cover">
                            <img
                              src="./korzina/decr.svg"
                              alt=""
                              className="cursor-pointer"
                            />
                            <span className="text-[#8759F2] text-[16px] font-bold">
                              30
                            </span>
                            <img
                              src="./korzina/incremant.svg"
                              alt=""
                              className="cursor-pointer"
                            />
                          </div>
                        )}
                        {oncount && (
                          <img
                            src="./home/12.svg"
                            className="absolute top-48 left-44"
                          />
                        )}
                      </div>
                    </Link>
                  );
                })}
            </div>
          )}
        </div>

        {openModal && (
          <div>
            <p className="text-[#1A1A1A] text-[20px] font-normal mb-3 mt-12">
              Цена
            </p>
            <div className="flex gap-2 items-center mb-6">
              <p className="text-[#1A1A1A] text-[16px] font-normal w-16 h-10 border-1 border-[#1A1A1A1A] flex justify-center items-center rounded-[4px]">
                1000
              </p>
              <div className="w-[14px] h-[1px] bg-[#1A1A1A1A]"></div>

              <p className="text-[#1A1A1A] text-[16px] font-normal w-16 h-10 border-1 border-[#1A1A1A1A] flex justify-center items-center rounded-[4px]">
                2400
              </p>
            </div>
            <div className="flex items-center mb-12">
              <p className="w-4 h-4 rounded-full border border-[#8759F2]"></p>
              <div className="w-[115px] h-[1px]  bg-[#8759F2]"></div>
              <p className="w-4 h-4 rounded-full border border-[#8759F2]"></p>
              <div className="w-[146px] h-[1px]  bg-[#C4C4C4]"></div>
            </div>
            <p className="text-[#1A1A1A] text-[20px] font-normal mb-3">Цвет</p>
            <div className="flex gap-2 w-[80%] mb-6">
              <p className="w-6 h-6 rounded-full border border-[#C4C4C4]"></p>
              <p className="w-6 h-6 rounded-full border-none flex justify-center items-center bg-[#1A1A1A]">
                <IoMdClose className="text-white" />
              </p>
              <p className="w-6 h-6 rounded-full border-none bg-[#FEBE0C]"></p>
              <p className="w-6 h-6 rounded-full border-none bg-[#24F213]"></p>
              <p className="w-6 h-6 rounded-full border-none  bg-[#FC4068]"></p>
              <p className="w-6 h-6 rounded-full border-none bg-[#1A8BFB]"></p>
            </div>
            <button className="absolute bottom-[184px] z-10 w-[113px] h-[52px] text-[16px] font-bold text-[#1A1A1A] bg-white left-24 gradient-border1">
              Показать{" "}
            </button>

            <p className="text-[#1A1A1A] w-full text-[20px] font-normal mb-4">
              Форма
            </p>
            <div className="">
              <div className="flex gap-4  ">
                <div className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    className="w-6 h-6 border border-[#1A1A1A]"
                    name=""
                    id=""
                  />
                  <span className="text-[16px] text-[#161616]">Круг</span>
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    className="w-6 h-6 border border-[#1A1A1A]"
                    name=""
                    id=""
                  />
                  <span className="text-[16px] text-[#161616]">Квадрат</span>
                </div>
              </div>
              <div className="flex gap-1 items-center mb-12 mt-4">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#1A1A1A]"
                  name=""
                  id=""
                />
                <span className="text-[16px] text-[#161616] ">Другое</span>
              </div>
            </div>

            <p className="text-[#1A1A1A] text-[20px] font-bold mb-4">
              Можно использовать на улице?
            </p>
            <div className="flex items-center gap-4 px-1 mb-12">
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#1A1A1A]"
                  name=""
                  id=""
                />
                <span className="text-[16px] text-[#161616]">Да</span>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#1A1A1A]"
                  name=""
                  id=""
                />
                <span className="text-[16px] text-[#161616]">Нет</span>
              </div>
            </div>
            <p className="text-[#161616] text-[22px] font-bold mb-4">
              Не нашли того, что искали?
            </p>
            <p className="text-sm font-normal text-[#1A1A1A] text-justify mb-8">
              Аренда мебели становится все более популярной услугой для
              организации мероприятий. Деловые вечеринки, презентации, фуршеты,
              выставки, шоу-показы – события, которые не обходятся без
              обустройства площадки с использованием фурнитуры, декора, текстиля
              и другого реквизита.{" "}
            </p>

            <input
              type="text"
              placeholder="Как вас зовут?"
              className="w-full mx-auto border h-[40px] px-4 rounded-[4px] mb-4"
            />
            <input
              type="text"
              placeholder="Телефон"
              className="w-full border h-[40px] px-4 rounded-[4px] mb-8"
            />
            <button className="text-sm w-[134px] h-10 flex mx-auto text-center justify-center gradient-btn btn-text mb-4 items-center cursor-pointer">
              Отправить
            </button>
            <p className="text-8px font-medium text-center mb-8 text-gray-400">
              Нажимая кнопку «Отправить» вы соглашаетесь с{" "}
              <span className="underline text-blue-500 op">Правилами</span>{" "}
              обработки персональных данных.
            </p>
          </div>
        )}
        <p className="mt-[95px] mb-6 text-[#161616] text-[22px] font-bold">
          Аренда мебели
        </p>
        <p className="max-w-[1200px] ml-auto text-[#1A1A1A] text-[16px] font-normal text-justify mb-[88px]">
          Аренда мебели становится все более популярной услугой для организации
          мероприятий. Деловые вечеринки, презентации, фуршеты, выставки,
          шоу-показы – события, которые не обходятся без обустройства площадки с
          использованием фурнитуры, декора, текстиля и другого реквизита. Важно,
          чтобы все элементы оформления были в должном виде и соответствовали
          стилю торжества. Для этого выбирайте надежных и опытных партнеров в
          сопровождении праздников. Наша фирма предлагает большой выбор решений
          для организации любого по масштабности культурного или делового
          мероприятия в Москве и по всей России. У нас отлажен сервис и
          благоприятные условия для удовлетворения любых запросов клиентов.
        </p>
      </div>
    </div>
  );
}

export default Products;
