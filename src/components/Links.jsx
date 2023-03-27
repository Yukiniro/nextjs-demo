import Link from "next/link";
import styles from "./Links.module.css";

function Links(props) {
  const { links } = props;
  return (
    <div className={styles.container}>
      {links.map(({ href, title }) => (
        <Link href={href} key={title}>
          {title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
