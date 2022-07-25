import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Hotels from "./pages/hotels/Hotels";
import Rooms from "./pages/rooms/Rooms";
import { authFetch } from "./fetch/auth";
import { useEffect } from "react";

function App() {
    const credentials = {
        username: "iman244",
        password: "123456789",
    };

    let auth = new authFetch();
    let login = async () => {
        try {
            let user = await auth.login(credentials);
            console.dir(user);
        } catch (error) {
            console.dir(error);
        }
    };
    useEffect(() => {
        login();
    }, []);
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/newproduct" element={<NewProduct />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
