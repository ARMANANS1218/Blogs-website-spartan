import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css"
// import AppContextProvider from "./context/AppContext"

export default function App() {
  const {fetchBlogPosts} =useContext(AppContext);

  useEffect(() =>{
    fetchBlogPosts();
  },[])

  return (
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center bg-green-50">
        <Header/>
        <Blogs/>
        <Pagination/>
        
      </div>
  );
}
