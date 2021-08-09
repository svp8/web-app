function Drawer({ onClosed, onRemove, items = [] }) {
console.log(items);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2
          style={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
         >
          Корзина{" "}
          <img
            onClick={onClosed}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <div>
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem">
                <div
                  className="cartItemImg"
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                >
                  {/* <img src="" alt="Sneakers" /> */}
                </div>
                <div style={{ marginRight: "20px", flex: 1 }}>
                  <p style={{ marginBottom: "5px" }}>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  onClick={() => onRemove(obj.id)}
                  alt="Remove"
                />
              </div>
            ))}
          </div>
          <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 999 руб</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 002 руб</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
        </div>
        ) : (
          <div>
            <h2> Корзина пуста</h2>
          </div>
        )}

        
      </div>
    </div>
  );
}
export default Drawer;
