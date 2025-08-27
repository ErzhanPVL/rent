import React from "react";
import { useFetch } from "../services/servis";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

const Allproducts = () => {
  const { data: products, isPending } = useFetch(
    "http://localhost:8000/api/products"
  );
  const navigate = useNavigate();

  /* ▸ edit tugmasi bosilganda mahsulotni state-da yuboramiz */
  const handleEdit = (e, product) => {
    e.stopPropagation();          // karta linkini bloklash
    navigate("/edit?id=" + product.id); // ID ham, API ham kerak emas
  };

  return (
    <div className="lg:mt-10 max-w-[1180px] min-h-[100vh]">
      <div className="w-full grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

        {isPending && <p className="my-10 text-center text-2xl">Загрузка…</p>}
        {!isPending && !products?.length && (
          <p className="my-10 text-center text-2xl">Нет товаров</p>
        )}

        {products?.map((item) => (
          <div
            key={item.id}
            className="relative border rounded-2xl p-5 cursor-pointer"
            onClick={() => navigate(`/amstersam/${item.id}`)} // detal sahifa
          >
            {/* qalam tugmasi */}
            <CiEdit
              onClick={(e) => handleEdit(e, item)}
              className="absolute top-3 right-3 text-2xl text-blue-600 hover:text-blue-800"
            />

            <img
              src={item.images?.[0]?.url}
              alt={item.name}
              className="w-[200px] h-[100px] object-contain mx-auto mb-6"
            />
            <p className="font-bold">{item.name}</p>
            <p>{item.price} ₽</p>
            <p className="text-sm">{item.stock}₽ со второго дня</p>
            <p>Цвет: {item.color}</p>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
