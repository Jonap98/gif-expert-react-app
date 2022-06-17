import {useState} from 'react'

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    // No se deben poner los hooks condicionados
    const [categories, setCategories] = useState([]);
    
    // const addCategory = () => setCategories(categories.concat('Malcolm in the middle'));
    // const addCategory = () => setCategories((cat) =>[ ...cat, 'Malcolm in the middle']);
    const onAddCategory = (newCategory) => {
        // Validando si la nueva categoría existe para ver si se inserta o no
        if(categories.includes(newCategory)) return;
        // console.log(newCategory);

        setCategories([newCategory, ...categories]);
    } 

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={(value) => onAddCategory(value) }
            />

            { 
                categories.map( category => ( 
                    <GifGrid key={category} category={category} />
                ))
            }
                
        </>
    )
}
