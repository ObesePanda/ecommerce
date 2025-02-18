import { BasicLayout } from "@/layouts";
import { Info } from "@/components/Account/Info";
import { Tab } from "semantic-ui-react";
import styles from "./account.module.scss";

export default function AccountPage() {
  return (
    <>
      <BasicLayout isContainer relative>
        <h1 style={{ paddingTop: 100 }}></h1>
        <Info />
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={null}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}
