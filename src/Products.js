import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Products() {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                return setProduct(data);
            });
    }, []);
    if (products.length !== 0) {
        return (
            <div>
                {products.map((product, index) => {
                    return (
                        <ul>
                            <li key={index}>
                                <h1>{product.title}</h1>
                                <img src={product.imageURL} alt={product.title}></img>
                                <p>{product.description}</p>
                            </li>
                        </ul>
                    );
                })}
            </div>
        );
    } else {
        return <h1>No User Found!</h1>;
    }
}

export default Products;
