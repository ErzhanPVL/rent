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
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (files && files.length > 0) {
      // Handle file inputs like 'image', 'cover'
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      // Handle boolean checkboxes
      setFormData({ ...formData, [name]: checked });
    } else if (type === "radio") {
      if (name === "used_outside") {
        // Specific radio field parsed as boolean
        setFormData({ ...formData, [name]: !formData.used_outside });
      } else {
        // Other radios (like only_under_cover)
        setFormData({ ...formData, [name]: value === "true" });
      }
    } else if (type === "number") {
      // Convert number fields to actual numbers
      setFormData({ ...formData, [name]: value === "" ? "" : Number(value) });
    } else {
      // Default case for text, textarea, etc.
      setFormData({ ...formData, [name]: value });
    }
  };

  const [fileInputs, setFileInputs] = useState([0]); // unique IDs for each input
  const [files, setFiles] = useState({});

  const handleFileChange = (id, file) => {
    setFiles((prev) => ({ ...prev, [id]: file }));
  };

  const addFileInput = () => {
    setFileInputs((prev) => [...prev, Date.now()]);
  };

  const handleSubmit = async () => {
    setLoading(true);
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
      price <= 0 ||
      stock < 0 ||
      !category ||
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

    Object.values(files).forEach((file) => {
      if (file) {
        form.append("images", file); // 'images' will be an array
      }
    });

    form.append("name", name);
    form.append("description", description);
    form.append("price", price);
    form.append("stock", stock);
    form.append("category", category);
    form.append("used_outside", formData.used_outside);
    form.append("width", formData.width);
    form.append("height", formData.height);
    form.append("article", formData.article);
    form.append("radius", formData.radius);
    form.append("color", formData.color);
    form.append("shape", formData.shape);
    form.append("only_under_cover", formData.only_under_cover);
    form.append("journalish", formData.journalish);
    form.append("bar_and_cocktailish", formData.bar_and_cocktailish);
    form.append("standard", formData.standard);
    form.append("folding_furniture", formData.folding_furniture);
    form.append("led_furniture", formData.led_furniture);

    // console.log(form)
    try {
      const res = await axios.post("http://localhost:8000/api/products", form, {
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
        used_outside: null,
        width: "",
        height: "",
        radius: "",
        color: "",
        shape: "Круг",
        only_under_cover: null,
        bar_and_cocktailish: false,
        standard: false,
        journalish: false,
        folding_furniture: false,
        led_furniture: false,
      });
    } catch (err) {
      console.log(err);
      toast.error("Ошибка при добавлении продукта!");
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-[80vh]">
      <div className="md:min-w-[960px] mx-auto px-4 py-8 bg-white rounded-xl space-y-4">
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
            placeholder="Акция"
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
            name="article"
            placeholder="Артикул"
            className="input-style py-2 px-5 rounded-md border-2 border-[#4a6cc9]"
            value={formData.article}
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
                value={formData.used_outside}
                checked={formData.used_outside === true}
                onChange={handleChange}
              />{" "}
              да
            </label>
            <label className="text-lg">
              <input
                type="radio"
                name="used_outside"
                value={!formData.used_outside}
                checked={formData.used_outside === false}
                onChange={handleChange}
              />{" "}
              нет
            </label>
          </div>
        </div>

        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="only_under_cover"
              value={true}
              // checked={formData.only_under_cover}
              onChange={handleChange}
            />{" "}
            На улице, только под навесом
          </label>
          <label>
            <input
              type="radio"
              name="only_under_cover"
              value={false}
              // checked={formData.only_under_cover}
              onChange={handleChange}
            />{" "}
            На улице без навеса
          </label>
        </div>

        {/* Checkboxes */}
        <div className="space-y-2">
          <label>
            <input
              type="checkbox"
              name="journalish"
              checked={formData.journalish}
              onChange={handleChange}
            />{" "}
            Журнальные
          </label>
          <label>
            <input
              type="checkbox"
              name="bar_and_cocktailish"
              checked={formData.bar_and_cocktailish}
              onChange={handleChange}
            />{" "}
            Барные и коктейльные
          </label>
          <label>
            <input
              type="checkbox"
              name="standard"
              checked={formData.standard}
              onChange={handleChange}
            />{" "}
            Стандартые
          </label>
          <label>
            <input
              type="checkbox"
              name="folding_furniture"
              checked={formData.folding_furniture}
              onChange={handleChange}
            />{" "}
            Складная мебель
          </label>
          <label>
            <input
              type="checkbox"
              name="led_furniture"
              checked={formData.led_furniture}
              onChange={handleChange}
            />{" "}
            LED мебель
          </label>
        </div>

        {fileInputs.map((id) => (
          <div key={id}>
            <input
              type="file"
              onChange={(e) =>
                handleFileChange(id, e.target.files?.[0] || null)
              }
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addFileInput}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          + Add Image
        </button>

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
            <option>Растения</option>
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
