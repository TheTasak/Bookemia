import React from "react"
import Header from "./Header"
import { Link, useSearchParams} from "react-router-dom"

export default function BookPage() {
  const [urlParams, setUrlParams] = useSearchParams();
  let [bookData, setBookData] = React.useState({});
  let [imgLink, setImgLink] = React.useState("");
  React.useEffect(() => {
    fetch("http://localhost:9000/testAPI/book/" + urlParams.get("id"))
      .then(res => res.json())
      .then(data => {
        setBookData(data);
        if(data.image_link.length > 0) {
          setImgLink("http://localhost:9000/" + data.image_link);
        }
      });
  }, [urlParams]);
  return (
    <div>
      <Header />
      <div className="main">
        <div className="book--title">
          <h1>{bookData.title}</h1>
        </div>
        <div className="book--boxes">
          <div className="book--image">
            <img src={imgLink} />
          </div>
          <div className="book--details">
            <table>
              <tbody>
                <tr>
                  <td>Authors:</td>
                  <td>{bookData.authors}</td>
                </tr>
                <tr>
                  <td>Publisher:</td>
                  <td>{bookData.publisher}</td>
                </tr>
                <tr>
                  <td>Publish date:</td>
                  <td>{String(bookData.publish_date).slice(0, 10)}</td>
                </tr>
                <tr>
                  <td>Category:</td>
                  <td>{bookData.category}</td>
                </tr>
                <tr>
                  <td>Collections:</td>
                  <td>{bookData.collections !== undefined ? bookData.collections.map(collection => {
                      return (
                        <span key={collection.id} className="book--collection_link">
                          <Link to={"/collection?id=" + collection.id}>
                            {collection.name}
                          </Link>
                          <br></br>
                        </span>
                      )
                    }) : ""}
                  </td>
                </tr>
                <tr>
                  <td>Page count:</td>
                  <td>{bookData.page_count}</td>
                </tr>
                <tr>
                  <td>Language:</td>
                  <td>{bookData.language}</td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>{bookData.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
