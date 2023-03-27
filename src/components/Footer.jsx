import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Yukiniro"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Yukiniro
      </a>
    </footer>
  );
}
