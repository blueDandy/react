import "./Footer.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import character from "../../assets/character.png";
import iSearch from "../../assets/iSearch.png";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <div className="footerContentUp">
          <div className="footerContentUpLeft">
            <div className="footerContentUpLeftTop">Recently minted</div>
            <div className="footerContentUpLeftBtns">
              <div className="footerContentUpLeftBtn leftBtn">
                <FaArrowLeft /> Prev
              </div>
              <div className="footerContentUpLeftBtn rightBtn">
                Next <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="footerContentUpRight">
            We focus on industry leading platforms so that you can be prepared
            for your next job. Then we teach all we can about them.
          </div>
        </div>
        <div className="footerContentDown">
          <div className="footerContentDownItems">
            <div className="footerContentDownItem">
              <img src={character} alt="" />
              <div className="footerContentDownItemOpacity">
                <div className="footerContentDownItemOpacityTitle">
                  DJ Smokeout
                </div>
                <div className="footerContentDownItemOpacityRarity">
                  Rarity: 333.5
                </div>
                <div className="footerContentUpLeftBtn search">
                  <img src={iSearch} alt="" /> Search
                </div>
              </div>
            </div>
            <div className="footerContentDownItem secondItem">
              <img src={character} alt="" />
              <div className="footerContentDownItemOpacity">
                <div className="footerContentDownItemOpacityTitle">
                  DJ Smokeout
                </div>
                <div className="footerContentDownItemOpacityRarity">
                  Rarity: 333.5
                </div>
                <div className="footerContentUpLeftBtn search">
                  <img src={iSearch} alt="" /> Search
                </div>
              </div>
            </div>
          </div>
          <div className="footerContentDownItems">
            <div className="footerContentDownItem thirdItem">
              <img src={character} alt="" />
              <div className="footerContentDownItemOpacity">
                <div className="footerContentDownItemOpacityTitle">
                  DJ Smokeout
                </div>
                <div className="footerContentDownItemOpacityRarity">
                  Rarity: 333.5
                </div>
                <div className="footerContentUpLeftBtn search">
                  <img src={iSearch} alt="" /> Search
                </div>
              </div>
            </div>
            <div className="footerContentDownItem">
              <img src={character} alt="" />
              <div className="footerContentDownItemOpacity">
                <div className="footerContentDownItemOpacityTitle">
                  DJ Smokeout
                </div>
                <div className="footerContentDownItemOpacityRarity">
                  Rarity: 333.5
                </div>
                <div className="footerContentUpLeftBtn search">
                  <img src={iSearch} alt="" /> Search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
