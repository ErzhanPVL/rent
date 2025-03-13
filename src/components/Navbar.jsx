import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openCatalog, setopenCatalog] = useState(false)
  const handleModal = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <div>
      <div className='max-w-[1440px] mx-auto hidden lg:flex'>
        <div className='bg-[#1A1A1A] w-[608px] pb-2.5 pl-[88px] pt-3 pr-7 clip-path-custom z-10'>
          <div className='flex items-center gap-16'>
            <div>
              
			  <img src="./navbarimages/logo.svg" alt="" />
              <p className='text-white text-center tracking-[0.3em]'>every <span>day</span></p>
            </div>
            <div>
              <p className='flex gap-3 items-center mt-5 mb-2'>
                <span className='text-white'>Сочи </span>
                <img src="./navbarimages/right.svg" alt="" />
              </p>
              <div className='flex gap-2'>
                <img className='w-6 h-6' src="./navbarimages/Facebook.svg" alt="" />
                <img className='w-6 h-6' src="./navbarimages/instagram.svg" alt="" />
                <img className='w-6 h-6' src="./navbarimages/telegram.svg" alt="" />
                <img className='w-6 h-6' src="./navbarimages/telephon.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="relative w-[440px] px-2 mt-8 ">
            <input
              type="text"
              placeholder=""
              className="w-full py-2 pl-10 pr-4 clip-path-custom1  bg-white rounded-lg shadow-md border-none outline-none"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img src="./navbarimages/search.svg" alt="Search" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className=''>

		
          <div className="h-[120px] w-[70%] bg-[url('./navbarimages/bg.png')] bg-cover bg-center bg-no-repeat absolute z-0">
            <div className='flex gap-10 items-center h-full text-center ml-[15%]'>
              <div className='h-10 group'>
                <Link className='upperace font-bold text-[16px] pb-2 lg:text-[22px]'>Главная</  Link>
                <div className='bgActive hidden group-hover:block  h-1 w-full'></div>
              </div>
              <div className='h-10 group'>
                <Link className='upperace font-bold text-[16px] pb-2 lg:text-[22px]'>Кто мы?</  Link>
                <div className='bgActive hidden group-hover:block  h-1 w-full'></div>
              </div>
              <div className='h-10 group'>
                <Link className='upperace font-bold text-[16px] pb-2 lg:text-[22px]'>Как мы работаем</  Link>
                <div className='bgActive hidden group-hover:block  h-1 w-full'></div>
              </div>
              <div className='h-10 group '>
                <Link className='upperace font-bold  text-[16px] pb-2 lg:text-[22px]'>Контакты</  Link>
                <div className='bgActive  hidden group-hover:block  h-1 w-full'></div>
              </div>
              <p className='flex justify-center items-center'>
                <span className='upperace font-bold text-[16px] mb-1 lg:text-[22px]'>RU</span>
              </p>
              <img src="./navbarimages/bottom.svg" className='-ml-8' alt="" />
            </div>
          </div>

		
        </div>
        <div className='flex max-w-[80%] justify-around items-center mt-36'>
          <p className='flex gap-1'>
            <img src="./navbarimages/email.svg" className='w-10 ' alt="" />
            <span className='text-[22px] pr-14 text-[300] mb-2 text-[rgba(26, 26, 26, 1)]'>order@mail.ru</span>
          </p>
          
          <div className="flex items-center gap-6 mr-32">
              <p className="flex items-center gap-2 relative">
              <img src="./home/vektor.svg" className="absolute" alt="" />
              <img src="./navbarimages/mobile.svg" alt="" />
              <span className="text-[400] text-nowrap pr-28 text-[22px]">+7 (888) 888-88-88</span>
            </p>
  
            <img className="w-8 h-8" src="./navbarimages/user.svg" alt="" />
            <img className="w-8 h-8" src="./navbarimages/heartz.svg" alt="" />

            <Link to="/korzina" className='flex flex-col justify-center'>
              <div className='flex flex-col justify-center relative pr-3'>
                <img src="./footer/cart.svg" className='w-8  mt-1 bg-transparent z-10 mb-1.5 h-8' alt="" />
                <p className='absolute bg-white text-[10px] left-4 sm:bottom-6 gradient-border1'>123</p>
              </div>
	    </Link>
