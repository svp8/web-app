import React from "react";
import "./index.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { name: "Кроссовки Абибас", price: 15775, imageUrl: "img/sneakers/1.jpg" },
  {
    name: "Синие/белые кроссовки New Balance 530",
    price: 12355,
    imageUrl: "img/sneakers/2.jpg",
  },
  {
    name: "Черные кроссовки с зелеными вставками Nike Air Max 2090",
    price: 12222,
    imageUrl: "img/sneakers/3.jpg",
  },
  {
    name: "Черные кроссовки Asics Running gel pulse 12",
    price: 11001,
    imageUrl: "img/sneakers/4.jpg",
  },
];

function App() {
  const [cartOpenned, setCartOpenned] = React.useState(false);

  return (
    <div className="wrapper">
      {cartOpenned && <Drawer onClosed={()=>{setCartOpenned(false)}}/> }
      <Header onClickCart={() => setCartOpenned(true)} />

      <div className="content">
        <div
          style={{
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {arr.map((val) => (
            <Card
              name={val.name}
              price={val.price}
              imageUrl={val.imageUrl}
              onPlus={() => console.log("Plus")}
              onFavorite={() => console.log("Fav")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
