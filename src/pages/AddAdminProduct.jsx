import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddAdminProduct = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: null,
    stock: null,
    category: "",
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    used_outside: null,
    // size: '',
    width: "",
    height: "",
    radius: "",
    color: "",
    shape: "Круг",
    article: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (name.startsWith("image")) {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "radio" && name === "used_outside") {
      setFormData({ ...formData, [name]: value === "true" });
    } else if (type === "number") {
      setFormData({ ...formData, [name]: value === "" ? "" : Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async () => {
    setLoading(true);
    const {
      name,
      description,
      price,
      stock,
      category,
      image1,
      image2,
      image3,
      image4,
      height,
      width,
      radius,
      color,
      article,
    } = formData;

    if (
      !name ||
      !description ||
      price <= 0 ||
      stock < 0 ||
      !category ||
      !image1 ||
      !color ||
      !width ||
      !height ||
      !radius ||
      !article
    ) {
      toast.error("Пожалуйста, заполните все поля корректно!");
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("description", description);
    form.append("price", price);
    form.append("stock", stock);
    form.append("category", category);
    form.append("image1", image1);
    if (image2) form.append("image2", image2);
    if (image3) form.append("image3", image3);
    if (image4) form.append("image4", image4);
    form.append("used_outside", formData.used_outside || "");
    form.append("width", formData.width);
    form.append("height", formData.height);
    form.append("radius", formData.radius);
    form.append("article", formData.article);
    form.append("color", formData.color);
    form.append("shape", formData.shape);

    try {
      const res = await axios.post("https://rentback-0v37.onrender.com/api/products", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Продукт успешно добавлен!");
      setFormData({
        name: "",
        description: "",
        price: null,
        stock: null,
        category: "",
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        used_outside: null,
        width: "",
        height: "",
        radius: "",
        color: "",
        shape: "Круг",
      });
    } catch (err) {
      console.error(err);
      toast.error("Ошибка при добавлении продукта!");
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-[80vh]">
      <div className="md:min-w-[960px] mx-auto px-4 pt-8 bg-white rounded-xl space-y-4">
        <h2 className="md:text-3xl text-xl mb-8 font-semibold">
          Добавить новый продукт
        </h2>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-5 items-center gap-x-5 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Название продукта"
            className="input-style py-2 md:py-3 px-5 rounded-md border-2 border-[#4a6cc9] focus:border-[#60a5fa] w-full"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Цена"
            className="input-style md:py-3 py-2 px-5 rounded-md border-2 border-[#4a6cc9] focus:border-[#60a5fa] w-full"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="number"
            name="stock"
            placeholder="Цена со второго дня"
            className="input-style md:py-3 py-2 px-5 rounded-md border-2 border-[#4a6cc9] focus:border-[#60a5fa] w-full"
            value={formData.stock}
            onChange={handleChange}
          />
          <input
            type="text"
            name="height"
            placeholder="Высота продукта"
            className="input-style py-2 px-5 rounded-md border-2 border-[#4a6cc9]"
            value={formData.height}
            onChange={handleChange}
          />
          <input
            type="text"
            name="width"
            placeholder="Ширина продукта"
            className="input-style py-2 px-5 rounded-md border-2 border-[#4a6cc9]"
            value={formData.width}
            onChange={handleChange}
          />
          <input
            type="text"
            name="radius"
            placeholder="Диаметр продукта"
            className="input-style py-2 px-5 rounded-md border-2 border-[#4a6cc9]"
            value={formData.radius}
            onChange={handleChange}
          />
          <input
            type="text"
            name="color"
            placeholder="Цвет продукта"
            className="input-style py-2 px-5 rounded-md border-2 border-[#4a6cc9]"
            value={formData.color}
            onChange={handleChange}
          />
          <select
            name="shape"
            onChange={handleChange}
            className="input-style py-2 px-5 rounded-md border-2 border-[#4a6cc9]"
          >
            <option value="Круг">Круг</option>
            <option value="Квадрат">Квадрат</option>
            <option value="Другое">Другое</option>
          </select>
          {/* <input type="text" name="shape" placeholder="Форма продукта" className="input-style py-2 px-5 rounded-md border-2 border-[#4a6cc9]" value={formData.shape} onChange={handleChange} /> */}
          <textarea
            name="description"
            placeholder="Описание"
            className="input-style h-32 py-2 md:py-3 px-5 rounded-md border-2 border-[#4a6cc9] focus:border-[#60a5fa] w-full"
            value={formData.description}
            onChange={handleChange}
          />
          <textarea
            name="article"
            placeholder="Артикул"
            className="input-style h-32 py-2 md:py-3 px-5 rounded-md border-2 border-[#4a6cc9] focus:border-[#60a5fa] w-full"
            value={formData.article}
            onChange={handleChange}
          />
        </div>

        <div className="flex h-auto items-center">
          <p className="font-semibold text-sm md:text-lg text-blue-500">
            Могу ли я использовать его на улице?
          </p>
          <div className="flex h-20 ml-6 items-center gap-x-5">
            <label className="text-lg">
              <input
                type="radio"
                name="used_outside"
                value="true"
                checked={formData.used_outside === true}
                onChange={handleChange}
              />{" "}
              да
            </label>
            <label className="text-lg">
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
        </div>

        <label className="md:text-xl text-md flex flex-col gap-y-4 font-semibold">
          Загрузить изображения продукта:
          <input
            type="file"
            accept="image/*"
            name="image1"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <input
            type="file"
            accept="image/*"
            name="image2"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <input
            type="file"
            accept="image/*"
            name="image3"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <input
            type="file"
            accept="image/*"
            name="image4"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </label>

        <label className="flex items-center gap-x-5 w-[330px] md:w-[400px]">
          <p className="md:text-xl text-md font-semibold">
            Выберите категорию:
          </p>
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
          </select>
        </label>

        <button
          className="px-6 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Добавляется..." : "Добавить продукт"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddAdminProduct;
