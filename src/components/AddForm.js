import React from "react"

export default function AddForm() {
  const [formData, setFormData] = React.useState({
    title: "",
    authors: "",
    publisher: "",
    date: "",
    tags: "",
    pages: "",
    language: "",
    imgFile: [],
    bookLink: "",
    description: "",
    collection: []
  });
  // Options for select collections
  const [collectionOptions, setCollectionOptions] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:9000/testAPI/collections")
      .then(res => res.json())
      .then(res => setCollectionOptions(res));
  }, []);
  const options = collectionOptions.map(collection => {
    return (
      <option key={collection.id} value={collection.id}>{collection.name}</option>
    )
  });

  function handleInput(event) {
    var value;
    console.log( formData.imgFile);
    if(event.target.name == "imgFile") {
      value = event.target.files[0];
    } else if(event.target.name == "collection") {
      value = [...event.target.options].filter(o => o.selected).map(o => o.value);
    } else {
      value = event.target.value;
    }
    setFormData(oldFormData => {
      return {
        ...oldFormData,
        [event.target.name] : value
      }
    });
  }
  function handleSubmit(event) {
    const preparedData = new FormData();
    for(const name in formData) {
      preparedData.append(name, formData[name]);
    }
    fetch("http://localhost:9000/testAPI/book", {
      method: "POST",
      body: preparedData
    });
  }
  // GOOGLE API Integration with link loading
  function loadBook() {
    if(formData.bookLink.length > 0) {
      let idStart = formData.bookLink.indexOf("id=")+3;
      let idEnd = formData.bookLink.indexOf("&", idStart);
      let id = formData.bookLink.substring(idStart, idEnd);
      fetch("https://www.googleapis.com/books/v1/volumes/" + id)
      .then(res => res.json())
      .then(res => setFormData((oldData) => {
        return {
          ...oldData,
          title: res.volumeInfo.title,
          authors: res.volumeInfo.authors.map(author => author).join(", "),
          publisher: res.volumeInfo.publisher,
          date: res.volumeInfo.publishedDate,
          tags: res.volumeInfo.categories.map(category => category).join(", "),
          pages: res.volumeInfo.pageCount,
          language: res.volumeInfo.language,
          description: res.volumeInfo.description
        }
      }));
    }
  }
  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <h2>Add a book</h2>
        <div>
          <input className="form-input" value={formData.title} type="text" name="title" id="title" onChange={handleInput} autoComplete="off" placeholder="Title"/>
        </div>
        <div>
          <input className="form-input" value={formData.authors} type="text" name="authors" id="authors" onChange={handleInput} autoComplete="off" placeholder="Authors"/>
        </div>
        <div>
          <input className="form-input" value={formData.publisher} type="text" name="publisher" id="publisher" onChange={handleInput} autoComplete="off" placeholder="Publisher"/>
        </div>
        <div>
          <input className="form-input" value={formData.date} type="date" name="date" id="date" onChange={handleInput} autoComplete="off" pattern="\d{4}-\d{2}-\d{2}" placeholder="Publish date"/>
        </div>
        <div>
          <input className="form-input" value={formData.tags} type="text" name="tags" id="tags" onChange={handleInput} autoComplete="off" placeholder="Tags"/>
        </div>
        <div>
          <input className="form-input" value={formData.pages} type="number" name="pages" id="pages" onChange={handleInput} autoComplete="off" min="0" placeholder="Number of pages"/>
        </div>
        <div>
          <input className="form-input" value={formData.language} type="text" name="language" id="language" onChange={handleInput} autoComplete="off" placeholder="Language"/>
        </div>
        <div>
          <textarea className="form-input" value={formData.description} name="description" id="description" onChange={handleInput} autoComplete="off" placeholder="Description"/>
        </div>
        <div>
          <select name="collection" id="collection" multiple={true} value={formData.collection} onChange={handleInput}>
            <option value="" disabled={true}>--- Choose collections ---</option>
            {options}
          </select>
        </div>
        <div>
          <label className="form-file" htmlFor="imgFile">Book thumbnail</label>
          <input onChange={handleInput} type="file" name="imgFile" id="imgFile" required/>
          {Object.getPrototypeOf(formData.imgFile) == Array.prototype ? "" : formData.imgFile.name}
        </div>
        <div>
          <input className="form-input" value={formData.bookLink} type="text" name="bookLink" id="bookLink" onChange={handleInput} autoComplete="off" placeholder="GoogleBooks link"/>
        </div>
        <div>
          <button onClick={loadBook} className="submit-button other-button" type="button">Load GoogleBooks</button>
        </div>
        <div>
          <button className="submit-button" type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}
