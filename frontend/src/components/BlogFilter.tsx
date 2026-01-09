import React, {FC, useState} from 'react';
import {SetURLSearchParams} from "react-router-dom"
interface IProps{
    articleQuery:string;
    setSearchParams:SetURLSearchParams
}
const BlogFilter:FC<IProps> = ({articleQuery,setSearchParams}) => {
    const [search, setSearch] = useState(articleQuery);

    const handleSubmit = (e:any)=> {
        e.preventDefault()
        const form = e.target;
        const query = form.search.value;
        setSearchParams({article:query})

    }
    return (
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input type={"search"} name={"search"} value={search} onChange={e => setSearch(e.target.value)}/>
                <input type={"submit"} name={"Search"}/>
            </form>
        </div>
    );
};

export default BlogFilter;