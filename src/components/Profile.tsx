import styles from "../styles/componentes/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/14313822?s=60&v=4"
        alt="Donis Sousa"
      />
      <div>
        <strong>Donis Sousa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
