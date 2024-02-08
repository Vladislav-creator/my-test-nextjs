'use client'
import styles from "../page.module.css";
import Link from "next/link" 
import {use} from "react";

export function getData () {
  const data = use( fetch('https://jsonplaceholder.typicode.com/posts').then(
    response => response.json()
  )
  ) 
  return data
}
  export default  function Blog () {
    const posts = getData();
    return (
        <main className={styles.main}>
       <h1>Blog page</h1>
       <ul>
        {posts.map((post:any)=>(
            <li key = {post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                {post.title}
            </li>
        ))}
       </ul>
        </main>
    )
}
