import "./sidebar.css";
import { Link } from "react-router-dom";
import {
    sidebarDataIcons_P1,
    sidebarDataIcons_P2,
    sidebarDataIcons_P3,
    sidebarDataIcons_P4,
} from "./sidebarData";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        {sidebarDataIcons_P1.map((item) => (
                            <Link to={item.to}>
                                <li
                                    className={`sidebarListItem ${item.status}`}
                                    key={item.id}
                                >
                                    {item.icon}
                                    <span>{item.span}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        {sidebarDataIcons_P2.map((item) => (
                            <Link to={item.to}>
                                <li
                                    className={`sidebarListItem ${item.status}`}
                                    key={item.id}
                                >
                                    {item.icon}
                                    <span>{item.span}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <ul className="sidebarList">
                            {sidebarDataIcons_P3.map((item) => (
                                <Link to={item.to}>
                                    <li
                                        className={`sidebarListItem ${item.status}`}
                                        key={item.id}
                                    >
                                        {item.icon}
                                        <span>{item.span}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <ul className="sidebarList">
                            {sidebarDataIcons_P4.map((item) => (
                                <Link to={item.to}>
                                    <li
                                        className={`sidebarListItem ${item.status}`}
                                        key={item.id}
                                    >
                                        {item.icon}
                                        <span>{item.span}</span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
}
