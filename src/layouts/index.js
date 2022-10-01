import Header from './DefaultLayout/Header';

function DefaultLayout({ children }) {
    return (
        <div className="DefaultLayout">
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
