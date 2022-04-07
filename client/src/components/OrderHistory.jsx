import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Spinner from './layout/Spinner';

const OrderHistory = () => {

    const [orders, setOrders] = useState([]);
    const [cookies, setCookie] = useCookies();
    const navigation = useNavigate();
    console.log(orders);
  //   const orders = [{
  //     order: [{ product_name:"Switch", price: 400, quantity: 2 }], 
  //     addresses: [{address:"Some street" }],
  //     order_status: 7456654, //1: open 2:closed 3:Cancelled
  //     user_name: "mitch",
  //     payment_method: {card_number: 5, cardholder_name: "mitch", expiration: "07-07", billing_address: "Some Street"}
  //   },{
  //     order: [{ product_name: "game console", price: 200, quantity: 1 }], 
  //     addresses: [{address:"Some 2nd street" }],
  //     order_status: 7456654, //1: open 2:closed 3:Cancelled
  //     user_name: "mitch",
  //     payment_method: {card_number: 5, cardholder_name: "mitch", expiration: "07-07", billing_address: "Some Street"}
  //   }
  // ]
  

    useEffect(() => {
      async function getOrders() {
        
        const response = await axios.get(`/orders/${cookies.user_name}`);

        if (!response.data) {
          window.alert('Could not find orders for user: ' + cookies.user_name);
          return;
        }

        setOrders(response.data);
       // console.log(response.data);
      }
      
      getOrders();
      return;
    }, []);

	async function cancelorder(){
    

  }

	

	return (
    <main  className="row">
    {orders && orders.length > 0 ? (
				
      orders.map((order) => (
        <div key={order._id}>
            <div class="container-fluid">

            <div class="container">
              
              <div class="d-flex justify-content-between align-items-center py-3">
                <h2 class="h5 mb-0"><a href="#" class="text-muted"></a>This should be .id of the order {order._id}</h2>
              </div>

            
            <div class="row">
              <div class="col-lg-8">
                
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="mb-3 d-flex justify-content-between">
                      <div>
                        <span class="badge rounded-pill bg-info">SHIPPING</span>
                      </div>
                      
                    </div>

                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex mb-2">
                              <div class="flex-shrink-0">
                                <img src="https://via.placeholder.com/280x280/87CEFA/000000" alt="" width="35" class="img-fluid"></img>
                              </div>
                              <div class="flex-lg-grow-1 ms-3">
                                {/* below this is product name */}
                                <h6 class="small mb-0"><a href="#" class="text-reset">{order.order} </a></h6>
                              </div>
                            </div>
                          </td>
                          {/* below this is quantiity */}
                          <td>{order.order}</td>    
                          {/* product price below */}
                          <td class="text-end"> $</td>
                        </tr>
                        
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="2">Subtotal</td>
                          {/* product subtotal */}
                          <td class="text-end">$</td>
                        </tr>
                        <tr>
                          <td colspan="2">Shipping</td>
                          <td class="text-end">$20.00</td>
                        </tr>
                        <tr class="fw-bold">
                          <td colspan="2">TOTAL</td>
                         
                          <td class="text-end">$</td>
                        </tr>
                        <button
                          className='w-100 btn btn-lg btn-primary'
                          type='button'
                          onClick={cancelorder()}
                        >
                          Cancel Order
                        </button>
                      </tfoot>
                    </table>
                  </div>
                </div>
                
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6">
                        <h3 class="h6">Payment Method</h3>
                        <p>Visa {+order.card_number} <br></br>
                        
                        ${}<span class="badge bg-success rounded-pill">PAID</span></p>
                      </div>
                      <div class="col-lg-6">
                        <h3 class="h6">Billing address</h3>
                        <address>
                          <strong>{order.user_name}</strong><br></br>
                          {order.address}<br></br>
                          
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                
               
              </div>
            </div>
          </div>
            </div>
          
          
          
        </div>
      ))
      ): (
        <li>No Orders</li>
      )}
      </main>
  
	)
};
export default OrderHistory;
