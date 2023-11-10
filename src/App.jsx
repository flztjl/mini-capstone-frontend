import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import errorImage from "./assets/images/logo.png";
import "boxicons/css/boxicons.min.css";

export const Image = ({ imageName }) => {
  let imgUrl;

  try {
    imgUrl = new URL(`./assets/images/${imageName}`, import.meta.url).href;
  } catch (e) {
    imgUrl = errorImage;
  }

  return <img src={imgUrl} alt={imageName} />;
};

export const App = () => {
  const [flashMessage, setFlashMessage] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header setSearchVisible={setSearchVisible} />
        <div onClick={() => setFlashMessage(null)}>{flashMessage}</div>
        <Content searchVisible={searchVisible} setSearchVisible={setSearchVisible} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};
