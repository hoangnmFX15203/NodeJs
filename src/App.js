import { Routes, Route } from 'react-router-dom';
import Users from './Products';
import AddProduct from './AddProduct';
import publicRoutes from './routes';
import DefaultLayout from './layouts/index';

function App() {
    return (
        <div className="app">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = DefaultLayout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                {/* <Route path="/" element={<AddUser />}></Route>
                <Route path="/users" element={<Users />}></Route> */}
            </Routes>
        </div>
    );
}

export default App;
