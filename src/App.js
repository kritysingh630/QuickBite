import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
          alt=" "
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>My Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestuarantCard = () => {
  return(
    <div className="res-card">
      <img className="res-logo" alt=" " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oycvffrrb3oyp2ncyn1n"></img>
      <h3>Gopal Dosa</h3>
      <h4>Dosa, Idli, Vada</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div>
      <div className="searchbox">
        <input type="text"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
        <RestuarantCard/>
        <RestuarantCard/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;
