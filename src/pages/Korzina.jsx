import React, { useEffect, useState } from 'react'
import { arr } from '../constans';
import CustomDatePicker from '../components/CustomDatePicker';
import OrderData from '../components/OrderData';
function Korzina() {
  const [data,setData]=useState([])
  console.log(data);

  const increment = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const decrement = (id) => {
    setData(
      data.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    const updated = [...data].filter((item) => item.id !== id) 
    setData(updated);
    sessionStorage.setItem("cart", JSON.stringify(updated))
  };

  useEffect(() => {
    const productsInBasket = JSON.parse(sessionStorage.getItem('cart'));

    setData(productsInBasket?.length ? productsInBasket : [])
  }, [])
 
 
  return (
    <div className='mt-10 w-[1290px] px-5'>
        <p className='text-[#1A1A1A80] opacity-50  text-[12px] font-normal mb-8'>Главная  •  Корзина</p>
        <p className='text-[#161616] text-[32px] font-bold mb-8'>Корзина</p>
        <div className='lg:flex block gap-11 mb-[112px]'>
            <div className='lg:max-w-[689px] md:max-w-[500px] max-w-[370px]'>
               {data.map((item)=>{
                  return <div key={item.id} className='md:max-w-[689px] flex gap-6 items-center mb-16'>
                    <img src={item.image} alt="" className='md:w-[88px] md:h-[93px]' />
                    <div className='w-full'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <p className='text-[#161616] font-bold text-[12px] md:text-[16px] mb-1'>{item.name}</p>
                            <p className='text-[#1A1A1A] font-normal text-[12px] mb-[11px]'>Арт.: 0046</p>
                          </div>
                          <img src="./korzina/delete.svg" alt="" className='cursor-pointer' onClick={() => removeItem(item.id)} />
                        </div>
                       <div className='w-full flex md:flex-row flex-col items-center justify-between'>
                         <div className='flex md:oreder-2 order-1 gap-2 items-center'>
                         <p>{item.price} ₽</p>
                         <p className='flex w-[182px] bg-[#F9F9F9] rounded-[4px] justify-center h-8 items-center '>
                            <p>
                              <span className='text-[12px] font-bold'>{item.key1}</span>
                              <span className='text-[12px]'>{item.value1}</span>
                            </p>
                            <p>
                              <span className='text-[12px] font-bold'>{item.key2}</span>
                              <span className='text-[12px]'>{item.value2}</span>
                            </p>
                            <img src="./stol/answer.svg" alt="" className='w-[14px] h-[14px] ml-2' />
                         </p>
                        </div>
                        <div className="md:w-[152px]  md:oreder-1 hidden order-2 w-[80px] md:flex items-center gap-10 justify-center h-9 bg-[url('./korzina/btn.svg')] bg-cover">
                            <img src="./korzina/decr.svg" alt="" onClick={() => decrement(item.id)} className='cursor-pointer' />
                            <span className='text-[#8759F2] text-[16px] font-bold'>{item.count}</span>
                            <img src="./korzina/incremant.svg" alt="" onClick={() => increment(item.id)} className='cursor-pointer' />
                        </div>
                       </div>
                    </div>
                 </div>
               })} 
            </div>
            <div className=' bg-[#F9F9F9] max-w-[350px] md:w-[264px] rounded-[8px] max-h-[664px] py-8 px-6'>
               <p className=' text-[12px] font-bold text-[#161616]'>Дата начала <br />
               и окончания аренды</p>
               <div className='my-4 w-full flex items-center justify-between'>
                  <p className='text-[16px] flex gap-1 font-bold'><span className='text-[16px] font-normal'>c</span> <span>24.03 </span>
                  <img src="./navbarimages/bottom.svg" alt="" />
                  </p>
                  <p className='text-[16px] flex gap-1 font-bold'><span className='text-[16px] font-normal'>по </span> <span> 04.04</span>
                  <img src="./navbarimages/bottom.svg" alt="" />
                  </p>
               </div>
               <p className='text-[#1A1A1A80] opacity-45 text-[12px] font-normal leading-4 mb-8'>Для аренды более, чем на 14 дней, <br /> напишите нам на почту: order@test.ru</p>
               <p className='text-[12px] font-bold text-[#161616] mb-4'>Тип налогообложения</p>
               <div className='flex gap-4 items-center mb-6'>
                 <div className='flex gap-2 items-center'>
                   <input type="checkbox" name="" id="" className='w-5 h-5 rounded-full cursor-pointer' />
                   <p className='text-[16px] text-[#161616] font-normal'>НДС</p>
                 </div>
                 <div className='flex gap-2 items-center'>
                   <input type="checkbox" className='w-5 h-5 rounded-full cursor-pointer'  name="" id="" />
                   <p className='text-[16px] text-[#161616] font-normal'>УСН</p>
                 </div>
               </div>
               
               <p className='text-[#1A1A1A80] opacity-45 text-[12px] font-normal leading-4 mb-6'>Уважаемый Клиент, расчет стоимости доставки и погрузо-разгрузочных работ производится через менеджера. Благодарим за понимание.</p>
               <div className='bg-[#000000] w-full h-[1px] mb-8'></div>
               <p className=' text-[16px] font-bold text-[#161616]'>Итого</p>
                <p className=' text-[32px] font-bold text-[#161616] mb-2'>999000 ₽</p>
                <p className='text-[#1A1A1A80] opacity-45 text-[12px] font-normal leading-4 mb-6'>Расчет стоимости не подразумевает наличие товара. Товар будет оперативно предоставлен менеджерами после оформления заказа</p>
                <button className='text-sm font-bold w-full h-10 flex items-center justify-center border-2 rounded-[4px] text-[#1A1A1A]'>Арендовать</button>
            </div>
            
        </div>
      <OrderData data={data}/>

        <p className='text-[#161616] text-[22px] font-bold mb-6'>Вам может подойти</p>

          
          <div className='lg:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-[400px] justify-self-start lg:max-w-[1000px] mb-6 lg:mb-16 md:mr-96'>
            <div className='max-w-[208px] h-[477px] px-3 md:px-6 pt-[31px] pb-[20px]'>
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
            <div className='w-[208px] h-[477px]  px-3 md:px-6 pt-[31px] pb-[20px]'>
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
            <div className='w-[208px] h-[477px] px-3 md:px-6 pt-[31px] pb-[20px]'>
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
            <div className='w-[208px] h-[477px] px-3 md:px-6 pt-[31px] pb-[20px]'>
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
       <p className='text-[#161616] text-lg md:text-[22px] font-bold mb-3 md:mb-6'>Условия доставки</p>
       <p className='md:text-[16px] text-sm mb-6 md:mb-24 max-w-[320px] md:max-w-[500px] lg:max-w-[1000px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
       <p className='text-[#161616] text-lg md:text-[22px] font-bold mb-6'>Аренда мебели</p>
       <p className='md:text-[16px] text-sm mb-6 md:mb-24 max-w-[320px]  lg:max-w-[1000px] text-justify'>Аренда мебели становится все более популярной услугой для организации мероприятий. Деловые вечеринки, презентации, фуршеты, выставки, шоу-показы – события, которые не обходятся без обустройства площадки с использованием фурнитуры, декора, текстиля и другого реквизита. Важно, чтобы все элементы оформления были в должном виде и соответствовали стилю торжества.
       Для этого выбирайте надежных и опытных партнеров в сопровождении праздников. Наша фирма предлагает большой выбор решений для организации любого по масштабности культурного или делового мероприятия в Москве и по всей России. У нас отлажен сервис и благоприятные условия для удовлетворения любых запросов клиентов. </p>
    </div>
  )
}

export default Korzina
