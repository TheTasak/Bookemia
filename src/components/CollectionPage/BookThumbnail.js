import React from "react"
import { Link } from "react-router-dom"
import Thumbnail from "../Common/Thumbnail"
import styles from "./BookThumbnail.module.css"

export default function BookThumbnail(props) {
  let img_link = props.image_link !== undefined && props.image_link.length > 0 ? "http://localhost:9000/" + props.image_link : "";

  return (
    <Link to={"/book?id=" + props.id}>
      <Thumbnail>
        <img className={styles["bookThumbnail--image"]} src={img_link} />
        <div className={styles["bookThumbnail--title"]}>
          <span>{props.title}</span>
        </div>
        <div className={styles["bookThumbnail--author"]}>
          <span>{props.authors}</span>
        </div>
      </Thumbnail>
    </Link>
  )
}
