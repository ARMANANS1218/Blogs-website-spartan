import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from "./Spinner"
import "./Blogs.css"
// import Card from "./Card"
const Blogs = () => {
    const { posts, loading } = useContext(AppContext);
    // console.log("Inside Blogs");
    
    // console.log(posts);
    
    return (
        <div className='post w-11/12 max-w-[1000px] text-justify p-5 flex flex-col gap-7'>
            {

                loading ? (<div className='flex justify-center items-center h-full w-full mt-[250px]'> <Spinner /> </div>) :
                    (
                        posts.length === 0 ?
                            (
                                <div>
                                    <p>No post found</p>
                                </div>
                            ) : 
                            (
                                posts.map((post) => (
                                    <div className='bg-slate-50 p-8 rounded-3xl shadow-xl'>
                                            <div key={post.id}>
                                            <p className='font-bold text-xl'> {post.title}</p>
                                            <p className='text-[15px]'> By <span className='italic'>{post.author}</span>  on <span className='underline font-bold'>{post.category}</span></p>
                                            <p className='text-[15px]'>Posted on {post.date}</p>
                                            <p className='text-xl mt-1'>{post.content}</p>
                                            <div className='flex flex-row gap-5'>
                                                {post.tags.map((tag, index) => {
                                                    return <span className='text-blue-600  underline'  key={index}>{`#${tag}`}</span>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                    )

            }
        </div>
    )
}

export default Blogs