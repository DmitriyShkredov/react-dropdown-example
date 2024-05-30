import type { FC } from "react";
import "./styles.css";

export const Post: FC = () => {
  return (
    <div className="post">
      <img className="post-img" src="./images/img-01.jpg" alt="" />
      <h2 className="post-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        officiis.
      </h2>
      <p className="post-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illum
        sunt amet numquam ea eveniet optio sit voluptatibus sapiente enim soluta
        quia doloremque, quo! Commodi, quos reprehenderit laudantium voluptas
        obcaecati quas veniam distinctio, consectetur adipisicing elit. Quam
        illum sunt amet numquam ea eveniet optio sit voluptatibus sapiente enim
        soluta quia doloremque, voluptatem labore. Lorem ipsum dolor sit elit.
        Quis maxime tenetur harum. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quod necessitatibus ipsum non quisquam aperiam. Lorem
        ipsum dolor sit, adipisicing elit. Porro nam qui, doloremque dolor!
      </p>
    </div>
  );
};
