import { Button, Icon, Label } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import styles from "./Account.module.scss";

const total = 5;
export function Account() {
  const { user } = useAuth();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccound = () => router.push("/account");

  const goToCard = () => {
    if (!user) goToLogin();
    else router.push("/cart");
  };
  return (
    <div className={styles.account}>
      <Button icon className={styles.car}>
        <Icon name="cart" onClick={goToCard} />
        {total > 0 && <Label circular>{total}</Label>}
      </Button>
    </div>
  );
}
