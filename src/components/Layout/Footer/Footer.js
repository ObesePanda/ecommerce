import styles from "./Footer.module.scss";
import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="images/logo.png" alt="Logo" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
