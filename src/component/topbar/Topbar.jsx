import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

import './topbar.css'

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topbarleft">
          <span className="logo">Catalan</span>
        </div>
        <div className="topbarright">
            <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topbagdeicon">
2
            </span>
            </div>
            <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topbagdeicon">
2
            </span>
            </div>
            <div className="topbarIconContainer">
            <SettingsIcon/>
            <span className="topbagdeicon">
2 </span>
            </div>
            <img src="data:image/jpeg;base64,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" className="topavatar" alt="" />
         
        </div>
      </div>
    </div>
  );
}

export default Topbar;
