'use client'
import React, { useEffect, useState } from 'react'
export default function FormularioContador() {


    const [texto, setTexto] = useState<string>('');
    const [contadorLetras, setContadorLetras] = useState<number>(0);
    const [colorTexto, setColorTexto] = useState<string>('text-yellow-500'); 

    
    useEffect(() => {
        const cantidad = texto.length;
        setContadorLetras(cantidad);

        
        if (cantidad < 10) {
            setColorTexto('text-yellow-500'); 
        } else if (cantidad <= 50) {
            setColorTexto('text-green-500'); 
        } else {
            setColorTexto('text-red-500');
        }





    }, [texto]); 

    function manejarTexto(e: any): void {
        setTexto(e.target.value)
    }

    return (
        <div className="w-full max-w-lg">
            <h1 className="text-3xl font-bold mb-4 text-sky-400">
                Contador de Palabras
            </h1>

            <textarea
                className='w-full p-2 bg-slate-700 text-white rounded-md border border-slate-600 focus:ring-2 focus:ring-sky-500 focus:outline-none'
                rows={10}

                placeholder='Ingresar texto...'
                
                value={texto}

                onChange={manejarTexto}
            >
            </textarea>

            
            <h3 className={`text-xl mt-4 font-bold ${colorTexto}`}>
                Cantidad de letras: {contadorLetras}
            </h3>
        </div>
    )
}