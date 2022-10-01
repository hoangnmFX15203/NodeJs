function Header() {
    return (
        <div className="header">
            <div className="nav-bar">
                <li className="nav-item">
                    <a href="/">Shop</a>
                </li>
                <li className="nav-item">
                    <a href="/product">Product</a>
                </li>
                <li className="nav-item">
                    <a href="/cart">Cart</a>
                </li>
                <li className="nav-item">
                    <a href="/order">Order</a>
                </li>
                <li className="nav-item">
                    <a href="/add-product">Add Product</a>
                </li>
                <li className="nav-item">
                    <a href="/admin-product">Admin Product</a>
                </li>
            </div>
        </div>
    );
}

export default Header;
