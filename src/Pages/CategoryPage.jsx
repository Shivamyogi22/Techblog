import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    return (
        <div>
            <div className="mt-20">
                <Header />
            </div>
            <div className="w-11/12 max-w-[670px] mx-auto flex flex-row gap-3 justify-start items-center px-6">
                <button
                    onClick={() => navigation(-1)}
                    className="border-2 border-gray-300 py-1 px-4 rounded-md mt-[20px] mb-[10px]"
                >
                    Back
                </button>
                <h2>
                    Blogs on{" "}
                    <span className="text-xl font-bold gap-x-2">
                        {" "}
                        {category}{" "}
                    </span>{" "}
                </h2>
            </div>
            <div className={`w-11/12 max-w-[670px] mx-auto  flex flex-col gap-y-7 mt-[20px] `}>
                <Blogs />
            </div>
            <div className="mb-12">
                <Pagination />
            </div>
        </div>
    );
};

export default CategoryPage;
