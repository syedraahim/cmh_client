import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Menu, Slider} from "antd";
import {getVendorsByCount,getVendorsByFilter} from "../../actions/vendor";
import VendorCard from "../cards/VendorCard";
import  {PoundOutlined} from "@ant-design/icons";

const {SubMenu, ItemGroup} = Menu;

const Shop = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [area, setArea] = useState([]);
  const [price, setPrice] = useState([0,0]);
  const [ok,setOk] = useState("");

  const {search} = useSelector( state => ({...state}));
  const {text} = search;

 useEffect(() => {
      loadVendors();
  },[]);

  // load vendors by count when the page loads for the first time
const loadVendors= () => {
    setLoading(true);
    getVendorsByCount(12).then( v => setVendors(v.data));
    setLoading(false);
}

//load vendors based on user search text input in search bar
useEffect( () => {
    const delay= setTimeout( () => {
        loadVendorsByFilter({query: text}); 
    },300);
    return () => clearTimeout(delay);
},[text]);

const loadVendorsByFilter= (arg) => {
    getVendorsByFilter(arg)
    .then ( (res) => {
        setVendors(res.data)
})
}

//load vendors based on price range selected
useEffect( () => {
    loadVendorsByFilter({price})
},[ok]);

const handleSlider= () => {
    
}

return (
    <div className="container-fluid">
      <div className="row">
        <div className= "col col-md-3 mt-2">
           <h4>Search/Filter</h4>
           <hr />
           <Menu defaultOpenKeys={["1", "2", "3", "4"]} mode= "inline">
              <SubMenu key="1" title= {<span className="h6">Area</span>}>
                  <div>
                     <h5>Area1</h5> 
                  </div>
              </SubMenu>
              <SubMenu key="2" title={<span className= "h6">
                                       <PoundOutlined />Price
                                       </span>
                                       }>
                  <div>
                     <Slider className= "ml-4 mr-4 mt-2" 
                             tipFormatter={(v) => `£${v}` } 
                             range 
                             value= {price}
                             onChange= {handleSlider} 
                             max="500"   
                             /> 
                  </div>
              </SubMenu>
              <SubMenu key="3" title={<span className= "h6">
                                       Rating
                                       </span>
                                       }>
                  <div>
                    
                  </div>
              </SubMenu>
              <SubMenu key="4" title={<span className= "h6 mt-2">
                                       Category
                                       </span>
                                       }>
                  <div>
                      <button></button>
                  </div>
              </SubMenu>
              <SubMenu key="5" title={<span className= "h6 mt-2">
                                       Sub Category
                                       </span>
                                       }>
                  <div>
                      <button></button>
                  </div>
              </SubMenu>
           </Menu>
        </div>
        <div className= "col col-md-9">
         {loading ? <h4 className="text-danger">Loading...</h4>
                  : <h4>Vendors</h4>
         }

         {vendors.length < 1 && <p>No Vendors found !!!!</p>}
           
           <div className= "row pb-5">
              {vendors.map( (v) => (
                <div className= "col col-md-4 mt-2" key={v._id}>
                   <VendorCard vendor= {v} />
                </div>
              ))}
           </div>
         <div>

         </div>
        </div>

      </div>

    </div>
)
}

export default Shop;