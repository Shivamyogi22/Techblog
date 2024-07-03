import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

export default function Header() {
    const { toggleDarkMode, isDarkMode } = useContext(AppContext);

    return (
        <header
            className={`w-full py-5 top-0 fixed ${
                isDarkMode
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow"
                    : "bg-white text-black border shadow"
            } flex justify-between`}
        >
            <button></button>
            <h1 className="font-bold text-3xl uppercase text-center">
                Shivam Yogi Blogs
            </h1>
            <button className="text-2xl text-left m-2" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
        </header>
    );
}
