import React from "react"
import Header from "../Common/Header"
import BookThumbnail from "./BookThumbnail"
import {useSearchParams} from "react-router-dom"
import styles from "../Common/FilterButtons.module.css"

export default function CollectionPage() {
  const [urlParams, setUrlParams] = useSearchParams();
  let [dataObj, setDataObj] = React.useState([]);
  let [sort, setSort] = React.useState("");
  React.useEffect(() => {
    fetch("http://localhost:9000/testAPI/collection/" + urlParams.get("id"))
      .then(res => res.json())
      .then(data => setDataObj(data));
  }, [urlParams]);
  const bookObj = dataObj.map( book => {
    return (
      <BookThumbnail key={book.id} {...book}/>
    )
  });
  function changeSort(event) {
    let name = event.target.name;
    setSort(name);
    switch (name) {
      case "author-up":
        setDataObj(oldData => oldData.sort((a, b) => a.authors.toLowerCase() < b.authors.toLowerCase() ? 1 : -1));
        break;
      case "author-down":
        setDataObj(oldData => oldData.sort((a, b) => a.authors.toLowerCase() > b.authors.toLowerCase() ? 1 : -1));
        break;
      case "title-up":
        setDataObj(oldData => oldData.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1));
        break;
      case "title-down":
        setDataObj(oldData => oldData.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
        break;
      case "reset":
        setDataObj(oldData => oldData.sort((a, b) => a.id > b.id ? 1 : -1));
        break;
      default:
        break;
    }
  }
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <div className={styles.filterButtons}>
          <span>Sort by:</span>
          <button type="button" className={sort === "author-up" ? styles.clicked : styles["not-clicked"]} name="author-up" onClick={changeSort}>Author <i className="fa-solid fa-arrow-up-a-z"></i></button>
          <button type="button" className={sort === "author-down" ? styles.clicked : styles["not-clicked"]} name="author-down" onClick={changeSort}>Author <i className="fa-solid fa-arrow-down-a-z"></i></button>
          <button type="button" className={sort === "title-up" ? styles.clicked : styles["not-clicked"]} name="title-up" onClick={changeSort}>Title <i className="fa-solid fa-arrow-up-a-z"></i></button>
          <button type="button" className={sort === "title-down" ? styles.clicked : styles["not-clicked"]} name="title-down" onClick={changeSort}>Title <i className="fa-solid fa-arrow-down-a-z"></i></button>
          <button type="button" name="reset" onClick={changeSort}>Reset</button>
        </div>
        <div className="content"> {bookObj} </div>
      </div>
    </React.Fragment>
  )
}
