import styles from "./TopBar.module.scss";
import Link from "next/link";
import { Image } from "semantic-ui-react";
import { Account } from "../Account";
import { Menu } from "../Menu";

export function TopBar(props) {
  const { isOpenSearch } = props;
  return (
    <div className={styles.TopBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" />
        </Link>
      </div>

      <div className={styles.center}>
        <Menu isOpenSearch={isOpenSearch} />
      </div>

      <div className={styles.right}>
        <Account />
      </div>
    </div>
  );
}
