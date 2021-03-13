import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./component/navbar";

function App() {
  const [imagerender, updateimgrender] = useState("");


  function renderimages(responseData) {
    const imagearray = responseData.map((imgobj, index) => {
      const imgurl = imgobj.download_url;
      const author = imgobj.author;
      console.log(index)

      function showimg(elem, imgsrc){
        let yash = elem
        let source= imgsrc 
        var modal = document.getElementById("myModal");
        var img = document.getElementById(yash);
        var modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = source;
        
      }

      function close(){
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
      }
      
      return (
        
       <>
        <div className="gallery">
          <img id={index} src={imgurl} width="200" id={index} onClick={()=> showimg(index, imgurl)} />
          <div className="author">This image is captured by {author}</div>
          </div>
          <div id="myModal" class="modal">
            <span class="close" onClick={close}>&times;</span>
            <img class="modal-content" id="img01"/>
          </div> 
        </> 
      );
    });
    updateimgrender(imagearray);
  }

  async function getData() {
    let data = await axios("https://picsum.photos/v2/list");
    console.log(data.data);
    renderimages(data.data);
  }

  useEffect(() => {
    getData();
  }, []);
  // popup();
  return (
    <>
      <Nav />
      <div className="App">{imagerender}</div>
    </>
  );
}

export default App;
