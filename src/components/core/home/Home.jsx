import React, { useEffect, useState } from 'react';
// import { getProducts } from '../helper/coreapicalls.js';
import data from '../../../data.json'
import './Home.css';
import Card from '../card/Card.jsx';
import Filter from '../filter/Filter.jsx';

function Home() {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFileterProducts] = useState([]);
    const [sortValue, setSortValue] = useState('');
    const [tag, setTag] = useState('');
    // const [error, setError] = useState('');

    const loadAllProducts = () => {

        /*var myArray = ['a', 1, 'a', 2, '1'];

        let unique = [...new Set(myArray)];

        console.log(unique); // unique is ['a', 1, 2, '1']*/
        let ar = data.map(item => item.tag);
        let uniqueEle = [...new Set(ar)];
        // console.log(uniqueEle);
        setProducts(data);
        setFileterProducts(data);
    }
    
    useEffect(() => {
        loadAllProducts();
        handleSort();
        handleTag();
    }, [filterProducts, sortValue, tag])

    const handleSort = (value) => {
        setSortValue(value);
        listProducts();
    }

    function listProducts() {
        
        if(sortValue !== '') {
            // console.log("SORT: "+sortValue)
            products.sort((a, b) => sortValue === 'lowest' ? (parseInt(a.price) > parseInt(b.price) ? 1:-1) : (parseInt(a.price) < parseInt(b.price) ? 1:-1))
        } else {
            // console.log("INSIDE THE ELSE PART");
            products.sort((a, b) => (a.id > b.id ? 1 : -1))
        }
        return {setFileterProducts: products}
    }

    const handleTag = (value) => {
        // console.log(value);
        setTag(value);
        listTagProduct();
    }

    function listTagProduct() {
        if(tag !== '') {
            if(tag === 'Denim') {
                console.log(tag);
                let filterAr = tagFilter(tag);
                console.log("FilterArr "+filterAr);
                return {setFileterProducts: filterAr}
            } else if(tag === "T-shirt") {
                let filterAr = tagFilter(tag);
                return {setFileterProducts: filterAr}
            } else if(tag === "shirt") {
                let filterAr = tagFilter(tag);
                return {setFileterProducts: filterAr}
            } else if(tag === "jacket") {
                let filterAr = tagFilter(tag);
                return {setFileterProducts: filterAr}
            }
        }
        return {setFileterProducts: products}
    }

    // utility function
    function tagFilter(tag) {
        let ar = filterProducts.filter(item => item.tag === "Denim");
        // console.log(ar);
        return ar;
    }
    
    return (
        <div className =  "container-fluid">
            <h2>All Products: {filterProducts.length}</h2>
            <Filter 
                product = {filterProducts} 
                handleSort = {handleSort} 
                sort = {sortValue}
                handleTag = {handleTag}
                tag = {tag}
            />
            <hr />
            <div className="row custom-card">
                    {filterProducts.map((product, idx) => {
                        console.log(product);
                        return(
                            
                            <div key = {product.id} className="col-md-3 mb-2">
                                <Card products = {product}/>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Home
