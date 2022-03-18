import React from "react"
import { Link } from "react-router-dom"

export default function BookThumbnail(props) {
  let img_link = props.image_link !== undefined && props.image_link.length > 0 ? "http://localhost:9000/" + props.image_link : "";

  return (
    <Link to={"/book?id=" + props.id}>
      <div className="bookThumbnail">
        <img className="bookThumbnail--image" src={img_link} />
        <div className="bookThumbnail--title">
          <span>{props.title}</span>
        </div>
        <div className="bookThumbnail--author">
          <span>{props.authors}</span>
        </div>
      </div>
    </Link>
  )
}
