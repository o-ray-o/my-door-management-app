import Image from "next/image";
import styles from "./page.module.css";
import DoorList from "./doorList/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <DoorList />
      </div>
    </main>
  );
}
