import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import "./footer.css";

const Footer = () => {
    const { t } = useContext(LangContext);

    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">{t("countries")}</li>
                    <li className="fListItem">{t("Regions")}</li>
                    <li className="fListItem">{t("Cities")}</li>
                    <li className="fListItem">{t("Districts")}</li>
                    <li className="fListItem">{t("Airports")}</li>
                    <li className="fListItem">{t("Hotels")}</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">{t("Homes")}</li>
                    <li className="fListItem">{t("Apartments")}</li>
                    <li className="fListItem">{t("Resorts")}</li>
                    <li className="fListItem">{t("Villas")}</li>
                    <li className="fListItem">{t("Hostels")}</li>
                    <li className="fListItem">{t("Guest houses")}</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">{t("Unique places to stay")}</li>
                    <li className="fListItem">{t("Reviews")}</li>
                    <li className="fListItem">
                        {t("Unpacked: Travel articles")}
                    </li>
                    <li className="fListItem">{t("Travel communities")}</li>
                    <li className="fListItem">
                        {t("Seasonal and holiday deals")}
                    </li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">{t("Car rental")}</li>
                    <li className="fListItem">{t("Flight Finder")}</li>
                    <li className="fListItem">
                        {t("Restaurant reservations")}
                    </li>
                    <li className="fListItem">{t("Travel Agents")}</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">{t("Customer Service")}</li>
                    <li className="fListItem">{t("Partner Help")}</li>
                    <li className="fListItem">{t("Careers")}</li>
                    <li className="fListItem">{t("Press center")}</li>
                    <li className="fListItem">{t("Safety Resource Center")}</li>
                    <li className="fListItem">{t("Investor")}</li>
                    <li className="fListItem">{t("Terms & conditions")}</li>
                </ul>
            </div>
            <div className="fText">Copyright © 2022 Lamabooking.</div>
        </div>
    );
};

export default Footer;
