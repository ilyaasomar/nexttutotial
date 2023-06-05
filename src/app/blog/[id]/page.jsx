import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            molestie sapien. Nulla vitae iaculis dui. Sed lacinia, nisi vitae
            rutrum porta, orci quam dapibus mauris, eget pretium lacus risus
            congue nunc. In at tellus eu quam pretium aliquam. In at est eu
            mauris porta malesuada. Pellentesque iaculis nulla metus. Vestibulum
            ut aliquet dui, eu commodo erat.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>ilyasomar</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          molestie sapien. Nulla vitae iaculis dui. Sed lacinia, nisi vitae
          rutrum porta, orci quam dapibus mauris, eget pretium lacus risus
          congue nunc. In at tellus eu quam pretium aliquam. In at est eu mauris
          porta malesuada. Pellentesque iaculis nulla metus. Vestibulum ut
          aliquet dui, eu commodo erat. Nulla volutpat mattis auctor. Mauris
          nulla nisi, finibus at maximus vitae, eleifend eu elit. Nullam blandit
          lobortis nulla, et dignissim neque placerat non. Nulla dapibus, tellus
          non ultrices scelerisque, nisl odio hendrerit massa, ac ultricies leo
          massa nec purus. In ante nisi, porttitor eu neque vitae, vulputate
          posuere libero. Nam a mollis libero, sed molestie ligula. Aliquam
          blandit, erat sodales elementum mattis, enim arcu tristique urna, eget
          volutpat nunc diam ac ligula. Donec justo sapien, sodales at libero
          sit amet, dictum efficitur leo. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Fusce quis auctor odio. Proin pharetra
          risus justo, sit amet ultricies arcu fringilla ut. Ut eu arcu vitae
          nibh varius pharetra sit amet id velit. Nulla fermentum sem quis ex
          venenatis tincidunt. Vestibulum pharetra ultrices quam quis hendrerit.
          Quisque in erat turpis. Ut vel dignissim lorem. Donec auctor aliquet
          eleifend. Morbi et ipsum lorem.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
