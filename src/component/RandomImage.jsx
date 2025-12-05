import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../css/RandomImage.css";
const RandomImage = () => {
  const [imgUrl, setImgUrl] = useState("");

  const fetchCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    setImgUrl(data[0].url);
  };

  const fetchDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setImgUrl(data.message);
  };

  const fetchRandom = () => {
    Math.random() > 0.5 ? fetchCat() : fetchDog();
  };

  return (
    <div className="random-wrapper">
      <Card>
        {imgUrl && <Card.Img variant="top" src={imgUrl} alt="Animal" />}
        <Card.Body></Card.Body>
      </Card>
      <Card.Text>Clicca qui per generare un adorabile animaletto! ❤️</Card.Text>
      <div className="btnDiv">
        <Button className="btnCat" onClick={fetchCat}>
          Mostra un micetto 😺
        </Button>
        <Button className="btnDog" onClick={fetchDog}>
          Mostra un cagnolino 🐶
        </Button>
        <Button className="btnRandom" onClick={fetchRandom}>
          Mostra un animaletto a caso 🦴
        </Button>
      </div>
    </div>
  );
};
export default RandomImage;
