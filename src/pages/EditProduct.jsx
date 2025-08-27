import React, { useContext, useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductsContext } from "../context/ProductContext";
import axios from "axios";

const EditProduct = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { products } = useContext(ProductsContext);
  const product = products.find((item) => item.id.toString() === id);

  const [sending, setSending] = useState(false);
  const [fileInputs, setFileInputs] = useState([]);
  const [files, setFiles] = useState({});
  const [newlyAddedImagesPreview, setNewlyAddedImagesPreview] = useState([]);
  const [replacedImages, setReplacedImages] = useState({}); // for edited images

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: null,
    stock: null,
    category: "",
    used_outside: true,
    width: "",
    height: "",
    radius: "",
    only_under_cover: null,
    journalish: false,
    bar_and_cocktailish: false,
    standard: false,
    folding_furniture: false,
    led_furniture: false,
    color: "",
    shape: "Круг",
    article: "",
    images: [],
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "radio") {
      setFormData({ ...formData, [name]: value === "true" });
    } else if (type === "number") {
      setFormData({ ...formData, [name]: value === "" ? "" : Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (id, file, isReplacement = false) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (isReplacement) {
        // Replace in formData.images
        setFormData((prev) => {
          const updatedImages = [...prev.images];
          updatedImages[id] = { url: reader.result }; // preview
          return { ...prev, images: updatedImages };
        });
        setReplacedImages((prev) => ({ ...prev, [id]: file }));
      } else {
        setFiles((prev) => ({ ...prev, [id]: file }));
        setNewlyAddedImagesPreview((prev) => [...prev, { url: reader.result }]);
      }
    };
    reader.readAsDataURL(file);
  };

  const addFileInput = () => setFileInputs((prev) => [...prev, Date.now()]);

  const handleSubmit = async () => {
    setSending(true);
    const {
      name,
      description,
      price,
      stock,
      category,
      height,
      width,
      radius,
      color,
      article,
    } = formData;

    if (
      !name ||
      !description ||
      isNaN(price) ||
      price <= 0 ||
      isNaN(stock) ||
      stock < 0 ||
      !category ||
      !color ||
      !width ||
      !height ||
      !radius ||
      !article
    ) {
      toast.error("Пожалуйста, заполните все поля корректно!");
      setSending(false);
      return;
    }

    const form = new FormData();

    // Upload newly added files
    Object.values(files).forEach((file) => {
      if (file) {
        form.append("images", file);
      }
    });

    // Add replaced files
    Object.entries(replacedImages).forEach(([index, file]) => {
      form.append(`replacedImages[${index}]`, file); // Backend can parse index and replace it
    });

    // Add rest of the fields
    Object.entries(formData).forEach(([key, value]) => {
      if (
        key !== "images" && // handled separately
        value !== undefined &&
        value !== null
      ) {
        form.append(key, value);
      }
    });

    try {
      const res = await axios.put("http://localhost:8000/api/products/" + id, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Изменения сохранены!");
    } catch (err) {
      console.error(err);
      toast.error("Ошибка при сохранении!");
    }

    setSending(false);
  };

  return (
    <div className="w-full min-h-[80vh]">
      <div className="md:min-w-[960px] mx-auto px-4 py-8 bg-white rounded-xl space-y-4">
        <h2 className="md:text-3xl text-xl mb-8 font-semibold">
          Редактировать продукт
        </h2>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Название продукта"
            className="input-style py-2 md:py-3 px-5 rounded-md border-2 border-blue-500"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Цена"
            className="input-style py-2 md:py-3 px-5 rounded-md border-2 border-blue-500"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="number"
            name="stock"
            placeholder="Акция"
            className="input-style py-2 md:py-3 px-5 rounded-md border-2 border-blue-500"
            value={formData.stock}
            onChange={handleChange}
          />
          <input
            type="text"
            name="height"
            placeholder="Высота продукта"
            className="input-style py-2 px-5 rounded-md border-2 border-blue-500"
            value={formData.height}
            onChange={handleChange}
          />
          <input
            type="text"
            name="width"
            placeholder="Ширина продукта"
            className="input-style py-2 px-5 rounded-md border-2 border-blue-500"
            value={formData.width}
            onChange={handleChange}
          />
          <input
            type="text"
            name="radius"
            placeholder="Диаметр продукта"
            className="input-style py-2 px-5 rounded-md border-2 border-blue-500"
            value={formData.radius}
            onChange={handleChange}
          />
          <input
            type="text"
            name="article"
            placeholder="Артикул"
            className="input-style py-2 px-5 rounded-md border-2 border-blue-500"
            value={formData.article}
            onChange={handleChange}
          />
          <input
            type="text"
            name="color"
            placeholder="Цвет продукта"
            className="input-style py-2 px-5 rounded-md border-2 border-blue-500"
            value={formData.color}
            onChange={handleChange}
          />
          <select
            name="shape"
            value={formData.shape}
            onChange={handleChange}
            className="input-style py-2 px-5 rounded-md border-2 border-blue-500"
          >
            <option value="Круг">Круг</option>
            <option value="Квадрат">Квадрат</option>
            <option value="Другое">Другое</option>
          </select>
          <textarea
            name="description"
            placeholder="Описание"
            className="input-style h-32 py-2 md:py-3 px-5 rounded-md border-2 border-blue-500 md:col-span-2"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-6">
          <p className="font-semibold text-blue-500">
            Могу ли я использовать его на улице?
          </p>
          <label>
            <input
              type="radio"
              name="used_outside"
              value="true"
              checked={formData.used_outside === true}
              onChange={handleChange}
            />{" "}
            да
          </label>
          <label>
            <input
              type="radio"
              name="used_outside"
              value="false"
              checked={formData.used_outside === false}
              onChange={handleChange}
            />{" "}
            нет
          </label>
        </div>
        <div className="space-x-4">
          <label>
            <input
              type="radio"
              name="only_under_cover"
              value="true"
              checked={formData.only_under_cover === true}
              onChange={handleChange}
            />{" "}
            На улице, только под навесом
          </label>
          <label>
            <input
              type="radio"
              name="only_under_cover"
              value="false"
              checked={formData.only_under_cover === false}
              onChange={handleChange}
            />{" "}
            На улице без навеса
          </label>
        </div>

        <div className="space-y-2">
          {[
            { key: "journalish", label: "Журнальные" },
            { key: "bar_and_cocktailish", label: "Барные и коктейльные" },
            { key: "standard", label: "Стандартые" },
            { key: "folding_furniture", label: "Складная мебель" },
            { key: "led_furniture", label: "LED мебель" },
          ].map(({ key, label }) => (
            <label key={key} className="block">
              <input
                type="checkbox"
                name={key}
                checked={formData[key]}
                onChange={handleChange}
              />{" "}
              {label}
            </label>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-4">
            {(formData?.images || []).map((img, index) => (
              <div key={index} className="relative group w-20 h-20">
                <img
                  src={img.url}
                  className="w-20 h-20 border border-gray-300 object-cover rounded-full bg-gray-800"
                  alt="User Avatar"
                />
                <label
                  htmlFor={`replace-${index}`}
                  className="absolute w-20 h-20 inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                >
                  <FaCamera className="text-white" />
                </label>
                <input
                  type="file"
                  id={`replace-${index}`}
                  className="hidden"
                  onChange={(e) =>
                    handleFileChange(index, e.target.files?.[0], true)
                  }
                />
              </div>
            ))}

            {newlyAddedImagesPreview.map((img, index) => (
              <div key={`new-${index}`} className="relative w-20 h-20">
                <img
                  src={img.url}
                  className="w-20 h-20 border border-gray-300 object-cover rounded-full"
                  alt="New"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start">
            {fileInputs.map((id) => (
              <input
                key={id}
                type="file"
                onChange={(e) => handleFileChange(id, e.target.files?.[0] || null)}
                className="my-2"
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={addFileInput}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          + Добавить фото
        </button>
        <label className="flex items-center gap-x-4 w-full md:w-[400px]">
          <p className="font-semibold">Выберите категорию:</p>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="select border px-5 py-2 rounded-md select-accent"
          >
            <option disabled value="">
              Выберите
            </option>
            <option>Новинки</option>
            <option>Свое производство</option>
            <option>Столы</option>
            <option>Стулья</option>
            <option>Мягкая мебель</option>
            <option>Стойки</option>
            <option>Для детей</option>
            <option>Гримерные/гардероб</option>
            <option>Ограждения</option>
            <option>Для улицы</option>
            <option>Декор</option>
            <option>Готовые комплекты</option>
            <option>Техника</option>
            <option>Хранение</option>
            <option>Текстиль</option>
            <option>Растения</option>
          </select>
        </label>
        <button
          onClick={handleSubmit}
          disabled={sending}
          className="px-6 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400"
        >
          {sending ? "Сохраняется..." : "Сохранить изменения"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditProduct;
