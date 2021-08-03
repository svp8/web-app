function Drawer(props){

return(
    <div className="overlay" >
        <div className="drawer">
          <h2
            style={{
              marginBottom: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Корзина{" "}
            <img onClick={props.onClosed} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </h2>
          <div className="items">
            <div className="cartItem">
              <div
                className="cartItemImg"
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              >
                {/* <img src="" alt="Sneakers" /> */}
              </div>
              <div style={{ marginRight: "20px", flex: 1 }}>
                <p style={{ marginBottom: "5px" }}>
                  Мужские кроссовки Nike ,kf ,kf ,kf
                </p>
                <b>12 250 руб</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
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
      </div>
)
}
export default Drawer;