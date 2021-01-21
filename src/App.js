import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [mobileItem, setmobileItem] = useState("Apple");

  const flagshipMobiles = {
    Samsung: [
      {
        name: "Samsung Galaxy S20 Ultra",
        price: "Rs.95,845"
      },
      {
        name: "Samsung Galaxy M51 8GB RAM",
        price: "Rs.24,999"
      }
    ],

    Apple: [
      {
        name: "iPhone 12 Pro Max",
        price: " Rs.1.7 lakh  "
      },
      { name: "iPhone x", price: "Rs.45,000" }
    ],
    Sony: [
      {
        name: "Sony Xperia L4",
        price: "Rs. 17,000"
      },
      {
        name: "Sony Xperia 1 II",
        price: " Rs. 54,999"
      }
    ]
  };

  var mobileEmoji = "📲";
  var headingTitle = "Mobiles ";

  var newflagshipMobiles = Object.keys(flagshipMobiles);

  function onClickHandler(item) {
    setmobileItem(item);
    console.log(item);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>
          {mobileEmoji} {headingTitle}
        </h1>
        <h3> Checkout Mobiles </h3>
      </div>
      <div className="button-list">
        {newflagshipMobiles.map((item) => (
          <button onClick={() => onClickHandler(item)} id="button-list">
            {item}
            {console.log(item.name)}
          </button>
        ))}
      </div>
      <hr />
      <div>
        {flagshipMobiles[mobileItem].map((item) => (
          <li className="mobileList">
            <div className="mobileName">
              Name = <span>{item.name}</span>
            </div>
            <div className="Mobileprice">
              {" "}
              Price = <span>{item.price}</span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
