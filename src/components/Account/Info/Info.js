import styles from "./info.module.scss";
import { useAuth } from "@/hooks";
import { Icon, Button } from "semantic-ui-react";
import { DateTime } from "luxon";

export function Info() {
  const { user } = useAuth();

  return (
    <div className={styles.info}>
      <Button icon className={styles.user}>
        <Icon name="user" />
      </Button>
      <h3 className={styles.username}>{user.username}</h3>
      <h3 className={styles.names}>
        Nombre: {user.first_name} {user.last_name}
      </h3>
      <h4 className={styles.email}>{user.email}</h4>
      <p className={styles.createdAt}>
        Miembro registrado:{" "}
        {DateTime.fromISO(user.createdAt, { locale: "es" }).toFormat("DDD")}
      </p>
    </div>
  );
}
