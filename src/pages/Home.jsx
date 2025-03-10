import React from 'react'

function Home() {
    return (
        <div className='lg:mt-10 max-w-[1180px]'>
            <div className="mb-10 h-[576px] bg-[url('./home/homebg.svg')] bg-center bg-cover pt-10 pl-10 pr-8">
                <div className='w-full lg:flex h-full justify-between '>
                    <div className='h-full'>
                        <h3 className='lg:text-[56px] lg:h-[200px] text-[22px]  font-extrabold uppercase lg:leading-16 '>
                            Аренда мебели
                            <br />
                            для мероприятий
                            <br />
                            в Сочи</h3>

                        <div className='md:w-[228px] w-[66px] ml-6 mt-1 lg:m-0  bgCard'>
                        </div>
                    </div>

                    <p className='text-[16px]  font-bold -mt-[400px] lg:hidden'>Большой ассортимент <br /> фурнитуры в аренду на <br />любые цели</p>
                    <div className='w-[162px] self-start border-4 border-[#000000] mt-4 hidden lg:flex justify-between p-2 text-left px-6'>
                        <p className='text-[16px] font-bold'>Большой ассортимент фурнитуры
                            в аренду на любые цели</p>
                    </div>
                </div>
            </div>

            <h2 className='text-[22px] lg:text-[32px] font-bold text-black mb-6 ml-6'>Преимущества</h2>

            <div className='grid lg:grid-cols-3 overflow-auto grid-cols-1 items-center w-full gap-2 justify-center lg:justify-between mx-auto'>
                <div className='text-center'>
                    <div className='md:w-[300px] w-[272px] gradient-border h-[386px] mx-auto rounded-[8px] p-6 pb-0'>
                        <p className='text-[16px] font-bold text-center leading-[110%]'>Производим мебель по эскизам клиента и сдаем ее <br />по цене аренды</p>
                        <p className='text-sm font-normal text-center leading-[160%] text-[#1A1A1A] mt-4'>Мы сами производим мебель, поэтому можем сделать ее нестандартных размеров и по индивидуальным эскизам. Получившуюся мебель сдаем в аренду. Так мы обновляем свой ассортимент, а вы экономите на производстве. Еще собственное производство помогает нам поддерживать товары в отличном состоянии.</p>
                    </div>
                    <p className='flex justify-center gap-4 mb-10 lg:mb-0 mt-[18px]'>
                        <img src="./navbarimages/3.svg" alt="" />
                        <p className='w-[195px] text-[12px] text-normal  text-[#1A1A1A]'> Посмотреть мебель, которую мы уже произвели под заказ</p>
                    </p>
                </div>

                <div className='text-center'>
                    <div className='md:w-[300px] w-[272px] gradient-border h-[386px]  mx-auto rounded-[8px] p-6 pb-0'>
                        <p className='text-[16px] font-bold text-center leading-[110%]'>Условия оплаты, <br />отвечающие <br />
                            потребностям рынка</p>
                        <p className='text-sm font-normal text-center leading-[160%] text-[#1A1A1A] mt-4'>Понимаем проблемы ивент-организаторов, поэтому заботимся о процессах: с постоянными клиентами после третьего заказа при необходимости обсуждаем условия частичной постоплаты.
                            Цены в каталоге указываем без налогов, чтобы вам было удобнее посчитать их в зависимости от вашего налогообложения.</p>
                    </div>
                    <button className='w-[217px] text-[#1A1A1A] border-[1px] rounded-[4px] border-[#1A1A1A] text-sm font-bold h-10 mx-auto mt-[18px]  my-10 lg:my-0 lg:mt-[18px]'>Написать нам</button>
                </div>

                <div>
                    <div className='md:w-[300px] w-[272px]  gradient-border h-[386px]  mx-auto rounded-[8px] p-6 pb-0'>
                        <p className='text-[16px] font-bold text-center leading-[110%]'>Собственная школа кадров <br />
                            и обучение каждого <br /> сотрудника</p>
                        <p className='text-sm font-normal text-center leading-[160%] text-[#1A1A1A] mt-4'>Мы стремимся быть лучше, поэтому в нашей компании работает школа кадров. Все сотрудники, от менеджеров до водителей,  прошли обучение и поэтому хорошо разбираются в рабочих вопросах. Это помогает нам поддерживать качество работы и отвечать на вопросы клиентов, а вам быстрее получать результат. </p>
                    </div>
                    <p className='flex justify-center gap-4 mt-[18px]'>
                        <img src="./navbarimages/3.svg" alt="" />
                        <p className='w-[195px] text-[12px] text-normal text-[#1A1A1A]'> Кто тренер <br />
                            нашей команды?</p>
                    </p>
                </div>
            </div>


            <div className='mt-[106px] mb-10 flex w-full items-center justify-between px-6'>
                <p className='text-[22px] font-bold text-[#1A1A1A]'>Отзывы наших клиентов</p>
                <div className='lg:flex hidden gap-4'>
                    <span className='w-12 h-12 bg-[#F9F9F9] flex justify-center  rounded-[8px] cursor-pointer'>
                        <img src="./home/left.svg" className='w-3' alt="" />
                    </span>
                    <span className='w-12 h-12 bg-[#F9F9F9] flex justify-center rounded-[8px] cursor-pointer'>
                        <img src="./home/right.svg" className='w-3' alt="" />
                    </span>
                </div>
            </div>

            <div className='lg:flex hidden gap-4 custom pb-16 px-6'>
                <div className='h-auto w-[90%] lg:w-auto flex-shrink-0 lg:px-10 p-6 shadow-lg rounded-[8px] pb-[47px] lg:pt-8 mx-auto'>
                    <p className='text-[16px] text-[#1A1A1A] font-bold mb-2'>Hubble Bubble Lounge</p>
                    <p className='text-[12px] text-[#1A1A1A] font-normal'>Константин Константинопольский, директор</p>
                    <p className='text-[14px] mt-8 text-[#1A1A1A] font-normal'>Спасибо большое, мы пользуемся вашим <br /> сервисом уже 3-й раз. Все прошло как всегда на <br /> высоте! <span className='underline'>Подробнее</span></p>
                    <div className='flex items-center gap-4 mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src="./home/book.svg" alt="" />
                            <p className='gradient-text text-[12px]'>Источник</p>
                        </div>
                        <p className='text-[12px] font-normal'>23.02.2020</p>
                    </div>
                </div>
                <div className='w-[90%] h-auto lg:w-1/2 flex-shrink-0 rounded-[8px] p-6 shadow-lg mx-auto lg:px-10 pb-[47px] pt-8'>
                    <p className='text-[16px] text-[#1A1A1A] font-bold mb-2'>Hubble Bubble Lounge</p>
                    <p className='text-[12px] text-[#1A1A1A] font-normal'>Арчибальд Кстошинский-Римский, менеджер проектов</p>
                    <p className='text-[14px] mt-8 text-[#1A1A1A] font-normal'>Первый раз работали с Рендей и все оказалось на высшем уровне. С удвольствием будем рекомандовать их своих коллегам! <span className='underline'>Подробнее</span></p>
                    <div className='flex items-center gap-4 mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src="./home/book.svg" alt="" />
                            <p className='gradient-text text-[12px]'>Источник</p>
                        </div>
                        <p className='text-[12px] font-normal'>23.02.2020</p>
                    </div>
                </div>
            </div>
            <div className="relative w-64 mx-auto lg:hidden">
                <div className="carousel flex overflow-x-auto scroll-smooth snap-x snap-mandatory">
                 <div className="carousel-item flex-shrink-0 w-full snap-center">
                 <div className='h-auto w-[100%] lg:w-auto flex-shrink-0 lg:px-10 p-6 shadow-lg rounded-[8px] pb-[47px] lg:pt-8 mx-auto'>
                    <p className='text-[16px] text-[#1A1A1A] font-bold mb-2'>Hubble Bubble Lounge</p>
                    <p className='text-[12px] text-[#1A1A1A] font-normal'>Константин Константинопольский, директор</p>
                    <p className='text-[14px] mt-8 text-[#1A1A1A] font-normal'>Спасибо большое, мы пользуемся вашим <br /> сервисом уже 3-й раз. Все прошло как всегда на <br /> высоте! <span className='underline'>Подробнее</span></p>
                    <div className='flex items-center gap-4 mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src="./home/book.svg" alt="" />
                            <p className='gradient-text text-[12px]'>Источник</p>
                        </div>
                        <p className='text-[12px] font-normal'>23.02.2020</p>
                    </div>
                </div>
                 </div>
                <div className="carousel-item flex-shrink-0 w-full snap-center">
                <div className='w-[90%] h-auto lg:w-1/2 flex-shrink-0 rounded-[8px] p-6 shadow-lg mx-auto lg:px-10 pb-[47px] pt-8'>
                    <p className='text-[16px] text-[#1A1A1A] font-bold mb-2'>Hubble Bubble Lounge</p>
                    <p className='text-[12px] text-[#1A1A1A] font-normal'>Арчибальд Кстошинский-Римский, менеджер проектов</p>
                    <p className='text-[14px] mt-8 text-[#1A1A1A] font-normal'>Первый раз работали с Рендей и все оказалось на высшем уровне. С удвольствием будем рекомандовать их своих коллегам! <span className='underline'>Подробнее</span></p>
                    <div className='flex items-center gap-4 mt-4'>
                        <div className='flex items-center gap-2'>
                            <img src="./home/book.svg" alt="" />
                            <p className='gradient-text text-[12px]'>Источник</p>
                        </div>
                        <p className='text-[12px] font-normal'>23.02.2020</p>
                    </div>
                </div>
                </div>
    
  </div>
  <button
    className="absolute top-1/2 left-2 bg-white p-2 rounded-full shadow-md opacity-0 transition-opacity duration-300 hover:opacity-100 focus:opacity-100"
    onClick={() => document.querySelector('.carousel').scrollBy({ left: -200, behavior: 'smooth' })}
  >
    ◀
  </button>
  <button
    className="absolute top-1/2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 transition-opacity duration-300 hover:opacity-100 focus:opacity-100"
    onClick={() => document.querySelector('.carousel').scrollBy({ left: 200, behavior: 'smooth' })}
  >
    ▶
  </button>
</div>




            <p className='text-[22px] font-bold text-[#1A1A1A] mt-20 mb-6 ml-6'>Аренда мебели</p>
            <p className='text-justify px-6 mb-[89px]'>Аренда мебели становится все более популярной услугой для организации мероприятий. Деловые вечеринки, презентации, фуршеты, выставки, шоу-показы – события, которые не обходятся без обустройства площадки с использованием фурнитуры, декора, текстиля и другого реквизита. Важно, чтобы все элементы оформления были в должном виде и соответствовали стилю торжества. <br />
                Для этого выбирайте надежных и опытных партнеров в сопровождении праздников. Наша фирма предлагает большой выбор решений для организации любого по масштабности культурного или делового мероприятия в Москве и по всей России. У нас отлажен сервис и благоприятные условия для удовлетворения любых запросов клиентов. </p>
        </div>
    )
}

export default Home
