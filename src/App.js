import images from "./images";
import ImageSlider from "./ImageSlider";
import { useState, useEffect } from "react";
import SwiperSlider from "./SwiperSlider";
import "./style_2.css";
import Bar from "./Bar";
import Hatt from "./Hatt";

const App = () => {
  const initialMenuItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
  ];

  // State to hold menu items and "More" items
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [moreItems, setMoreItems] = useState([]);

  // Function to update menu items based on screen width
  const updateMenuItems = () => {
    // const menuWidth = document.getElementById("menu").offsetWidth;
    const menuElement = document.getElementById("menu");
    const menuWidth = menuElement ? menuElement.offsetWidth : 0;
    // const menuItemWidth = document.getElementById("menu-item").offsetWidth;

    const menuItemElement = document.getElementById("menu-item");
    const menuItemWidth = menuItemElement ? menuItemElement.offsetWidth : 0;

    const maxItems = Math.floor(menuWidth / menuItemWidth);
    const remainingItems = initialMenuItems.slice(maxItems);

    setMenuItems(initialMenuItems.slice(0, maxItems));
    setMoreItems(remainingItems);
  };

  // Update menu items on initial render and on window resize
  useEffect(() => {
    updateMenuItems();
    window.addEventListener("resize", updateMenuItems);
    return () => {
      window.removeEventListener("resize", updateMenuItems);
    };
  }, []);
  return (
    <>
      {/* <nav id="menu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} id="menu-item">
              {item}
            </li>
          ))}
          {moreItems.length > 0 && (
            <li className="more-dropdown">
              More
              <ul>
                {moreItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </nav> */}
      <Bar />
      <div className="App">
        <SwiperSlider images={images} />
      </div>
    </>
  );
};
export default App;
