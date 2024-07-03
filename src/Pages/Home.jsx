import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const Home = () => {
    return (
        <div>
            <div className="w-full mt-20 pt-3">
                <Header />
            </div>
            <div
                className={`w-11/12 max-w-[670px] mx-auto flex flex-col gap-y-7`}
            >
                <Blogs />
            </div>
            <div className="mb-14">
                <Pagination />
            </div>
        </div>
    );
};

export default Home;
