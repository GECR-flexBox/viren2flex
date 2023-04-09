import React from "react";
import styles from "../../styles/Groups.module.css";
import dp from "../../static/imgs/groupback.png";
const GroupCard = (props) => {
  return (
    <>
      <div id={styles.gpCrd}>
        <div id={styles.cdBack}>
          <img
            // src="https://github.com/KHUNTPRIYANSH/site_photos/blob/main/flexbox/groupback.png?raw=true"
            src={props.backImg}
            alt=""
          />
        </div>
        <div id={styles.comLogo}>
          <img
            src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/flexbox/cl1.png"
            alt=""
          />
        </div>
        <div id={styles.cdDesc}>
          <div className={styles.cpName}>Open AI</div>
          <div className={styles.cpDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veniam
            esse cum eveniet reiciendis facilis itaque sunt excepturi laudantium
            tenetur explicabo aspernatur placeat voluptates, distinctio ullam
            voluptas atque? Distinctio, ut.
          </div>
          <div className={styles.cpActive}>999,999 Members</div>
        </div>
      </div>
    </>
  );
};

export default GroupCard;
