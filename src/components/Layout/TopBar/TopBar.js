import styles from "./TopBar.module.scss";
import Link from "next/link";
import { Image } from "semantic-ui-react";

export function TopBar(props) {
  const { isOpenSearch } = props;
  return (
    <div className={styles.TopBar}>
      <div className={styles.left}></div>
      <Link href="/">
        <Image src="/images/logo.png" />
      </Link>
    </div>
  );
}
