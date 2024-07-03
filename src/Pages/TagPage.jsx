import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

    return (
        <div>
            <div className="mt-20">
                <Header />
            </div>

            <div
                className={`w-11/12 max-w-[670px]  mx-auto mt-[12px] mb-[80px]`}
            >
                <div className="flex justify-start items-center px-4 gap-5">
                    <button
                        onClick={() => navigation(-1)}
                        className="border-2 border-gray-300 py-1 px-4 rounded-md mt-[20px] mb-[10px]"
                    >
                        Back
                    </button>
                    <h2>
                        Blogs Tagged{" "}
                        <span className="text-xl font-bold gap-x-2">
                            {" "}
                            #{tag}{" "}
                        </span>
                    </h2>
                </div>

                <Blogs />
            </div>

            <div className="py-1">
                <Pagination />
            </div>
        </div>
    );
};

export default TagPage;
