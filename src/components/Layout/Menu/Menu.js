import styles from "./Menu.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Platform } from "@/api";
import { map } from "lodash";
import { Image, Icon, Input } from "semantic-ui-react";
import { ENV } from "@/utils";
import classNames from "classnames";

const platformCrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil

  const openCloseSearch = () => setShowSearch((prevState) => !prevState);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Alternar menú móvil

  useEffect(() => {
    (async () => {
      try {
        const response = await platformCrl.getAll();
        setPlatforms(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.menuContainer}>
      {/* Botón Hamburguesa (solo en móviles) */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <Icon name={isMenuOpen ? "close" : "bars"} />
      </button>

      {/* Menú principal */}
      <div
        className={classNames(styles.platforms, { [styles.open]: isMenuOpen })}
      >
        {map(platforms, (platform) => (
          <Link key={platform.id} href={`/games/${platform.slug}`}>
            <Image
              src={`${ENV.SERVER_HOST}${platform.icon.url}`}
              alt={platform.icon.alternativeText || platform.title}
              width={platform.icon.width}
              height={platform.icon.height}
            />
            {platform.title}
          </Link>
        ))}

        {/* Botón de búsqueda */}
        <button className={styles.search} onClick={openCloseSearch}>
          <Icon name="search" />
        </button>

        {/* Input de búsqueda */}
        <div
          className={classNames(styles.inputContainer, {
            [styles.active]: showSearch,
          })}
        >
          <Input
            id="search-games"
            placeholder="Buscar"
            className={styles.input}
            focus={true}
          />
          <Icon
            name="close"
            className={styles.closeInput}
            onClick={openCloseSearch}
          />
        </div>
      </div>
    </div>
  );
}
