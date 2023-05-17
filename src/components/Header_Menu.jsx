import React from 'react';

const Header_Menu = ({ styles, stylesMobil }) => {
  return (
    <ul className={`${styles?.container} ${stylesMobil?.container}`}>
      <li>
        <a href="#" className={`${stylesMobil?.listItem} ${styles?.hover}`}>Home</a>
      </li>
      <li>
        <a href="#" className={`${stylesMobil?.listItem} ${styles?.hover}`}>Streams</a>
      </li>
      <li>
        <a href="#" className={`${stylesMobil?.listItem} text-[#E58D27]`}>Game Store</a>
      </li>
      <li>
        <a href="#" className={`${stylesMobil?.listItem} ${styles?.hover}`}>News</a>
      </li>
    </ul>
  );
};

export default Header_Menu;

