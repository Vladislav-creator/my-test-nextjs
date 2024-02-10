import type { Metadata } from "next";
import styles from "../../page.module.css";
import Post from "../../components/Post/Post"

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
 export async function generateMetadata ({params: {id}}:Props, SearchParams:any): Promise<Metadata> {
     const post = await getData(id)
     return {
        title: post.title + '- Статья на сайте',
        description: post.body,
   }
}

// export default async function Post  ({params}:Props) {    
//     const post = await getData(params.id)
// return (
//     <main className={styles.main}>
//        <Link className={styles.link} href="/blog">Назад</Link>
//     <h1>post №{post.id}: {post.title}</h1>   
//     <p>{post.body}</p>
//     </main>
// )
// }
export default async function PagePost  ({params}:Props) {    
    const post = await getData(params.id)
return (
    <main className={styles.main}>
      <Post post={post}/>
    </main>
)
}
