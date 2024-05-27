// importar archivos
import { useEffect, useMemo, useState } from 'react';
import type { Product, ProductItem } from '../types';


export const useBag = () => {

    // funcion para traernos los articulos del localstorage
    const initialBag = () : ProductItem[] => {
        // obtener los datos del carrito 
        const localStorageBag = localStorage.getItem('bag');
        // nos traemos la informacion en arreglo y si no un arreglo vacio 
        return localStorageBag ? JSON.parse(localStorageBag) : []; 
    }

    // maximo permitido de comprar prendas
    const max_items = 5;
    
    // state para colorcar nuestros productos al state y en la bolsa con un tipo explicito
    const [ bag, setBag ] = useState(initialBag);

    // uso del useEffect para detectar cuando se hagan cambios en la bolsa
    useEffect( () => {
        // setear el localstorage
        localStorage.setItem('bag', JSON.stringify(bag));
    }, [bag]);

    // funcion para agregar los productos a la bolsa
    function addToBag(product : Product) {
        // comprobar si un elemento ya existe en el carrito ? actualizar cantidad : agregar a la bolsa
        const itemExist = bag.findIndex( item => item.id === product.id);
        if(itemExist >= 0) { 
            // actualizar cantidad
            const updateBag = [...bag];
            updateBag[itemExist].quantity++;

            // permitir solo la compra de 5 prendas
            if( updateBag[itemExist].quantity > max_items) {
                updateBag[itemExist].quantity = max_items;
            }
            setBag(updateBag);
        } else {
            // agregar a la bolsa el producto
            const newItem : ProductItem = {...product, quantity : 1} 
            setBag([...bag, newItem]);
        }
    }

    // funcion para eliminar elementos de la bolsa - Look up
    function removeFromBag(id : ProductItem['id']) {
        // seteamos el state de la bolsa  directamente
        setBag(prevBag => prevBag.filter(item => item.id !== id));
    }

    // funcion para aumentar la cantidad de productos
    function increaseQuantity(id : Product['id'], newQuantity : number) {
        const updateBag = bag.map( item => {
            // verificar la cantidad maxima ? setear cantidad
            if(item.id === id) {
                console.log('Aumentar o cambiar la cantidad');
                const quantity = newQuantity > max_items ? max_items : newQuantity;
                return { ...item, quantity }
            }
            return item;
        });
        setBag(updateBag);
    }

    // state derivado para leer la extension del arreglo de nuestra bag
    const isEmpty = useMemo(() => bag.length === 0,[bag]);
    // state derivado para multiplicar y hacer el calculo de la suma total
    const bagTotal = useMemo( () => bag.reduce((total, product) => total + (product.quantity * product.price), 0), [bag]);

    return {
        bag,
        addToBag,
        increaseQuantity,
        removeFromBag,
        isEmpty,
        bagTotal,
    }
}