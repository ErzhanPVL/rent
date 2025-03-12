import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[350px]'>
        <div className='flex group items-center mt-10 gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
            <img src="./navbarimages/1.svg" className='w-10 cursor-pointer' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Акции</span>
        </div>

        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 cursor-pointer '>
            <img src="./navbarimages/2.svg" className='w-10 h-8 cursor-pointer' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Новинки</span>
        </div>

        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 cursor-pointer '>
            <img src="./navbarimages/3.svg" className='w-7 cursor-pointer' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Свое производство</span>
        </div>
         <Link to={'/rabotaem'}>
         <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
                <img src="./navbarimages/4.svg" className='w-8 cursor-pointer' alt="" />
                <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Столы</span>
        </div>
          </Link>

        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
                <img src="./navbarimages/5.svg" className='w-8 cursor-pointer' alt="" />
                <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Стулья</span>
        </div>
        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/6.svg" className='w-10' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Мягкая мебель</span>
        </div>
         <Link to={'/amstersam'}>
            <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/7.svg" className='w-10' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Стойки</span>
        </div>
        </Link>
        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/8.svg" className='w-10' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Для детей</span>
        </div>

        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
            <img src="./navbarimages/9.svg" className='w-10 cursor-pointer' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Гримерные/гардероб</span>
        </div>

        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 cursor-pointer '>
            <img src="./navbarimages/10.svg" className='w-10 h-8 cursor-pointer' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Ограждения</span>
        </div>

        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 cursor-pointer '>
            <img src="./navbarimages/11.svg" className='w-7 cursor-pointer' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Для улицы</span>
        </div>
        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
                <img src="./navbarimages/12.svg" className='w-8 cursor-pointer' alt="" />
                <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Декор</span>
        </div>

        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2 '>
                <img src="./navbarimages/13.svg" className='w-8 cursor-pointer' alt="" />
                <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Готовые комплекты</span>
        </div>
        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/14.svg" className='w-10' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Техника</span>
        </div>
        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/15.svg" className='w-10' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Хранение</span>
        </div>
        <div className='flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] bg-[#F9F9F9] px-4 mb-2  '>
            <img src="./navbarimages/16.svg" className='w-10' alt="" />
            <span className='text-[16px] font-normal group-hover:font-bold group-hover:text-[#FC3172] text-[500]'>Текстиль</span>
        </div>
    </div>
  )
}

export default Sidebar
