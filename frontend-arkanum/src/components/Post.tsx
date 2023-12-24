import "./Post.scss";
import comment from "../assets/comment.png";
import compass from "../assets/compass.png";

export default function Post() {
  return (
    <div className="container-post">
      <div className="side">
        <div className="avatar"></div>
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
          <div className="comment">
            <img src={comment} />
          </div>
          <div className="compass">
            <img src={compass} />
          </div>
        </div>
      </div>
    </div>
  );
}
