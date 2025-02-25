import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

export default function App() {
    const { fetchBlogPosts } = useContext(AppContext);
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const { isDarkMode } = useContext(AppContext);

    useEffect(() => {
        const page = searchParams.get("page") ?? 1; // ?? means by default

        if (location.pathname.includes("tags")) {
            // iska mtlb tag wala page show krna hai
            const tag = location.pathname
                .split("/")
                .at(-1)
                .replaceAll("-", " ");
            fetchBlogPosts(Number(page), tag);
        } else if (location.pathname.includes("categories")) {
            const category = location.pathname
                .split("/")
                .at(-1)
                .replaceAll("-", " ");
            fetchBlogPosts(Number(page), null, category);
        } else {
            fetchBlogPosts(Number(page));
        }
        // eslint-disable-next-line
    }, [location.pathname, location.search]);

    return (
        <div className={`w-full min-h-screen ${isDarkMode ? "dark" : "light"}`}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:blogId" element={<BlogPage />} />
                <Route path="/tags/:tag" element={<TagPage />} />
                <Route
                    path="/categories/:category"
                    element={<CategoryPage />}
                />
            </Routes>
        </div>
    );
}
