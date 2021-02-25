import React from "react";
import StarRating from "react-star-ratings";

export const showAverageRating=  (vendor) => {
    if (vendor && vendor.ratings) {
        let ratingsArray= vendor && vendor.ratings;
        let total= [];
        let length= ratingsArray.length;
        console.log("Length",length);

        ratingsArray.map( (r) => total.push(r.star))
        let totalReduced= total.reduce( (p,n) =>  p+n,0);
        console.log("Total reduced",totalReduced);

        let highest = length * 5;
        console.log("Highest",highest);

        let result= (totalReduced * 5)/ highest;
        console.log("Result",result);

        return (
          <div className= "d-flex justify-content-center  pt-1 pb-3">
            <span>
                <StarRating 
                    rating= {result}
                    starDimension= "20px"
                    starSpacing= "2px"
                    starRatedColor= "red"
                    editing={false}
                />{" "}
                ({vendor.ratings.length})
            </span>

          </div>

        )
    }
}