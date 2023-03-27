import { useRouter } from "next/router";
import styles from "./DynamicRouter.module.css";

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  console.log("dynamicrouter getStaticProps");
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const { id } = context.params;
  const timeStamp = Date.now();
  return {
    props: { id, timeStamp },
    revalidate: 10,
  };
};

export default function DynamicRoute(props) {
  const { timeStamp, id } = props;
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <main className={styles.main}>
          <h1 className={styles.title}>Loading</h1>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Dynamic Page {id}</h1>
        <h2>{new Date(timeStamp).toUTCString()}</h2>
      </main>
    </div>
  );
}
