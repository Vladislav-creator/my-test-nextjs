import type { Metadata } from "next";
import styles from "../../page.module.css";

async function getData (id: string) {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/' + id,{
      next: {
        revalidate: 60
      }
    });
    const  result = data.json();
    return result;
  }
type Props = {
    params: {
        id: string
    }
}
 export async function generateMetadata ({params: {id}}:Props): Promise<Metadata> {
     const post = await getData(id)
     return {
        title: post.title,
        description: post.body,
   }
}

export default async function Post  ({params}:Props) {    
    const post = await getData(params.id)
return (
    <main className={styles.main}>
    <h1>post №{post.id}: {post.title}</h1>   
    <p>{post.body}</p>
    </main>
)
}

