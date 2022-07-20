import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LangContext } from "../../context/LangContext";

const Navbar = () => {
    const languages = [
        { value: "en", text: "English" },
        { value: "fa", text: "فارسی" },
    ];

    const { user } = useContext(AuthContext);
    const { t, lang, handleLangChange } = useContext(LangContext);

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    <span className="logo">{t("siteName")}</span>
                </Link>
                {user ? (
                    user.username
                ) : (
                    <div className="navItems">
                        <Link to="/login" className="navButton capitalize">
                            {t("register")}
                        </Link>
                        <Link to="/login" className="navButton capitalize">
                            {t("login")}
                        </Link>
                        <select
                            className="navButton text-white bg-[#003580] border-0 outline-none"
                            value={lang}
                            onChange={handleLangChange}
                        >
                            {languages.map((item) => {
                                return (
                                    <option key={item.value} value={item.value}>
                                        {item.text}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
