import React from "react";

export default function TabButton({children,onSelect,isSelected}){
  return (
    <button className = {isSelected?"active":null} onClick={onSelect}>{children}</button>
  )
}



