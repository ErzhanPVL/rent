import React, { useState } from 'react'
import { arr } from '../constans';
function Korzina() {
  const [data,setData]=useState(arr)
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
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div className='mt-10 w-[1290px]'>
        <p className='text-[#1A1A1A80] opacity-50  text-[12px] font-normal mb-8'>Главная  •  Корзина</p>
        <p className='text-[#161616] text-[32px] font-bold mb-8'>Корзина</p>
        <div className='flex gap-11 mb-[112px]'>
            <div className='max-w-[689px]'>
               {data.map((item)=>{
                  return <div key={item.id} className='w-[689px]  flex gap-6 items-center mb-16'>
                    <img src={item.url} alt="" className='w-[88px] h-[93px]' />
                    <div className='w-full'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <p className='text-[#161616] font-bold text-[16px] mb-1'>{item.title}</p>
                            <p className='text-[#1A1A1A] font-normal text-[12px] mb-[11px]'>{item.text}</p>
                          </div>
                          <img src="./korzina/delete.svg" alt="" className='cursor-pointer' onClick={() => removeItem(item.id)} />
                        </div>
                       <div className='w-full flex items-center justify-between'>
                         <div className='flex gap-2 items-center'>
                         <p>{item.price}</p>
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
                        <div className="w-[152px] flex items-center gap-10 justify-center h-9 bg-[url('./korzina/btn.svg')] bg-cover">
                            <img src="./korzina/decr.svg" alt="" onClick={() => decrement(item.id)} className='cursor-pointer' />
                            <span className='text-[#8759F2] text-[16px] font-bold'>{item.count}</span>
                            <img src="./korzina/incremant.svg" alt="" onClick={() => increment(item.id)} className='cursor-pointer' />
                        </div>
                       </div>
                    </div>
                 </div>
               })} 
            </div>
            <div className=' bg-[#F9F9F9] w-[264px] rounded-[8px] max-h-[664px] py-8 px-6'>
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
            <div>

            </div>
        </div>
        <p className='text-[#161616] text-[32px] font-bold mb-7'>Оформление заказа</p>
        <p className='text-[#161616] text-[16px] font-bold mb-6'>Дата начала и окончания аренды<span className='text-[#FC4068] font-bold'>*</span></p>

        <div className='w-full flex items-center gap-4 mb-4'>
            <div className='w-[328px] border border-gray-400 rounded-[4px] h-14 px-4 flex items-center justify-between'>
               <p className='text-[16px]'>с 24 марта</p>
               <img src="./navbarimages/bottom.svg" alt="" />
            </div>
            <div className='w-[328px] border h-14 border-gray-400 rounded-[4px]  px-4 flex items-center justify-between'>
               <p className='text-[16px]'>с 24 марта</p>
               <img src="./navbarimages/bottom.svg" alt="" className='w-3' />
            </div>
        </div>
        <p className='text-[#1A1A1A80]  text-[12px] font-normal mb-6'>Для аренды более, чем на 14 дней, напишите нам на почту: order@test.ru</p>
        
        <div className='w-full flex items-center gap-4 mb-14'>
           <div>
              <p className='text-[12px] font-bold mb-2'>Время начала монтажа:</p>
              <p className='flex items-center'>
                <span className='w-[115px] h-[1px] bg-[#C4C4C4]'></span>
                <span className='w-14 h-8 border flex items-center justify-center rounded-sm border-[#8759F2] text-[#8759F2]'>08:00</span>
                <span className='w-[160px] h-[1px] bg-[#C4C4C4]'></span>
              </p>
           </div>
           <div>
              <p className='text-[12px] font-bold mb-2'>Время начала монтажа:</p>
              <p className='flex items-center'>
                <span className='w-14 h-8 border flex items-center justify-center rounded-sm border-[#C4C4C4] text-[#C4C4C4]'>06:00</span>
                <span className='w-[275px] h-[1px] bg-[#C4C4C4]'></span>
              </p>
           </div>
        </div>

        <p className='text-[#161616] text-[16px] font-bold mb-6'>Данные арендатора</p>

        <div className='w-full flex items-center gap-4 mb-8'>
            <div className='w-[328px] border border-gray-400 rounded-[4px] h-14 px-4 flex items-center justify-between'>
               <p className='text-[16px]'>
                <span className='text-[12px]'>Имя</span> <br />
                <span>Константин</span>
               </p>
               
            </div>
            <div className='w-[328px] border h-14 border-gray-400 rounded-[4px]  px-4 flex items-center justify-between'>
              <p className='text-[#161616] text-[16px] font-normal'>Дата начала и окончания аренды<span className='text-[#FC4068] font-bold'>*</span></p>
             
            </div>
        </div>
        <div className='w-full flex items-center gap-4 mb-8'>
            
            <div className='w-[328px] border h-14 border-[#FC3172] rounded-[4px]  px-4 flex items-center justify-between'>
               <p className='text-[16px] text-[#FC3172]'>Укажите номер телефона</p>
            </div>
            <div className='w-[328px] border h-14 border-gray-400 rounded-[4px]  px-4 flex items-center justify-between'>
              <p className='text-[#161616] text-[16px] font-normal'>E-mail<span className='text-[#FC4068] font-bold'>*</span></p>
             
            </div>
        </div>

        <div className='w-[670px] border border-[#8759F2] rounded-[4px] h-14 px-4 flex items-center justify-between mb-8'>
               <p className='text-[16px]'>
                <span className='text-[12px]'>Компания</span> <br />
                <span>ГлобалАртс</span>
               </p>
            </div>

        <div className='flex items-center gap- mb-14'>
          <p className='text-[#161616] text-[16px] font-normal'>Тип налогообложения<span className='text-[#FC4068] font-bold'>*</span></p>
          <div className='flex gap-4 items-center'>
                 <div className='flex gap-2 items-center'>
                   <input type="checkbox" name="" id="" className='w-5 h-5 rounded-full cursor-pointer' />
                   <p className='text-[16px] text-[#161616] font-normal'>НДС</p>
                 </div>
                 <div className='flex gap-2 items-center'>
                   <input type="checkbox" className='w-5 h-5 rounded-full cursor-pointer'  name="" id="" />
                   <p className='text-[16px] text-[#161616] font-normal'>УСН</p>
                 </div>
               </div>
        </div>

        <p className='text-[#161616] text-[16px] font-bold mb-6'>Данные объекта</p>
        <div className='w-[670px] border border-[#1A1A1A80] rounded-[4px] h-14 px-4 flex items-center justify-between mb-8'>
               <p className='text-[16px]'>
                <span>Адрес объекта</span>
               </p>
            </div>

          <div className='flex w-[670px]  items-center justify-between mb-14 '>
            <div className='flex gap-8 max-w-[328px]'>
              <div><input type="checkbox" name="" className='w' id="" /></div>
              <div>
              <p className='text-[12px]'>Требуется подъем
              или <br /> нужно пронести более 100 м</p>
              <p className='text-[10px]'>Уважаемый Клиент, расчет стоимости доставки и погрузо-разгрузочных работ производится через менеджера. Благодарим за понимание.</p>
              </div>
            </div>
            <div>
              <p className='text-[#161616] font-bold text-[12px]'>Время готовности
              площадки:</p>
              <div>
              <p className='text-[12px] font-bold mb-2'>Время начала монтажа:</p>
              <p className='flex items-center'>
                <span className='w-14 h-8 border flex items-center justify-center rounded-sm border-[#C4C4C4] text-[#C4C4C4]'>06:00</span>
                <span className='w-[275px] h-[1px] bg-[#C4C4C4]'></span>
              </p>
           </div>
            </div>
          </div>
  
          <p className='text-[#161616] text-[16px] font-bold mb-6'>Комментарий</p>
          <textarea className='w-[680px] border border-[#1A1A1A80] rounded-[4px] px-4 flex items-center justify-between h-[117px] mb-14'>
          </textarea>
          <div className='w-[680px] bg-[#161616] h-[1px] mb-8'>
          </div>
          <div className='flex max-w-[680px] justify-between items-start mb-24'>
            <div className='max-w-[328px]'>
                <p className=' text-[16px] font-bold text-[#161616]'>Итого</p>
                <p className=' text-[32px] font-bold text-[#161616] mb-2'>999000 ₽</p>
                <p className='text-[#161616] text-[12px] font-normal leading-4 mb-6'>Расчет стоимости не подразумевает наличие товара. Товар будет оперативно предоставлен менеджерами после оформления заказа</p>
            </div>
            <div className='max-w-[328px] '>
               <div className="text-white flex font-bold justify-center items-center w-[208px] h-10 bg-[url('./korzina/taped.svg')] bg-cover">Арендовать</div>
               <p className='w-[213px] text-[10px] mt-8 text-[#000000] opacity-50'>Нажимая кнопку отправить, вы соглашаетесь с политикой обработки персональных данных</p>
            </div>
          </div>
      

          <p className='text-[#161616] text-[22px] font-bold mb-6'>Вам может подойти</p>

          
          <div className='lg:grid grid-cols-4 max-w-[1000px] mx-auto mb-16 mr-96'>
            <div className='max-w-[208px] h-[477px]  mx-auto  px-6 pt-[31px] pb-[20px]'>
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
            <div className='w-[208px] h-[477px]  mx-auto  px-6 pt-[31px] pb-[20px]'>
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
            <div className='w-[208px] h-[477px]  mx-auto  px-6 pt-[31px] pb-[20px]'>
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
            <div className='w-[208px] h-[477px] mx-auto  px-6 pt-[31px] pb-[20px]'>
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

  


       <p className='text-[#161616] text-[22px] font-bold mb-6'>Условия доставки</p>
       <p className='text-[16px] mb-24 max-w-[1000px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
       <p className='text-[#161616] text-[22px] font-bold mb-6'>Аренда мебели</p>
       <p className='text-[16px] mb-24 max-w-[1000px] text-justify'>Аренда мебели становится все более популярной услугой для организации мероприятий. Деловые вечеринки, презентации, фуршеты, выставки, шоу-показы – события, которые не обходятся без обустройства площадки с использованием фурнитуры, декора, текстиля и другого реквизита. Важно, чтобы все элементы оформления были в должном виде и соответствовали стилю торжества.
       Для этого выбирайте надежных и опытных партнеров в сопровождении праздников. Наша фирма предлагает большой выбор решений для организации любого по масштабности культурного или делового мероприятия в Москве и по всей России. У нас отлажен сервис и благоприятные условия для удовлетворения любых запросов клиентов. </p>
    </div>
  )
}

export default Korzina
