import styles from "./backtotop.module.css";

export default function BacktoTop() {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.link}>
        Back to Top
      </a>
    </div>
  );
}
