import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading]= useState(false);
    const [posts,setPosts]=useState("");
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    // data filling 

    async function fetchBlogPosts(page =1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        // console.log("Printing url");
        // console.log(url);
        
        

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)

            
        }
        catch{
            console.log("code fat gya")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);

    }


    const value ={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        AppContextProvider,
        handlePageChange,
        fetchBlogPosts
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}