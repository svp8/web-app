import React from "react";
import axios from "axios";
import "./index.scss";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpenned, setCartOpenned] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://610a6cf052d56400176afd9c.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
    axios
      .get("https://610a6cf052d56400176afd9c.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://610a6cf052d56400176afd9c.mockapi.io/cart/${id}`);
    console.log(id);
    setCartItems((prev)=>(prev.filter((item)=>item.id!==id)))
  };
  const onAddToCart = (obj) => {
    let arr = [...cartItems];
    // console.log(arr);
    let compare = arr.filter((v) => v.title === obj.title&&v.imageUrl===obj.imageUrl);
    if (compare.length !== 0) {
      let index = arr.indexOf(compare[0]);
      console.log(index);
      if (index !== -1) {
        arr.splice(index, 1);

      }
    } else {
      arr = [...cartItems, obj];
      axios.post("https://610a6cf052d56400176afd9c.mockapi.io/cart", obj);
    }
    
    setCartItems(arr);
  };

  return (
    <div className="wrapper">
      {cartOpenned && (
        <Drawer
          items={cartItems}
          onClosed={() => {
            setCartOpenned(false);
          }}
          onRemove={onRemoveItem}
        />
      )}
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
            <input
              value={searchValue}
              placeholder="Поиск..."
              onChange={onChangeSearchInput}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((val) => (
              <Card
                key={val.id}
                title={val.title}
                price={val.price}
                imageUrl={val.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={() => console.log("Fav")}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
