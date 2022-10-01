import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from './redux/action';

function AddProduct() {
    const [title, setTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name: title, imageURL: imageURL, price: price, description: description });
        dispatch(
            addProduct({
                name: title,
                imageURL: imageURL,
                price: price,
                description: description,
            }),
        );
        // setUser('');
    };
    return (
        <>
            <div>
                {/* <div>
                    <ul>
                        <li>
                            <Link to="/">Enter user | </Link>
                        </li>
                        <li>
                            <Link to="/users">User</Link>
                        </li>
                    </ul>
                </div> */}
                <div>
                    <form
                        method="post"
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <label htmlFor="imageURL">Image URL</label>
                        <input
                            type="text"
                            name="imageURL"
                            id="imageURL"
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                        />
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            type="textarea"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button type="submit">Add Product</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddProduct;
