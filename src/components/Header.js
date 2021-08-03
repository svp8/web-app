function Header(props){

return(
    <header>
        <div className="headerLeft">
          <img src="img/logo.png" width="40" height="40" alt="ss" />
          <div className="headerInfo">
            <h3 style={{ textTransform: "uppercase" }}>React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li onClick={props.onClickCart} style={{ marginRight: "30px" ,cursor:"pointer"}}>
            <img src="img/cart.svg" alt="ss" />
            <span>1250 руб</span>
          </li>
          <li>
            <img src="img/user.svg" alt="ss" />
          </li>
        </ul>
      </header>
)
}
export default Header;