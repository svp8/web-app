import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="img/logo.png" width="40" height="40" alt="ss" />
          <div className="headerInfo">
            <h3 style={{ "text-transform": "uppercase" }}>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li style={{ "margin-right": "30px" }}>
            <img src="img/cart.svg" alt="ss" />
            <span>1250 руб</span>
          </li>
          <li>
            <img src="img/user.svg" alt="ss" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 style={{ "margin-bottom": "40px" }}>Все кроссовки</h1>
        <div style={{ display: "flex" ,}}>
          <div className="card">
            <img src="img/sneakers/1.jpg" width="133" height="112" alt="ss" />
            <h5>Мужские кроссовки Nike</h5>
            <div className="cardBottom">
              <div style={{ display: "flex", "flex-direction": "column" }}>
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img src="img/plus.svg" width="11" height="11" alt="ss" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="img/sneakers/2.jpg" width="133" height="112" alt="ss" />
            <h5>Мужские кроссовки Nike</h5>
            <div className="cardBottom">
              <div style={{ display: "flex", "flex-direction": "column" }}>
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img src="img/plus.svg" width="11" height="11" alt="ss" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="img/sneakers/3.jpg" width="133" height="112" alt="ss" />
            <h5>Мужские кроссовки Nike</h5>
            <div className="cardBottom">
              <div style={{ display: "flex", "flex-direction": "column" }}>
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img src="img/plus.svg" width="11" height="11" alt="ss" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="img/sneakers/4.jpg" width="133" height="112" alt="ss" />
            <h5>Мужские кроссовки Nike</h5>
            <div className="cardBottom">
              <div style={{ display: "flex", "flex-direction": "column" }}>
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>
              <button className="button">
                <img src="img/plus.svg" width="11" height="11" alt="ss" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
