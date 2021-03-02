import React from "react";
import StarRating from "react-star-ratings";

const Star = ({starClicked, numberOfStars}) => {
return (
 <>
   <StarRating 
       changeRating={ () => starClicked(numberOfStars)}
       numberOfStars= {numberOfStars}
       starDimension="20px"
       starSpacing="2px"
       starHoverColor="red"
       starEmptyColor="red"
   />
   <br/>
 </>
)
}

export default Star;