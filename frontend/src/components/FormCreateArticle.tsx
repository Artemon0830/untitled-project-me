import React from "react";
import { useForm } from "react-hook-form";
import { Currency, IProductCreateArticle, ProductCategory } from "../models/IArticle-interface";
import { useNavigate } from "react-router";
import { createArticle } from "../services/backend.app.servise";

const FormCreateArticle = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<IProductCreateArticle>({
    mode: "all",
  });

  const onSubmit = async (data: IProductCreateArticle) => {
    try {
      const createdArticle = await createArticle(data);
      navigate(`/articles/${createdArticle?._id}`);
    } catch (error) {
      console.error("Failed to create article", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label>
        Title
        <input {...register("title", { required: true })} />
        {errors.title && <span>{errors.title.message}</span>}
      </label>

      <label>
        Description
        <input {...register("description", { required: true })} />
         {errors.description && <span>{errors.description.message}</span>}
      </label>

      <label>
        Content
        <textarea {...register("content")} />
         {errors.content && <span>{errors.content.message}</span>}
      </label>

      <label>
        Category
        <select {...register("category", { required: true })}>
          {Object.values(ProductCategory).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
         {errors.category && <span>{errors.category.message}</span>}
      </label>

      <label>
        Price
        <input type="number" {...register("price", { required: true, min: 0 })} />
        {errors.price && <span>{errors.price.message}</span>}
              </label>

      <label>
        Currency:
        <select {...register("currency", { required: true })}>
          {Object.values(Currency).map(curr => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
        {errors.currency && <span>{errors.currency.message}</span>}
      </label>

      <label>
        Stock Quantity
        <input type="number" {...register("stockQuantity", { min: 0 })} />
        {errors.stockQuantity && <span>{errors.stockQuantity.message}</span>}
      </label>

      <label>
        Available
        <input type="checkbox" {...register("available")} />
        {errors.available && <span>{errors.available.message}</span>}
      </label>
      <button type="submit" disabled={!isValid}>
        Create
      </button>
    </form>
  );
};

export default FormCreateArticle;
