import React from "react";

const BookCart = ({ bookData }) => {
  return (
    <div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
          alt="Book_Img"
          width="50%"
        />
      </div>
      <div>{bookData.name}</div>
    </div>
  );
};

export default BookCart;
