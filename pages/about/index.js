import Head from "next/head";
import Footer from "../../components/Footer";
import styles from "./About.module.css";

export const getServerSideProps = async ({ res, req }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=20, stale-while-revalidate=59"
  );
  console.log("getServerSideProps");
  return {
    props: {
      timeStamp: Date.now(),
    },
  };
};

export default function Home(props) {
  const { timeStamp } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About Page</h1>
        <h2>{new Date(timeStamp).toString()}</h2>
      </main>
      <Footer />
    </div>
  );
}