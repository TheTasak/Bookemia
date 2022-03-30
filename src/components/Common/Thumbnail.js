import React from "react"
import styles from "./Thumbnail.module.css"

export default function Thumbnail(props) {
  return (
    <div className={styles.thumbnail}>
      {props.children}
    </div>
  )
}
