import React from 'react'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const carouselImages = [
  "./stol/stol1.svg",
  "./stol/stol2.svg",
  "./stol/stol3.svg",
  "./stol/stol4.svg",
];

const images=[
   './amstersam/img1.svg',
   './amstersam/img2.svg',
   './amstersam/img3.svg',
   './amstersam/img4.svg',
   './amstersam/img5.svg',
]
const Amstersam = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };
  return (
    <div className='mt-10 lg:px-0 px-6'>
       <p className='text-gray-400 text-[12px] mb-8'>Главная  •  Каталог  •  Столы  • <span className='text-blue-500'> Банкетный стол Amsterdam Black</span></p>
       <h3 className='text-[#161616] text-[22px] lg:text-[32px] font-bold mb-2'>Банкетный стол Amstersam Black в аренду</h3>
       <div className='flex items-center justify-between lg:justify-start lg:gap-6 mb-6'>
          <p className='text-[16px] font-normal text-[#1A1A1A]'>Арт.: 0046</p>
          <div className='flex gap-4 lg:hidden'>
            <img src="./stol/heartz.svg" alt="" className='w-[18px] h-4'/>
            <img src="./stol/share.svg" alt="" className='w-[18px] h-4'/>
          </div>
          <div className='lg:flex hidden items-center gap-2'>
            <img src="./stol/heartz.svg" alt="" className='w-[18px] h-4'/>
            <p className='text-[16px] font-normal hidden lg:block text-[#1A1A1A]'>В избранное</p>
          </div>
          <div className='lg:flex items-center hidden gap-2'>
            <img src="./stol/share.svg" alt="" className='w-[18px] h-4'/>
            <p className='text-[16px] font-normal text-[#1A1A1A]'>Поделиться</p>
          </div>
       </div>


         
          <div className='w-full lg:flex block gap-10 mb-[72px]'>
               {/* carusel */}
            <div className="flex flex-col relative w-[50%] items-center">
                  <div
                      className="w-[470px] h-[500px] bg-cover bg-center rounded-sm shadow-sm"
                     style={{ backgroundImage: `url(${carouselImages[currentIndex]})` }}
                   ></div>
                     <div className="flex items-center absolute top-64 z-20 w-[86%] justify-between">
                     <span
                        className="w-14 h-14 bg-[#F9F9F9] flex justify-center items-center rounded-[8px] cursor-pointer"
                        onClick={handlePrev}
                     >
                        <img src="./home/left.svg" className="w-3" alt="Left" />
                     </span>
                     <span
                        className="w-12 h-12 bg-[#F9F9F9] flex justify-center items-center rounded-[8px] cursor-pointer"
                        onClick={handleNext}
                     >
                        <img src="./home/right.svg" className="w-3" alt="Right" />
                     </span>
                     </div>
                     <div className="flex gap-2 absolute top-96 mt-4">
                     {carouselImages.map((img, index) => (
                        <button
                           key={index}
                           className={`w-14 h-14 bg-cover bg-center border-2 rounded-md ${
                           currentIndex === index ? "border-blue-500" : "border-gray-300"
                           }`}
                           style={{ backgroundImage: `url(${img})` }}
                           onClick={() => setCurrentIndex(index)}
                        ></button>
                     ))}
                  </div>
               </div>
            {/* carusel */}

            <img src="./korzina/mobile.svg" className='block lg:hidden mx-auto' alt="" />
            <div className='flex lg:hidden gap-x-4 items-center mt-6'>
                  <p className='text-[#1A1A1A] font-bold text-[32px]'>1700 ₽</p>
                  <img src="./stol/answer.svg" alt="" />
               </div>
               <p className='text-[#1A1A1A80] lg:hidden opacity-50 text-[12px] -mt-2 mb-8'>1500 ₽ со второго дня</p>
               <div className='flex flex-col lg:hidden justify-center gap-6 items-center'>
                 <button className='md:w-[223px] w-[200px] h-10 text-[#1A1A1A] flex justify-center items-center text-sm font-bold border-2 border-[#1A1A1A] runded-[8px]'>Арендовать</button>
                 <div>
                    <p className='underline text-[12px] font-normal text-center mb-4 text-[#1A1A1A]'>Доставка</p>
                    <p className='underline text-[12px] font-normal text-center text-[#1A1A1A]'>Ограничения по эксплуатации</p>
                 </div>
               </div>
            <div className=''>
               <p className='text-[#1A1A1A] font-bold text-[16px] mt-6 lg:mt-0 mb-6'>Свойства товара</p>
               <div className='lg:flex block gap-14 items-start mb-13'>
                 <div className='lg:flex grid grid-cols-2 flex-col space-y-2 mb-6 lg:mb-0'>
                     <div className='flex items-center gap-4'>
                        <img src="./amstersam/1.svg" className='w-[54px] h-[54px]' alt="" />
                        <p className='text-[16px] font-normal text-[#1A1A1A]'>160-180 см</p>
                     </div>
                     <div className='flex items-center gap-4'>
                        <img src="./amstersam/2.svg" className='w-[54px] h-[54px]' alt="" />
                        <p className='text-[16px] font-normal text-[#1A1A1A]'>160 см</p>
                     </div>
                     <div className='flex items-center gap-4'>
                        <img src="./amstersam/3.svg" className='w-[54px] h-[54px]' alt="" />
                        <p className='text-[16px] font-normal text-[#1A1A1A]'>160 см</p>
                     </div>
                 </div>
                 <div className='grid grid-cols-4 gap-0 lg:gap-x-2 gap-y-2'>
                    <img src="./amstersam/card1.svg" alt="" className='w-[54px] h-[54px]' />
                    <img src="./amstersam/card2.svg" alt="" className='w-[54px] h-[54px]' />
                    <img src="./amstersam/card3.svg" alt="" className='w-[54px] h-[54px]' />
                    <img src="./amstersam/card4.svg" alt="" className='w-[54px] h-[54px]' />
                    <img src="./amstersam/card5.svg" alt="" className='w-[54px] h-[54px]' />
                    <img src="./amstersam/card6.svg" alt="" className='w-[54px] h-[54px]' />
                    <img src="./amstersam/card7.svg" alt="" className='w-[54px] h-[54px]' />
                    <img src="./amstersam/card8.svg" alt="" className='w-[54px] h-[54px]' />
                 </div>
               </div>

               <p className='text-[#1A1A1A] hidden lg:block font-bold text-[16px] mb-2'>Другие цвета</p>
               <div className='lg:flex hidden items-center gap-x-2 mb-4'>
                 <img src="./amstersam/stol1.svg" alt="" className='w-14 h-14' />
                 <img src="./amstersam/stol2.svg" alt="" className='w-14 h-14' />
                 <img src="./amstersam/stol3.svg" alt="" className='w-14 h-14' />
                 <img src="./amstersam/stol4.svg" alt="" className='w-14 h-14' />
                 <img src="./amstersam/stol5.svg" alt="" className='w-14 h-14' />
                 <img src="./amstersam/stol6.svg" alt="" className='w-14 h-14' />
                 <span className='w-12 h-12 bg-[#F9F9F9] flex justify-center rounded-[8px] cursor-pointer'>
                        <img src="./home/right.svg" className='w-3' alt="" />
                    </span>
               </div>

               <div className='lg:flex gap-x-4 hidden items-center'>
                  <p className='text-[#1A1A1A] font-bold text-[32px]'>1700 ₽</p>
                  <img src="./amstersam/price.svg" alt="" />
                  <img src="./stol/answer.svg" alt="" />
               </div>
               <p className='text-[#1A1A1A80] lg:block hidden opacity-50 text-[12px] -mt-2 mb-8'>1500 ₽ со второго дня</p>

               <div className='lg:flex hidden gap-6 items-center'>
                 <button className='w-[223px] h-10 text-[#1A1A1A] flex justify-center items-center text-sm font-bold border-2 border-[#1A1A1A] runded-[4px]'>Арендовать</button>
                 <div>
                    <p className='underline text-[12px] font-normal text-[#1A1A1A]'>Доставка</p>
                    <p className='underline text-[12px] font-normal text-[#1A1A1A]'>Ограничения по эксплуатации</p>
                 </div>
               </div>
            </div>
       </div>
       <p className='text-[#1A1A1A] lg:hidden text-[20px] font-bold  mb-4 '>Цвет</p>
       <div className='flex lg:hidden items-center justify-center mb-[86px] gap-[10px]'>
              <p className='w-6 h-6 rounded-full border border-[#C4C4C4]'></p>
              <p className='w-6 h-6 rounded-full border-none flex justify-center items-center bg-[#1A1A1A]'></p>
              <p className='w-6 h-6 rounded-full border-none bg-[#FEBE0C]'></p>
              <p className='w-6 h-6 rounded-full border-none bg-[#24F213]'></p>
              <p className='w-6 h-6 rounded-full border-none  bg-[#FC4068]'></p>
              <p className='w-6 h-6 rounded-full border-none bg-[#1A8BFB]'></p>
            </div>
       <p className='text-[#000000] font-bold text-[22px] mb-4'>Описание товара</p>
       <p className='text-[16px] font-normal text-[#1A1A1A] mb-[72px]'>Круглый банкетный стол с черными матовыми ножками</p>
       <p className='text-[#000000] font-bold text-[22px] mb-4'>Фотогалерея</p>
         {/* carusel */}
         <div className="w-full max-w-3xl lg:hidden mx-auto mt-10">
            <Swiper
               navigation={true}
               //  autoplay={{ delay: 3000 }}
               loop={true}
               modules={[Navigation, Autoplay]}
               className="w-full h-[136px]"
               >
               {images.map((src, index) => (
                  <SwiperSlide key={index}>
                     <img
                     src={src}
                     alt={`Slide ${index + 1}`}
                     className="w-full h-full object-cover rounded-lg"
                     />
                  </SwiperSlide>
               ))}
               </Swiper>
    </div>
          {/* carusel */}
       <div className='lg:flex hidden items-center gap-4 mb-[72px]'>
          <img src="./amstersam/img1.svg" alt="" className='w-[272px] h-[136px]' />
          <img src="./amstersam/img2.svg" alt="" className='w-[194px] h-[136px]' />
          <img src="./amstersam/img3.svg" alt="" className='w-[204px] h-[136px]' />
          <img src="./amstersam/img4.svg" alt="" className='w-[114px] h-[136px]' />
          <img src="./amstersam/img5.svg" alt="" className='w-[153px] h-[136px]' />
       </div>
       <p className='text-[#000000] font-bold text-[22px] mb-6'>Ограничения по эксплуатации</p>
       <p className='text-[16px] max-w-[1200px] mb-18 text-[#1A1A1A] font-normal text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
       <p className='text-[#000000] font-bold text-[22px] mb-6'>Совместимые товары</p>
       <div className='lg:flex hidden mx-auto gap-6 items-center'>
            <div className='w-[271px] h-[477px]  m-auto  px-6 pt-[31px] pb-[20px]'>
                <div className='w-full flex justify-between items-center mb-[43px]'>
                   <p className='text-[#1A1A1A] text-[12px] '>Арт.: 0046</p>
                   <img src="./stol/heartz.svg" alt="" />
                </div>
                <img src="./stol/1.svg" className='mb-[68px]' alt="" />
                <p className='text-[16px] font-bold text-[#1A1A1A] mb-2'>Amsterdam Black</p>
                 <p className='flex items-center gap-4'>
                  <span className='text-[24px] text-[#1A1A1A] font-[300]'>1700 ₽</span>
                  <img src="./stol/answer.svg" alt="" />
                 </p>
                 <p className='font-normal text-[12px] mb-9'>1500 ₽ со второго дня</p>
                 
            </div> 
            <div className='w-[271px] h-[477px]  m-auto  px-6 pt-[31px] pb-[20px]'>
                <div className='w-full flex justify-between items-center mb-[43px]'>
                   <p className='text-[#1A1A1A] text-[12px] '>Арт.: 0046</p>
                   <img src="./stol/heartz.svg" alt="" />
                </div>
                <img src="./stol/1.svg" className='mb-[68px]' alt="" />
                <p className='text-[16px] font-bold text-[#1A1A1A] mb-2'>Amsterdam Black</p>
                 <p className='flex items-center gap-4'>
                  <span className='text-[24px] text-[#1A1A1A] font-[300]'>1700 ₽</span>
                  <img src="./stol/answer.svg" alt="" />
                 </p>
                 <p className='font-normal text-[12px] mb-9'>1500 ₽ со второго дня</p>
                 
            </div> 
            <div className='w-[271px] h-[477px]  m-auto  px-6 pt-[31px] pb-[20px]'>
                <div className='w-full flex justify-between items-center mb-[43px]'>
                   <p className='text-[#1A1A1A] text-[12px] '>Арт.: 0046</p>
                   <img src="./stol/heartz.svg" alt="" />
                </div>
                <img src="./stol/1.svg" className='mb-[68px]' alt="" />
                <p className='text-[16px] font-bold text-[#1A1A1A] mb-2'>Amsterdam Black</p>
                 <p className='flex items-center gap-4'>
                  <span className='text-[24px] text-[#1A1A1A] font-[300]'>1700 ₽</span>
                  <img src="./stol/answer.svg" alt="" />
                 </p>
                 <p className='font-normal text-[12px] mb-9'>1500 ₽ со второго дня</p>
                 
            </div> 
            <div className='w-[271px] h-[477px]  m-auto  px-6 pt-[31px] pb-[20px]'>
                <div className='w-full flex justify-between items-center mb-[43px]'>
                   <p className='text-[#1A1A1A] text-[12px] '>Арт.: 0046</p>
                   <img src="./stol/heartz.svg" alt="" />
                </div>
                <img src="./stol/1.svg" className='mb-[68px]' alt="" />
                <p className='text-[16px] font-bold text-[#1A1A1A] mb-2'>Amsterdam Black</p>
                 <p className='flex items-center gap-4'>
                  <span className='text-[24px] text-[#1A1A1A] font-[300]'>1700 ₽</span>
                  <img src="./stol/answer.svg" alt="" />
                 </p>
                 <p className='font-normal text-[12px] mb-9'>1500 ₽ со второго дня</p>
                 
            </div> 
       </div>
         
         {/* carusel */}


           <p>Carusel </p>
             
         {/* carusel */}



       <p className='text-[#000000] font-bold text-[22px] mb-6'>Условия доставки</p>
       <p className='mb-24 max-w-[1200px] text-[#1A1A1A] text-[16px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
       <p className='text-[#000000] font-bold text-[22px] mb-6'>Аренда мебели</p>
       <p className='mb-24 max-w-[1200px] text-justify text-[#1A1A1A] text-[16px] font-normal'>Аренда мебели становится все более популярной услугой для организации мероприятий. Деловые вечеринки, презентации, фуршеты, выставки, шоу-показы – события, которые не обходятся без обустройства площадки с использованием фурнитуры, декора, текстиля и другого реквизита. Важно, чтобы все элементы оформления были в должном виде и соответствовали стилю торжества.
       Для этого выбирайте надежных и опытных партнеров в сопровождении праздников. Наша фирма предлагает большой выбор решений для организации любого по масштабности культурного или делового мероприятия в Москве и по всей России. У нас отлажен сервис и благоприятные условия для удовлетворения любых запросов клиентов. </p>
    </div>
  )
}

export default Amstersam
