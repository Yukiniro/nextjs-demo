import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Links from "../components/Links";
import styles from "../../styles/Home.module.css";

export const getStaticProps = async () => {
  console.log("getStaticProps");
  return {
    props: {
      timeStamp: Date.now(),
    },
    revalidate: 10,
  };
};

const links = [
  { href: "/about", title: "About" },
  { href: "/staticpage", title: "Staticpage" },
  { href: "/dynamicroute/1", title: "Dynamicpage1" },
];

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
        <h1 className={styles.title}>Home Page</h1>
        <h2>{new Date(timeStamp).toUTCString()}</h2>
        <Links links={links} />
      </main>
      <Footer />
    </div>
  );
}