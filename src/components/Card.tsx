import React, { useState } from "react";

interface Props {
  number: number;
}

function Card({ number }: Props) {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`card card--${visible ? "visible" : "hidden"}`}
    >
      {number}
    </div>
  );
}

export default Card;
