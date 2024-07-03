import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log(url);

        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error aagya in blog id wali call m");
            setBlog(null);
            setRelatedBlogs([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
        // eslint-disable-next-line
    }, [location.pathname]);


    return (
        <div>
            {/* header  */}
            <div className="mt-20">
                <Header />
            </div>
            {/* blogs  */}
            <div className="w-11/12 max-w-[670px] mx-auto flex flex-row gap-3 justify-start items-center">
                <button
                    onClick={() => navigation(-1)}
                    className="border-2 border-gray-300 py-1 px-4 rounded-md mt-[20px] mb-[10px]"
                >
                    Back
                </button>
            </div>
            {loading ? (
                <div className="min-h-[80vh] w-full flex justify-center items-center">
                    <p className="text-center font-bold text-3xl">Loading</p>
                </div>
            ) : 
            blog ? 
            (
                <div className={`w-11/12 max-w-[670px] mx-auto flex flex-col gap-y-7 `} >

                    <BlogDetails post={blog} />
                    
                    <h2 className="w-11/12 max-w-[670px] px-2 gap-3 font-bold text-2xl">
                        Related blog
                    </h2>
                    {relatedBlogs.map((post) => (
                        <div key={post.id}>
                            <BlogDetails post={post} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>No-Blog-Found</div>
            )}
            
        </div>
    );
};

export default BlogPage;
