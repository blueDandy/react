import "./Content.css";
import character from "../../assets/character.png";
import avatar from "../../assets/avatar.png";

function Content() {
  return (
    <div className="contentWrapper">
      <div className="contentContainer">
        <div className="contentTextContainer">
          <div className="contentTextTitle">
            Get your 3D NFT avatar for life in the Metaverse
          </div>
          <div className="contentTextContent">
            Don’t skip design. Learn design and code, by building real apps,
            collaborate and solving product UI problems.
          </div>
          <div className="contentTextAvatar">
            <div className="contentTextAvatarIcon">
              <img src={avatar} alt="" />
            </div>
            <div className="contentTextAvatarTextGroup">
              <div className="contentTextAvatarUp">MINT 3D AVATAR</div>
              <div className="contentTextAvatarDown">N8, billed once</div>
            </div>
          </div>
        </div>
        <div className="contentImageContainer">
          <img src={character} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content;
