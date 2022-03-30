import React from "react"
import { Link, useLocation } from "react-router-dom"
import Thumbnail from "../Common/Thumbnail"
import styles from "./CollectionThumbnail.module.css"

export default function CollectionThumbnail(props) {
  return (
    <Link to={"/collection?id=" + props.id}>
      <Thumbnail>
        <div className={styles["collectionThumbnail--title"]}>
          <span>{props.name}</span>
        </div>
      </Thumbnail>
    </Link>
  )
}
