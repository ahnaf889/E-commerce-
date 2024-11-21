import React from "react";

const Header = () => {
  return (
    <div className="bg-black py-3">
      <div className="container">
        <div className="flex justify-between">
          <div></div>
          <div className="text-Text font-poppins font-normal leading-5 text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div>
            <select
              className="font-poppins text-sm bg-transparent text-white font-normal leading-5"
              id="">
              <option value="#">English</option>
              <option value="#">Bangla</option>
              <option value="#">United</option>
              <option value="#">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