</div>

        </div>
      </div>

      <div className='w-full bg-[#191919] items-center justify-between flex lg:hidden py-4 px-6'>
        <img src="./navbarimages/logomobile.svg" alt="" className='w-8' />
        <div className="relative w-[184px] md:w-[300px]">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <img src="./navbarimages/search.svg" alt="Search" className="w-6 h-6" />
          </div>
          <input
            type="text"
            placeholder="Поиск"
            className="w-full py-2 pl-3 pr-4 bg-white rounded-lg shadow-md border-none outline-none"
          />

        </div>
        {!openMenu && <RiMenu2Line onClick={handleModal} className='text-white w-10 text-3xl cursor-pointer' />}
        {openMenu && <IoMdClose onClick={handleModal} className='text-white w-10 text-3xl lg:hidden'cursor-pointer />}
      </div>

      {openMenu && <div className='w-full absolute block lg:hidden z-10 bg-[#F9F9F9] p-6'>
        <div className='flex flex-col gap-y-2 mb-[70px]'>
          <Link to={'/catalog'} className='text-[16px] cursor-pointer text-[#1A1A1A] font-bold uppercase pb-3 border-b border-[#000000] w-full' style={{ borderBottomColor: 'rgba(0, 0, 0, 0.1)' }}>Каталог</Link>
          <p className='text-[16px] text-[#1A1A1A] font-bold uppercase pb-3 border-b border-[#000000] border-opacity-10 w-full ' style={{ borderBottomColor: 'rgba(0, 0, 0, 0.1)' }}> Главная</p>
          <p className='text-[16px] text-[#1A1A1A] font-bold uppercase pb-3 border-b border-[#000000] border-opacity-10 w-full' style={{ borderBottomColor: 'rgba(0, 0, 0, 0.1)' }}>Кто мы?</p>
          <p className='text-[16px] text-[#1A1A1A] font-bold uppercase pb-3 border-b border-[#000000] border-opacity-10 w-full' style={{ borderBottomColor: 'rgba(0, 0, 0, 0.1)' }}>Как мы работаем</p>
          <p className='text-[16px] text-[#1A1A1A] font-bold uppercase pb-3  w-full' >Контакты</p>
        </div>

        <p className='text-[16px] font-normal mb-2'>+7 (888) 888-88-88</p>
        <p className='text-[16px] font-normal mb-6'>order@mail.ru</p>
        <div className='w-full h-[1px] bg-[#000000] mb-4'> </div>
        <p className='flex gap-3 mb-4'>
          <span>Санкт-Петербург</span>
          <img src="./home/right1.svg" alt="" />
        </p>
        <div className='w-full flex justify-between items-center'>
          <div className='flex gap-2'>
            <img src="./footer/Facebook.svg" className='w-6 h-6' alt="" />
            <img src="./footer/instagram.svg" className='w-6 h-6' alt="" />
            <img src="./footer/telegram.svg" className='w-6 h-6' alt="" />
            <img src="./footer/phone.svg" className='w-6 h-6' alt="" />
          </div>
          <p className='flex items-center gap-1'>
            <span className='upperace font-bold text-[16px] lg:text-[22px]'>RU</span>
            <img src="./navbarimages/bottom.svg" alt="" />
          </p>

        </div>
      </div>}
       {/* kataolog */}
      {/* {openCatalog && <div>
        <div className='w-[350px] mx-auto'>
        <div className='flex items-center mt-10 gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
            <img src="./navbarimages/1.svg" className='w-10 cursor-pointer' alt="" />
            <span className='text-[16px] text-[500]'>Акции</span>
        </div>

        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 cursor-pointer '>
            <img src="./navbarimages/2.svg" className='w-10 h-8 cursor-pointer' alt="" />
            <span className='text-[16px] text-[500]'>Новинки</span>
        </div>

        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 cursor-pointer '>
            <img src="./navbarimages/3.svg" className='w-7 cursor-pointer' alt="" />
            <span className='text-[16px] text-[500]'>Свое производство</span>
        </div>
        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
                <img src="./navbarimages/4.svg" className='w-8 cursor-pointer' alt="" />
                <span className='text-[16px] text-[500]'>Столы</span>
        </div>

        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
                <img src="./navbarimages/5.svg" className='w-8 cursor-pointer' alt="" />
                <span className='text-[16px] text-[500]'>Стулья</span>
        </div>
        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/6.svg" className='w-10' alt="" />
            <span className='text-[16px] text-[500]'>Мягкая мебель</span>
        </div>
        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/7.svg" className='w-10' alt="" />
            <span className='text-[16px] text-[500]'>Стойки</span>
        </div>
        <div className='flex items-center  gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/8.svg" className='w-10' alt="" />
            <span className='text-[16px] text-[500]'>Для детей</span>
        </div>

        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
            <img src="./navbarimages/9.svg" className='w-10 cursor-pointer' alt="" />
            <span className='text-[16px] text-[500]'>Гримерные/гардероб</span>
        </div>

        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 cursor-pointer '>
            <img src="./navbarimages/10.svg" className='w-10 h-8 cursor-pointer' alt="" />
            <span className='text-[16px] text-[500]'>Ограждения</span>
        </div>

        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 cursor-pointer '>
            <img src="./navbarimages/11.svg" className='w-7 cursor-pointer' alt="" />
            <span className='text-[16px] text-[500]'>Для улицы</span>
        </div>
        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
                <img src="./navbarimages/12.svg" className='w-8 cursor-pointer' alt="" />
                <span className='text-[16px] text-[500]'>Декор</span>
        </div>

        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
                <img src="./navbarimages/13.svg" className='w-8 cursor-pointer' alt="" />
                <span className='text-[16px] text-[500]'>Готовые комплекты</span>
        </div>
        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/14.svg" className='w-10' alt="" />
            <span className='text-[16px] text-[500]'>Техника</span>
        </div>
        <div className='flex items-center gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/15.svg" className='w-10' alt="" />
            <span className='text-[16px] text-[500]'>Хранение</span>
        </div>
        <div className='flex items-center  gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/16.svg" className='w-10' alt="" />
            <span className='text-[16px] text-[500]'>Текстиль</span>
        </div>
        </div>
      </div>} */}

      {/* kataolog */}
    </div>
  )
}

export default Navbar
