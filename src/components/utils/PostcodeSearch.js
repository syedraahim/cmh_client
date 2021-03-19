import React,{Component} from "react";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import {useHistory} from "react-router-dom";
import {Card,Row,Col} from "antd";
import {FontSizeOutlined, SearchOutlined} from "@ant-design/icons";
import moment from "moment";
import keys from "../../config/keys";
import GetSubcategories from "./GetSubcategories";

export class PostcodeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
     }
   
    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results =>
          { getLatLng(results[0])
          .then(latLng => {
              console.log('Success', latLng);
              this.setState({address})
              console.log("Results", results);
          })  
        })       
          .catch(error => console.error('Error', error));
      };

    searchOptions = {
        componentRestrictions: { country: ['gb'] }       
      }

      
    render() {
      return (
        <div className="site-card-wrapper">
        <Row>
         <Col span={12}> 
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect} 
            searchOptions={this.searchOptions}                 
         >          
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
                  
            <input
              {...getInputProps({
                placeholder: 'Location ...',
                className: 'location-search-input mt-3 mb-3 font-weight-bold h6',
                style: { height:"50px", width:"500px"}
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
            
         </div> 
        )}
       
      </PlacesAutocomplete> 
      </Col>
      <Col span={12}>       
            <GetSubcategories />                 
       </Col>   
      
      </Row>
          
      </div>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: keys.GOOGLE_MAPS_API_KEY 
  })(PostcodeSearch);