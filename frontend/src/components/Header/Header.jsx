import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Get ready to satisfy your cravings. We bring the best local food right
          to your doorstep!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
