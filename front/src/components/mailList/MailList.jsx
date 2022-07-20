import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import "./mailList.css";

const MailList = () => {
    const { t } = useContext(LangContext);

    return (
        <div className="mail">
            <h1 className="mailTitle">{t("h1Mail")}</h1>
            <span className="mailDesc">{t("spanMail")}</span>
            <div className="mailInputContainer">
                <input type="text" placeholder={t("Your Email")} />
                <button>{t("Subscribe")}</button>
            </div>
        </div>
    );
};

export default MailList;
