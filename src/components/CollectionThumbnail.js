import React from "react"
import { Link, useLocation } from "react-router-dom"

export default function CollectionThumbnail(props) {

  return (
    <Link to={"/collection?id=" + props.id}>
      <div className="bookThumbnail">
        <div className="bookThumbnail--title">
          <span>{props.name}</span>
        </div>
      </div>
    </Link>
  )
}
