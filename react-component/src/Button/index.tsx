import styles from './index.module.css'

export function Button() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      React Button
    </button>
  );
}
