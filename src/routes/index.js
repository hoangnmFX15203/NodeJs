import AddProduct from '../AddProduct';
import Products from '../Products';

const publicRoutes = [
    { path: '/', component: Products },
    { path: '/add-product', component: AddProduct },
];

export default publicRoutes;
