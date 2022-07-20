import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const LangContext = createContext();

export const LangContextProvider = ({ children }) => {
    let params = new URL(document.location).searchParams;
    let language = params.get("lng");
    const { t } = useTranslation();
    const [lang, setLang] = useState(language);

    const handleLangChange = (e) => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    };

    return (
        <LangContext.Provider value={{ lang, setLang, t, handleLangChange }}>
            {children}
        </LangContext.Provider>
    );
};
