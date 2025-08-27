import React, { useState } from 'react';
import CustomDatePicker from '../components/CustomDatePicker';

const OrderData = ({ data }) => {
    const [formData, setFormData] = useState({
    rentalDates: {
      startDate: null,
      endDate: null
    },
    installationTimes: { 
      start: "08:00",
      end: "06:00"
    },
    renterInfo: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      company: ''
    },
    taxationType: '',
    objectInfo: {
      address: '',
      requiresLifting: false,
      siteReadinessTime: "06:00"
    },
    comment: '',
  });


  const totalPrice = data
    .filter(item => item.price !== null)
    .reduce((sum, item) => sum + item.price, 0);

  const handleStartDate = (value) => {
    setFormData(prev => ({
      ...prev,
      rentalDates: {
        ...prev.rentalDates,
        startDate: value
      }
    }));
  };

  const handleEndDate = (value) => {
    setFormData(prev => ({
      ...prev,
      rentalDates: {
        ...prev.rentalDates,
        endDate: value
      }
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data to submit:', {
      ...formData,
      totalPrice,
      installationTimes: {
        start: '08:00',
        end: '06:00'
      }
    }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className='text-[#161616] text-lg md:text-[32px] font-bold mb-7'>Оформление заказа</p>
      <p className='text-[#161616] text-sm md:text-[16px] font-bold mb-6'>Дата начала и окончания аренды<span className='text-[#FC4068] font-bold'>*</span></p>

      <div className='max-w-[670px]'>
        <div className="w-full flex items-center gap-x-2">
          <CustomDatePicker
            label="Дата начала аренды"
            className='w-[50%]'
            prefix="С"
            onChange={handleStartDate}
          />
          <div className='w-8 h-[2px] bg-gray-400'></div>
          <CustomDatePicker
            label="Дата окончания аренды"
            className='w-[50%]'
            prefix="С"
            onChange={handleEndDate}
          />
        </div>
      </div>
      
       <div className='w-full md:flex block items-center my-4 gap-4 mb-14'>
        <div>
          <p className='text-[12px] font-bold mb-2'>Время начала монтажа:</p>
          <p className='flex items-center'>
            <span className='w-[115px] h-[1px] bg-[#C4C4C4]'></span>
            <span className='w-14 h-8 border flex items-center justify-center rounded-sm border-[#8759F2] text-[#8759F2]'>
              {formData.installationTimes.start}
            </span>
            <span className='w-[160px] h-[1px] bg-[#C4C4C4]'></span>
          </p>
        </div>
        <div>
          <p className='text-[12px] font-bold mb-2'>Время начала демонтажа:</p>
          <p className='flex items-center'>
            <span className='w-14 h-8 border flex items-center justify-center rounded-sm border-[#C4C4C4] text-[#C4C4C4]'>
              {formData.installationTimes.end}
            </span>
            <span className='w-[275px] h-[1px] bg-[#C4C4C4]'></span>
          </p>
        </div>
      </div>
      <div className='flex md:flex-row flex-col justify-self-start items-center gap-4 mb-8'>
        <div>
          <input 
            type="text" 
            name="renterInfo.name"
            value={formData.renterInfo.name}
            onChange={handleInputChange}
            className='w-[328px] border-2 border-gray-400 focus:ring-4 focus:border-[#8759F2] focus:outline-none rounded-[4px] h-14 px-4 flex items-center justify-between' 
            placeholder='Имя' 
          /> 
        </div>
        <div>
          <input 
            type="text" 
            name="renterInfo.surname"
            value={formData.renterInfo.surname}
            onChange={handleInputChange}
            className='w-[328px] border-2 border-gray-400 focus:ring-4 focus:border-[#8759F2] focus:outline-none rounded-[4px] h-14 px-4 flex items-center justify-between' 
            placeholder='Фамилия' 
          /> 
        </div>
      </div>
      
      <div className='flex md:flex-row flex-col justify-self-start items-center gap-4 mb-8'>
        <div>
          <input 
            type="number" 
            name="renterInfo.phone"
            value={formData.renterInfo.phone}
            onChange={handleInputChange}
            className='w-[328px] border-2 border-gray-400 focus:ring-4 focus:border-[#8759F2] focus:outline-none rounded-[4px] h-14 px-4 flex items-center justify-between' 
            placeholder='Укажите номер телефона' 
          /> 
        </div>
        <div>
          <input 
            type="email" 
            name="renterInfo.email"
            value={formData.renterInfo.email}
            onChange={handleInputChange}
            className='w-[328px] border-2 border-gray-400 focus:ring-4 focus:border-[#8759F2] focus:outline-none rounded-[4px] h-14 px-4 flex items-center justify-between' 
            placeholder='E-mail' 
          /> 
        </div>
      </div>

      <div className='mb-6'>
        <input 
          type="text" 
          name="renterInfo.company"
          value={formData.renterInfo.company}
          onChange={handleInputChange}
          className='w-[672px] border-2 border-gray-400 focus:ring-1 focus:border-[#8759F2] focus:outline-none rounded-[4px] h-14 px-4 flex items-center justify-between' 
          placeholder='Компания' 
        /> 
      </div>
      

      <div className='flex items-center gap- mb-14'>
        <p className='text-[#161616] text-[16px] mr-4 font-normal'>Тип налогообложения<span className='text-[#FC4068] font-bold'>*</span></p>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 items-center'>
            <input 
              type="radio" 
              name="taxationType"
              value="НДС"
              checked={formData.taxationType === "НДС"}
              onChange={handleInputChange}
              className='w-5 h-5 rounded-full cursor-pointer' 
            />
            <p className='text-[16px] text-[#161616] font-normal'>НДС</p>
          </div>
          <div className='flex gap-2 items-center'>
            <input 
              type="radio" 
              name="taxationType"
              value="УСН"
              checked={formData.taxationType === "УСН"}
              onChange={handleInputChange}
              className='w-5 h-5 rounded-full cursor-pointer' 
            />
            <p className='text-[16px] text-[#161616] font-normal'>УСН</p>
          </div>
        </div>
      </div>
      
      <div>
        <input 
          type="text" 
          name="objectInfo.address"
          value={formData.objectInfo.address}
          onChange={handleInputChange}
          className='w-[672px] mb-6 border-2 border-gray-400 focus:ring-1 focus:border-[#8759F2] focus:outline-none rounded-[4px] h-14 px-4 flex items-center justify-between' 
          placeholder='Адрес объекта' 
        /> 
      </div>
      
      <div className='flex md:flex-row flex-col justify-self-start w-[350px] md:w-[670px] items-center justify-between mb-14'>
        <div className='flex gap-8 mb-4 max-w-[328px]'>
          <div>
            <input 
              type="checkbox" 
              name="objectInfo.requiresLifting"
              checked={formData.objectInfo.requiresLifting}
              onChange={handleInputChange}
              className='mr-4' 
            />
          </div>
          <div>
            <p className='md:text-[12px] text-[10px]'>Требуется подъем или <br /> нужно пронести более 100 м</p>
            <p className='text-[10px]'>Уважаемый Клиент, расчет стоимости доставки и погрузо-разгрузочных работ производится через менеджера. Благодарим за понимание.</p>
          </div>
        </div>
      </div>
  
      <p className='text-[#161616] text-[16px] font-bold mb-6'>Комментарий</p>
      <textarea 
        name="comment"
        value={formData.comment}
        onChange={handleInputChange}
        className='md:w-[680px] w-[350px] border-2 border-gray-400 focus:ring-2 focus:border-[#8759F2] focus:outline-none rounded-[4px] min-h-[117px] px-4 flex items-center justify-between'
      />
      

      <div className='md:w-[680px] w-[350px] bg-[#161616] h-[1px] mb-8'/>
      <div className='flex md:flex-row flex-col justify-self-start max-w-[680px] justify-between items-start mb-6 md:mb-24'>
        <div className='max-w-[328px]'>
          <p className='text-[16px] font-bold text-[#161616]'>Итого</p>
          <p className='text-lg md:text-[32px] font-bold text-[#161616] mb-2'>{totalPrice.toLocaleString()} ₽</p>
          <p className='text-[#161616] text-[12px] font-normal leading-4 mb-6'>
            Расчет стоимости не подразумевает наличие товара. Товар будет оперативно предоставлен менеджерами после оформления заказа
          </p>
        </div>
        <div className='max-w-[328px]'>
          <button type="submit" className="text-white flex font-bold justify-center items-center w-[208px] h-10 bg-[url('./korzina/taped.svg')] bg-cover">
            Арендовать
          </button>
          <p className='w-[213px] text-[10px] mt-8 text-[#000000] opacity-50'>
            Нажимая кнопку отправить, вы соглашаетесь с политикой обработки персональных данных
          </p>
        </div>
      </div>
    </form>
  );
};

export default OrderData;