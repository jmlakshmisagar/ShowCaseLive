import "./App.css";
import logo from "./logo.png";
import mypic from "./Mine.jpeg";

import { storage, storageRef, listAll, getDownloadURL } from "./firebaseConfig";
import { useState, useEffect } from "react";

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function fetchDisplayImages() {
      console.log("fetching");
      const storRef = storageRef(storage, "images");

      try {
        const storeList = await listAll(storRef);
        const urls = await Promise.all(
          storeList.items.map(async (i) => {
            const downloadUrl = await getDownloadURL(i);
            return downloadUrl;
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.log("Can't fetch images", error);
      }
    }

    fetchDisplayImages();
  }, []);

  const splitIntoColumns = (arr, numColumns) => {
    const result = [];
    for (let i = 0; i < numColumns; i++) {
      result.push([]);
    }
    arr.forEach((item, index) => {
      result[index % numColumns].push(item);
    });
    return result;
  };

  const columns = splitIntoColumns(imageUrls, 4);

  return (
    <div className="App">
      <div className="container">
        <div className="fixed-top topHeader">
          <div className="container px-2 d-flex justify-content-between">
            <span className="d-flex align-items-center">
              <img src={logo} className="imglogo" alt="Logo" />
              <span className="title fs-4 mx-2">ShowCase</span>
            </span>
            <a
              className="d-flex align-items-center fs-5 mx-2 text-secondary"
              style={{ cursor: "pointer", textDecoration: "none" }}
              href="https://www.linkedin.com/in/lakshmisagar-jm/"
            >
              <span className="mx-2"></span>
              <img
                src={mypic}
                style={{
                  width: "2.5rem",
                  borderRadius: "50%",
                  background: "white",
                  padding: "2px",
                }}
              ></img>
            </a>
          </div>
        </div>

        <main className="text-center">
          <div className="TextDecor mt-5 pt-4">
            <p className="dotEffect1">ShowCase</p>
            <br />
            <p className="dotEffect2"> Open Almirah Collections </p>
          </div>

          <div className="ImageGalleryBackground p-3">
            <div className="container">
              <div className="row">
                {columns.map((column, index) => (
                  <div key={index} className="col-lg-3 col-md-6 col-sm-12 pt-2">
                    {column.map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt={`image-${index}-${idx}`}
                        className="img-fluid mt-2 mb-2 borderImages"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
