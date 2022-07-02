import "./Topbar.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import iFolder from "../../assets/iFolder.png";
import iIdea from "../../assets/iIdea.png";
import iList from "../../assets/iList.png";
import iUser from "../../assets/iUser.png";
import iDownload from "../../assets/iDownload.png";

function Topbar() {
  const display = () => {
    console.log("dfdf");
    const res = document.getElementById("resRightBar");
    if (res.classList.contains("show")) {
      res.classList.remove("show");
    } else {
      res.classList.add("show");
    }
  };

  return (
    <div className="topbarWrapper">
      <div className="topbarContainer">
        <div className="topbarLeft">
          <div className="logoContainer">
            <img className="logoImg" src={logo} alt="" />
          </div>
        </div>
        <div className="topbarRight" id="topbarRight">
          <div className="topbarRightItem">
            <img className="topbarRightItemImg" src={iList} alt="" />
            <div className="topbarRightItemText">Whitepaper</div>
          </div>
          <div className="topbarRightItem">
            <img className="topbarRightItemImg" src={iIdea} alt="" />
            <div className="topbarRightItemText">Tokenomics</div>
          </div>
          <div className="topbarRightItem">
            <img className="topbarRightItemImg" src={iFolder} alt="" />
            <div className="topbarRightItemText">Marketplace</div>
          </div>
          <div className="topbarRightItem">
            <img className="topbarRightItemImg" src={iDownload} alt="" />
            <div className="topbarRightItemText">Conatact Us</div>
          </div>
          <div className="topbarRightItem">
            <img className="topbarRightItemImg" src={iUser} alt="" />
            <div className="topbarRightItemText"></div>
          </div>
        </div>
        <div className="topbarBars" onClick={display}>
          <FaBars />
          <div className="resRightBar" id="resRightBar">
            <div className="topbarRightItem">
              <img className="topbarRightItemImg" src={iList} alt="" />
              <div className="topbarRightItemText">Whitepaper</div>
            </div>
            <div className="topbarRightItem">
              <img className="topbarRightItemImg" src={iIdea} alt="" />
              <div className="topbarRightItemText">Tokenomics</div>
            </div>
            <div className="topbarRightItem">
              <img className="topbarRightItemImg" src={iFolder} alt="" />
              <div className="topbarRightItemText">Marketplace</div>
            </div>
            <div className="topbarRightItem">
              <img className="topbarRightItemImg" src={iDownload} alt="" />
              <div className="topbarRightItemText">Conatact Us</div>
            </div>
            <div className="topbarRightItem">
              <img className="topbarRightItemImg" src={iUser} alt="" />
              <div className="topbarRightItemText"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
