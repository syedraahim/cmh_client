import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import usePlacesAutocomplete from '@atomap/use-places-autocomplete';
import {DatePicker, Select} from "antd";
import {FontSizeOutlined, SearchOutlined} from "@ant-design/icons";
import moment from "moment";

const {RangePicker} = DatePicker;
const {Option} = Select;
const GOOGLE_MAP_API_KEY = '<YOUR_GOOGLE_MAP_API_KEY>';

const PostcodeSearch= () => {

    const [ selectedPrediction, setSelectedPrediction] = useState(null);
    const [searchValue, setSearchValue]= useState("");
    const [ subcat, setSubcat] = useState("");
    const history = useHistory();

    const {predictions, error} = usePlacesAutocomplete(searchValue);

    if (error) {
        console.error(error);
    }

    const handleSelect= (e,prediction) => {
        e.preventDefault();
        setSelectedPrediction(prediction);      
    }

    // const handleSubmit= () => {
    //     history.push(`/search-result?location=${location}&subcat=${subcat}`)
    // }
    return (
      <div className="d-flex pb-4">
         <div className= "w-100 mr-2">
           <input
              name="predictionSearch"
              placeholder= "Enter your location"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style= {{height:"50px", width:"600px", fontSize:"20px"}}
           />
          </div>
          <div className= "w-100 ml-2">
           <select
              name="subcat"
              placeholder= "Category"
              value={subcat}
              onChange={(e) => setSubcat(e.target.value)}
              style= {{height:"50px", width:"600px", fontSize:"20px"}}
           >          
           <option>Select a Category</option>
           </select>
           </div>
           <div className= "btn btn-primary ml-2">
             <SearchOutlined />
           </div>
           
          <img
          src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
          alt="Powered by Google"
          className= "ml-3"
          />
          <ul>
            {predictions?.map((prediction) => (
            <li key={prediction?.place_id}>
              <button
                onClick={(e) => handleSelect(e, prediction)}
                onKeyDown={(e) => handleSelect(e, prediction)}
              >
                {prediction?.structured_formatting?.main_text || 'Not found'}
              </button>
            </li>
          ))}
        </ul>
          
         
      </div>
    );
}

export default PostcodeSearch;