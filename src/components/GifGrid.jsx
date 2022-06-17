import { useState, useEffect } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const { images, isLoading } = useFetchGifs(category);

    // Cuando la lógica crece mucho, es recomendable crear un customHook
    // De manera que el gódigo de abajo se resume al de arriba
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // // useEffect sirve para disparar efectos secundarios
    // // son procesos que se quieren ejecutar cuano suceda algo
    // useEffect( () => {
    //     // Código a ejecutar
    //     getImages();
    //     // getGifs(category)
    //     //     .then( newImages => setImages(newImages) );
    // }, [  ] )   // Arreglo de dependencias, si está vacío, solo se ejecuta cuando
    //             // se construye el componente

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )  //  && Si es true, ejecuta el código, and lógico
            }
            <div className="card-grid" >
                {
                    // Forma 1: componente aqui mismo, con desestructuración
                    // images.map( ({id, title}) => ( 
                        // <li key={id} >{title}</li>
                    
                    // Forma 2: componente aparte, sin desestructuración
                    // images.map( (image) => ( 
                    //     <GifItem 
                    //         key={image.id}
                    //         title={image.title}
                    //         url={image.url}
                    //     />
                    // ))

                    // Forma3: Esparcir el image con operador spread
                    // De esta manera, el componente recibe cada una de las 
                    // propiedades como properties (props)
                    images.map( (image) => ( 
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
