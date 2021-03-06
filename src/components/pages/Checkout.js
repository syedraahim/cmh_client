import react,{useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getuserCart} from "../../actions/user";

const Checkout= () => {

  const [ vendors, setVendors] = useState([]);
  const [total,setTotal] = useState(0);

  const dispatch = useDispatch();

  const {user} = useSelector( (state) => ({...state}));

  useEffect( () => {
    getuserCart(user.token)
    .then( res => {
        setVendors(res.data.vendors);
        setTotal(res.data.cartTotal);
    }) 
  },[]);

  const saveAddressToDb= () => {

  }

  return (
    <div className="row">
      <div className= "col col-md-6">
        <h4>Delivery Address</h4>
        <br />
        <br />
        <textarea>
            Area for delivery address
        </textarea>
        <button className="btn btn-primary"
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
              <p>{v.vendor.vendorInfoId.name}</p>
           </div>
         ))}
         <hr />
         <p>Cart Total: {total}</p>

         <div className="row">
             <div className="col col-md-6"> 
               <button className="btn btn-primary">Place Order</button>
             </div>
             <div className="col col-md-6"> 
               <button className="btn btn-primary">Empty Cart</button>
             </div>
             
             
         </div>
      </div>

    </div>
  )
}

export default Checkout;