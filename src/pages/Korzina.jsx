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
        <div className='flex gap-11'>
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
            <div className=' bg-[#F9F9F9] w-[264px] rounded-[8px] max-h-[644px] py-8 px-6'>
               <p className=' text-[12px] font-bold text-[#161616]'>Дата начала <br />
               и окончания аренды</p>
               <p className='mb-2'>data</p>
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
    </div>
  )
}

export default Korzina
