import type { Metadata } from "next";
import styles from "../../page.module.css";
type Props = {
    params: {
        id: string
    }
}
export async function generateMetadata ({params: {id}}:Props): Promise<Metadata>{
    return {
        title: id,
    }
}
export default function Post({params: {id}}:Props) {
return (
    <main className={styles.main}>
    <h1>Post page {id}</h1>
    </main>
)
}