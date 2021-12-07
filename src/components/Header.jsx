import { WbSunny } from "@material-ui/icons";
import { NotificationAdd } from "@mui/icons-material";
import React from "react";
import styles from "../styles/components/Header.module.css";
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div onClick={()=>setMenuOpen(!menuOpen)} className={styles.menu} >
          <MenuIcon/>
          
        </div>

      </div>
      <div className="center"></div>
      <div className={styles.right}>
        <span>
          <WbSunny />
        </span>
        <span>
          <NotificationAdd />
        </span>
        <span>
          <img
            src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
