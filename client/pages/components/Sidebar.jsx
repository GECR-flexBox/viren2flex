import React, { useContext, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Link from 'next/link';
import styles from "../../styles/Sidebar.module.css"
import MyContext from "../MyContext";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const router = useRouter();
  const [isCollapsedSidebar, setisCollapsedSidebar] = useState(false)
  const {userdata,setUserdata}=useContext(MyContext);
  const toggleSidebarCollapseHandler = () => {
    setisCollapsedSidebar((prev) => !prev)
    console.log(isCollapsedSidebar)
  }

  return (
    <>
      <aside data-collapse={isCollapsedSidebar} className="aside">
        <div id={styles.side_nav}>
          <header id={styles.side_header} className={styles.row}>
            <span className="sidebar_nav_txt">
              <div className={styles.logo} >
                Flex
                <span className={styles.gray}>Box</span>
              </div>
            </span>
            <button className={`${styles.toggle} ${styles.gray} ${"toggle_btn"}`} onClick={toggleSidebarCollapseHandler}>
              <MenuOpenIcon />
            </button>
          </header>
          <div id={styles.nav_links}>
            <div id={styles.link}>
              <Link href="/Dashboard">
                <span>
                  <DashboardOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">dashboard</b>
              </Link>
              <Link href="/">
                <span>
                  <HomeRoundedIcon />
                </span>
                <b className="sidebar_nav_txt">homepage</b>
              </Link>
              <small className="sidebar_nav_txt">community</small>
              <Link href="/Social">
                <span>
                  <FavoriteBorderOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">Wall</b>
              </Link>
              <Link href="/Members">
                <span>
                  <LanguageOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">members</b>
              </Link>
              <Link href="/Groups">
                <span>
                  <PeopleAltIcon />
                </span>
                <b className="sidebar_nav_txt">groups</b>
              </Link>
              <Link href="/Forums">
                <span>
                  <ChatBubbleOutlineIcon />
                </span>
                <b className="sidebar_nav_txt">forums</b>
              </Link>
              <small className="sidebar_nav_txt">others</small>
              <Link href="/">
                <span>
                  <ErrorOutlineIcon />
                </span>
                <b className="sidebar_nav_txt">news</b>
              </Link>
              <Link href="/">
                <span>
                  <InsertDriveFileOutlinedIcon />
                </span>
                <b className="sidebar_nav_txt">Pages</b>
              </Link>
              <div>
                {userdata==null ? <Link href="/Signin">
                  <span>
                    <LogoutOutlinedIcon />
                  </span>
                  <b className="sidebar_nav_txt">Login</b>
                </Link> : <a onClick={()=>{
                  window.localStorage.removeItem("userId");
                  setUserdata(null);
                  router.push('/');
                }} href="#" >
                  <span>
                    <LogoutOutlinedIcon />
                  </span>
                  <b>Logout</b>
                  </a>
                }
                
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
