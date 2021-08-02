function Card() {
  return (
    <div className="card">
      <img src="img/sneakers/2.jpg" width="133" height="112" alt="ss" />
      <h5>Мужские кроссовки Nike</h5>
      <div className="cardBottom">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Цена:</span>
          <b>12 999 руб</b>
        </div>
        <button className="button">
          <img src="img/plus.svg" width="11" height="11" alt="ss" />
        </button>
      </div>
    </div>
  );
}
export default Card;