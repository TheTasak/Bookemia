import React from "react"
import Header from "../Common/Header"
import CollectionThumbnail from "./CollectionThumbnail"
import styles from "../Common/FilterButtons.module.css"

export default function CollectionPage() {
  let [dataObj, setDataObj] = React.useState([]);
  let [sort, setSort] = React.useState("");
  React.useEffect(() => {
    fetch("http://localhost:9000/testAPI/collections")
      .then(res => res.json())
      .then(data => setDataObj(data));
  }, []);
  const collectionObj = dataObj.map( collection => {
    return (
      <CollectionThumbnail key={collection.id} {...collection}/>
    )
  });
  function changeSort(event) {
    let name = event.target.name;
    setSort(name);
    switch (name) {
      case "title-up":
        setDataObj(oldData => oldData.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1));
        break;
      case "title-down":
        setDataObj(oldData => oldData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
        break;
      case "reset":
        setDataObj(oldData => oldData.sort((a, b) => a.id > b.id ? 1 : -1));
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <Header />
      <div className="main">
        <div className={styles.filterButtons}>
          <span>Sort by:</span>
          <button type="button" className={sort == "title-up" ? styles.clicked : styles["not-clicked"]} name="title-up" onClick={changeSort}>Title <i className="fa-solid fa-arrow-up-a-z"></i></button>
          <button type="button" className={sort == "title-down" ? styles.clicked : styles["not-clicked"]} name="title-down" onClick={changeSort}>Title <i className="fa-solid fa-arrow-down-a-z"></i></button>
          <button type="button" name="reset" onClick={changeSort}>Reset</button>
        </div>
        <div className="content"> {collectionObj} </div>
      </div>
    </div>
  )
}
