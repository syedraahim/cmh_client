import react,{useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {emptyUserCart, getuserCart, saveUserAddress} from "../../actions/user";
import {fetchVendorInfoById} from "../../actions/vendorInfo";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Checkout= ({history}) => {

  const [ vendors, setVendors] = useState([]);
  const [total,setTotal] = useState(0);
  const [name, setName] = useState([]);
  const [address, setAddress]= useState("");
  const [addressSaved, setAddressSaved] = useState(false);

  const dispatch = useDispatch();

  const {user} = useSelector( (state) => ({...state}));

  useEffect( () => {
    getuserCart(user.token)
    .then( res => {
        setVendors(res.data.vendors);
        setTotal(res.data.cartTotal);
    }); 
  },[]);

  const getVendorName= (id) =>
    fetchVendorInfoById(id).then (res=>setName(res.data.name));
    
   const emptyCart= () => {
     //remove from local storage
     if (typeof window !== "undefined") {
       localStorage.removeItem("cart")
     }
    //remove from redux 
    dispatch({
      type: "ADD_TO_CART",
      payload: []
    });
    // remove from backend
    emptyUserCart(user.token).then( res => {
      setVendors([]);
      setTotal(0);
      toast.success("Cart is empty. Continue shopping...");
    })
   } 
  const saveAddressToDb= () => {
    console.log(address);
    saveUserAddress(address, user.token)
    .then ( res => {
        if (res.data.ok) {
          setAddressSaved(true);
          toast.success("Address saved !!!!");
        }
    })
  }

  return (
    <div className="row">
      <div className= "col col-md-6">
        <h4>Delivery Address</h4>
        <br />
        <br />
        <ReactQuill theme="snow"
                    value= {address}
                    onChange= {setAddress} />
           
        <br />
        <button className="btn btn-primary mt-2 ml-2"
                 onClick= {saveAddressToDb}>Save
        </button>
      </div>
      <div className= "col col-md-6">
         <h4>Order Summary</h4>
           
         <hr />
         <h4>Helpers - {vendors.length}</h4>
         <hr />
         <h4>Selected Helpers</h4>
         {vendors.map((v, i) => (
           <div key= {i}>
             <b className="d-flex content-align-center"> {v.vendor.vendorInfoId.name} [{v.vendor.subcategories[0].name}] X {v.count} = {v.vendor.price}</b> 
          
            
           </div>
         ))}
         <hr />
         <p className= "font-weight-bold">Cart Total: {total}</p>

         <div className="row">
             <div className="col col-md-6"> 
               <button className="btn btn-primary"
                      disabled= {!addressSaved || !vendors.length}
                      onClick= {() => history.push("/payment")}
                >Place Order</button>
             </div>
             <div className="col col-md-6"> 
               <button className="btn btn-primary"
                       disabled= {!vendors.length}
                       onClick= {emptyCart}
               >Empty Cart</button>
             </div>             
             
         </div>
      </div>

    </div>
  )
}

export default Checkout;