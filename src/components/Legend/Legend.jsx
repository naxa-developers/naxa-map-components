import React from "react";
import "./legend.css";

export default function Legend({ fillColor }) {
  // console.log(fillColor, "fill");
  const colors=[];
  const colorsValue=[];
  fillColor && fillColor.forEach((data,index)=>{
    // console.log(index %2);
    if(index %2 !==0){
      return colors.push(data);
    }
  });
  fillColor && fillColor.forEach((data,index)=>{
    // console.log(index %2);
    if(index %2 ===0){
      return colorsValue.push(data);
    }
  });
  // console.log(colors);
  // console.log(colorsValue);
  return (
    <div className="info legend ">
      {colors.map((data,index)=>{
          return <div key={index}><i style={{ background: data }}></i>{colorsValue[index]}<br/></div>
      })}
      </div>
    
  );
}
