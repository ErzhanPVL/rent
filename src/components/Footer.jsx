import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="w-full hidden lg:block min-h-[187px] relative ">
            <div className="bg-[url('./footer/bg.svg')] px-[88px] py-8 w-full absolute">
                <div className='flex gap-[100px] items-start'>
                    <div className='w-[50%] flex items-start gap-[108px]'>
                     <div>
                        <img src="./footer/logo.svg" alt="" />
                        <p className='tracking-[0.2em] -mt-2 text-[#000000] mb-1 ml-10'>every day</p>
                        <p>
                            <span className='text-[10px] font-normal mr-4 leading-6 opacity-30'>© 2018-2025</span>
                            <span className='text-[10px] font-normal leading-6 opacity-30'>Все права защищены</span>
                        </p>
                        </div>
                     <div>
                        <p className='text-[22px] font-normal mt-2'>+7 (888) 888-88-88</p>
                        <p className='text-[16px] font-normal'>e-mail: order@mail.ru</p>
                        </div>
                    </div>

                    <div className='w-[50%] flex gap-10 mt-3'>
                        <div className='flex gap-4'>
                            <img src="./footer/Facebook.svg" className='w-12 ' alt="" />
                            <img src="./footer/instagram.svg" className='w-12 ' alt="" />
                            <img src="./footer/telegram.svg" className='w-12 ' alt="" />
                            <img src="./footer/whatsapp.png" className='w-12 ' alt="" />
                        </div>
                        <div>
                            <p>Контакты</p>
                            <p>Статьи</p>
                        </div>
                        <div>
                            <p>Кто мы?</p>
                            <p>Как мы работаем?</p>
                        </div>
                    </div>
                </div>

            </div>
         </div>

         <div className='w-full flex lg:hidden justify-between items-center h-20 px-6 md:px-9 py-3 bg-[#F9F9F9]'>
            <div className='text-center flex flex-col justify-center'>
                <img src="./footer/menu.svg" className='w-8 md:w-9 mb-1.5 h-[29px]' alt="" />
                 <p className='text-[#1A1A1A80] text-center text-[12px]  md:text-[16px]'>Каталог</p>
            </div>
            <div className='flex flex-col justify-center'>
                <img src="./footer/user.svg" className='w-8 md:w-9 mb-1.5 h-[29px]' alt="" />
                 <p className='text-[#1A1A1A80]  text-[12px]  md:text-[16px] mr-1'>Кабинет</p>
            </div>
            <div className='flex flex-col justify-center'>
                <img src="./footer/heartz.svg" className='w-8 md:w-9 mb-1.5 h-[29px]' alt="" />
                 <p className='text-[#1A1A1A80] text-[12px]  md:text-[16px]'>Избранное</p>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col justify-center relative'>
                    <img src="./footer/cart.svg" className='w-8 md:w-9 mt-1 bg-transparent z-10 mb-1.5 h-[29px]' alt="" />
                    <p className='absolute text-[10px] bottom-9 ml-3 gradient-border1'>1234</p>
                </div>
                 <p className='text-[#1A1A1A80]  text-[12px] -mt-4  md:text-[16px]'>Корзина</p>
            </div>
         </div >
    </div>
  )
}

export default Footer
