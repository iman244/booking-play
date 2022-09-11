import React from "react";
import "./topbar.css";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">admin panel - booking play</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <ion-icon name="notifications-outline"></ion-icon>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <i className="fa-solid fa-globe"></i>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <i className="fa-solid fa-gear"></i>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );
}
