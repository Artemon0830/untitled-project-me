import React from "react"
import { useForm } from "react-hook-form"
import { IProductArticle, ProductCategory } from "../models/IArticle-interface"
import { valid } from "joi";
const FormCreateArticle=()=>{
  const {
        handleSubmit,
        register,
        formState: { errors, isValid }
    } = useForm<IProductArticle>({mode: "all",});

    return(<div>
<form onSubmit={()=>{handleSubmit}}>
<label>
<input type="text" {...register("available")} />
</label>
<label>
<input type="text" {...register("category")} />
</label>
<label>
<input type="text" {...register("content")} />
</label>
<label>
<input type="image" {...register("coverImage")} />
</label>
<label>
<input type="text" {...register("currency")} />
</label>
<label>
<input type="text" {...register("description")} />
</label>
<label>
<input type="number" {...register("price")} />
</label>
<label>
<input type="number" {...register("stockQuantity")} />
</label>
<label>
<input type="text" {...register("title")} />
</label>
<button type="submit" disabled={!isValid}>create</button>
</form>

    </div>)

}

export default FormCreateArticle