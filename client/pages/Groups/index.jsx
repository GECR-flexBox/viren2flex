import React from "react";
import styles from "../../styles/Groups.module.css";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CodeIcon from "@mui/icons-material/Code";
import DataArrayIcon from "@mui/icons-material/DataArray";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import WebIcon from "@mui/icons-material/Web";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import AddIcon from "@mui/icons-material/Add";
import GroupCard from "../components/GroupCard";
const Groups = () => {
  return (
    <>
      <section id={styles.groups}>
        <aside>
          <div id={styles.sec_title}>Communities</div>
          <div id={styles.gp_links}>
            <div className={styles.lnk} id={styles.active}>
              <Diversity3Icon /> <span>home</span>
            </div>

            <div className={styles.lnk}>
              <AdbIcon />
              <span>Android Dev</span>
            </div>
            <div className={styles.lnk}>
              <DataArrayIcon /> <span>DSA</span>
            </div>
            <div className={styles.lnk}>
              <AppleIcon />
              <span>IOS App Dev</span>
            </div>
            <div className={styles.lnk}>
              <WebIcon />
              <span>Frontend Dev</span>
            </div>
            <div className={styles.lnk}>
              <SportsCricketIcon />
              <span>Sports</span>
            </div>
            <div className={styles.lnk}>
              <SettingsSuggestIcon />
              <span>Backend Dev</span>
            </div>
            <div className={styles.lnk}>
              <CodeIcon /> <span>Problem Solving</span>
            </div>
          </div>
          <div id={styles.gp_ftr}>
            <div className={styles.lnk}>
              <AddIcon /> <span>Create a Group</span>
            </div>
          </div>
        </aside>
        <div id={styles.groupCardsSection}>
          <GroupCard backImg="https://github.com/KHUNTPRIYANSH/site_photos/blob/main/flexbox/groupback.png?raw=true" />
          <GroupCard backImg="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/gb2.png" />
          <GroupCard backImg="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/gb3.jpg" />
          <GroupCard backImg="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/gb4.png" />
          <GroupCard backImg="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/gb5.jpg" />
          <GroupCard backImg="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/gb6.jpg" />
          <GroupCard backImg="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/gb7.png" />
          <GroupCard backImg="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/gb8.png" />
          <GroupCard backImg="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/gb9.jpeg" />
        </div>
      </section>
    </>
  );
};

export default Groups;
