import styles from "./Footer.module.scss";
import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div className={styles.social}>
            <Button
              as=""
              href="#"
              rectangular
              color="facebook"
              icon="facebook"
            />
            <Button
              as=""
              href="#"
              rectangular
              color="instagram"
              icon="instagram"
            />
            <Button as="" href="#" rectangular color="youtube" icon="youtube" />
          </div>

          <div>
            <ul className={styles.footer_menu}>
              <Link href="#">Contacto</Link>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Devoluciones</Link>
            </ul>
          </div>

          <div className={styles.footer_logos}>
            <Link href="/">
              <Image src="images/logo.png" alt="Logo" />
            </Link>
            <Link href="/">
              <Image src="images/logo.png" alt="Logo" />
            </Link>
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2025 - Todos los derechos reservados</span>
        </div>
      </Container>
    </div>
  );
}
