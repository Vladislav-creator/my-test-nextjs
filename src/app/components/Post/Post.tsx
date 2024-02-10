import Link from "next/link"
import styles from "../../page.module.css";
const Post = ({post}: any) => {
  return (
    <div> 
        <Link className={styles.link} href="/blog">Назад</Link>
    <h1>post №{post.id}: {post.title}</h1>   
    <p>{post.body}</p>
    </div>
  )
}

export default Post