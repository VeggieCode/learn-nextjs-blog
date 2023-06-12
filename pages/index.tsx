import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilityStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/post";
import PostList from "../components/post_list/postList";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilityStyles.headingMd}>
            <p>[Your Self Introduction]</p>
            <p>
                (This is a sample website - you’ll be building a site like this on{" "}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
        </section>
        <PostList map={allPostsData.map(({id, date, title}) => (
            <li className={utilityStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilityStyles.lightText}>
                    <Date dateString={date} />
                </small>
            </li>
        ))}/>

    </Layout>
  );
}
