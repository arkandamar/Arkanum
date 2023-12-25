import "./Squares.scss";
import comment from "../assets/comment.png";
import compass from "../assets/compass.png";
import unlikedIcon from "../assets/unliked.png";
import likedIcon from "../assets/liked.png";
import { useState } from "react";

export default function Post() {
  const [like, setLike] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const onLikeHandle = () => {
    // liked toggle
    !liked ? setLiked(true) : setLiked(false);

    // if not liked increment, if liked decrement
    setLike(!liked ? like + 1 : like - 1);
  };

  return (
    <div className="container-square">
      <div className="side">
        <div className="relation">
          <div></div>
        </div>
        <div className="avatar"></div>
        <div className="relation">
          <div></div>
        </div>
        <div className="relation">
          <div></div>
        </div>
      </div>
      <div className="content">
        <div className="info">
          <div className="username">budiuhuy</div>
          <div className="time">11 hours ago</div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          veritatis unde, officiis, recusandae natus sed fuga, optio adipisci
          consectetur architecto corporis at nam quam facere non numquam aliquid
          enim consequuntur. Cupiditate et voluptates asperiores, quidem
          consequatur obcaecati deserunt minima nisi tempora pariatur nulla
          repudiandae sit itaque molestias tempore placeat ab fugiat mollitia
          labore! Amet, cupiditate laboriosam? Lorem ipsum dolor sit ame
        </div>
        <div className="interaction">
          <div onClick={onLikeHandle} className="container-inter like">
            <img src={liked ? likedIcon : unlikedIcon} />
            <div className="number">{like}</div>
          </div>
          <div className="container-inter comment">
            <img src={comment} />
            <div className="number">12</div>
          </div>
          <div className="container-inter compass">
            <img src={compass} />
            {/* <div className="number"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
