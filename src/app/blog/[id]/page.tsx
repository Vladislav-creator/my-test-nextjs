import type { Metadata } from "next";
 import {use} from "react";
import styles from "../../page.module.css";
import { log } from "console";

export function getData (id:string) {   
    const data = use( fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      next: {
        revalidate: 60
      }
    }).then(
      response => response.json()
    ));
    return data
  }

type Props = {
    params: {
        id: string
    }
}

//  export async function generateMetadata ({params: {id}}:Props): Promise<Metadata> {
//      const post = await getData(id)
//      return {
//         title: post.title,
//         description: post.body,
//    }
// }

export default  function Post({params: {id}}:Props) {    
    const post = getData(id)
return (
    <main className={styles.main}>
    <h1>post №{post.id}: {post.title}</h1>
    <p>{post.body}</p>
    </main>
)
}