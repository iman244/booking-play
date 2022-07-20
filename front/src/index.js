import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import MoonLoader from "react-spinners/MoonLoader";
import { Helmet } from "react-helmet";
import "./i18n.js";
import { LangContextProvider } from "./context/LangContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <LangContextProvider>
            <AuthContextProvider>
                <SearchContextProvider>
                    <Suspense
                        fallback={
                            <div className="h-screen flex justify-center items-center">
                                <MoonLoader color="#003580" size={60} />
                            </div>
                        }
                    >
                        <Helmet
                            htmlAttributes={{
                                lang: new URL(
                                    document.location
                                ).searchParams.get("lng"),
                                dir:
                                    new URL(document.location).searchParams.get(
                                        "lng"
                                    ) === "en"
                                        ? "ltr"
                                        : "rtl",
                            }}
                        />
                        <App />
                    </Suspense>
                </SearchContextProvider>
            </AuthContextProvider>
        </LangContextProvider>
    </React.StrictMode>
);
