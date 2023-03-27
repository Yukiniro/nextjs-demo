import Links from "../../components/Links";
import styles from "./StaticPage.module.css";

export const getStaticProps = async () => {
  const timeStamp = Date.now();
  console.log("getStaticProps");
  return {
    props: { timeStamp },
    revalidate: 10,
  };
};

const links = [{ href: "/", title: "Home" }];

export default function StaticPage(props) {
  const { timeStamp } = props;
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Static Page</h1>
        <h2>{new Date(timeStamp).toUTCString()}</h2>
        <Links links={links} />
      </main>
    </div>
  );
}
