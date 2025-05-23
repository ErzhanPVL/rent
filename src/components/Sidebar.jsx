import React, { useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContext';

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { copyofProducts, setProducts } = useContext(ProductsContext);

  const selectedCategory = searchParams.get("category");

  const updateFilters = (value) => {
    const newParams = new URLSearchParams();
    if (value) newParams.set("category", value);
    navigate(`/rabotaem?${newParams.toString()}`);

    const filtered = value
      ? copyofProducts.filter(p => p.category === value)
      : copyofProducts;
    setProducts(filtered);
  };

  const categories = [
    { name: "Акции", img: "1.svg" },
    { name: "Новинки", img: "2.svg" },
    { name: "Свое производство", img: "3.svg" },
    { name: "Столы", img: "4.svg" },
    { name: "Стулья", img: "5.svg" },
    { name: "Мягкая мебель", img: "6.svg" },
    { name: "Стойки", img: "7.svg" },
    { name: "Для детей", img: "8.svg" },
    { name: "Гримерные/гардероб", img: "9.svg" },
    { name: "Ограждения", img: "10.svg" },
    { name: "Для улицы", img: "11.svg" },
    { name: "Декор", img: "12.svg" },
    { name: "Готовые комплекты", img: "13.svg" },
    { name: "Техника", img: "14.svg" },
    { name: "Хранение", img: "15.svg" },
    { name: "Текстиль", img: "16.svg" },
  ];

  return (
    <div className='w-[350px]'>
      {categories.map(({ name, img }) => {
        const isActive = selectedCategory === name;

        const className = `flex items-center group gap-2 w-[272px] h-[54px] rounded-[8px] px-4 mb-2 cursor-pointer ${
          isActive ? 'bg-[#FC3172]/10' : 'bg-[#F9F9F9]'
        }`;

        return (
          <div
            key={name}
            className={className}
            onClick={() => updateFilters(name)}
          >
            <img src={`/navbarimages/${img}`} className='w-6 cursor-pointer' alt={name} />
            <span className={`text-[16px] font-normal ${
              isActive
                ? 'text-[#FC3172] font-bold'
                : 'group-hover:font-bold group-hover:text-[#FC3172]'
            }`}>
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
