import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Spinner from './layout/Spinner';

const OrderHistory = () => {
	// const [product, setProduct] = useState({});
	// const [quantity, setQuantity] = useState(1);
	// const [cookies, setCookie] = useCookies();
	// const [isLoading, setIsLoading] = useState(false);
	// const { id } = useParams();
	// const navigation = useNavigate();

	// useEffect(() => {
	// 	async function getProduct() {
	// 		setIsLoading(true);
	// 		const response = await axios.get('/products/' + id);

	// 		if (!response.data) {
	// 			window.alert('Could not find product with id: ' + id);
	// 			return;
	// 		}

	// 		setProduct(response.data);
	// 		setIsLoading(false);
	// 	}

	// 	getProduct();
	// 	return;
	// }, []);

	

	return (
        <div class="container-fluid">

        <div class="container">
          
          <div class="d-flex justify-content-between align-items-center py-3">
            <h2 class="h5 mb-0"><a href="#" class="text-muted"></a> Order #16123222</h2>
          </div>
        
          
          <div class="row">
            <div class="col-lg-8">
              
              <div class="card mb-4">
                <div class="card-body">
                  <div class="mb-3 d-flex justify-content-between">
                    <div>
                      <span class="me-3">22-11-2021</span>
                      <span class="me-3">#16123222</span>
                      <span class="me-3">Visa -1234</span>
                      <span class="badge rounded-pill bg-info">SHIPPING</span>
                    </div>
                    <div class="d-flex">
                      <button class="btn btn-link p-0 me-3 d-none d-lg-block btn-icon-text"><i class="bi bi-download"></i> <span class="text">Invoice</span></button>
                      <div class="dropdown">
                        <button class="btn btn-link p-0 text-muted" type="button" data-bs-toggle="dropdown">
                          <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                          <li><a class="dropdown-item" href="#"><i class="bi bi-printer"></i> Print</a></li>
                        </ul>
                      </div>
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
                              <h6 class="small mb-0"><a href="#" class="text-reset">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</a></h6>
                              <span class="small">Color: Black</span>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td class="text-end">$79.99</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex mb-2">
                            <div class="flex-shrink-0">
                              <img src="https://via.placeholder.com/280x280/FF69B4/000000" alt="" width="35" class="img-fluid"></img>
                            </div>
                            <div class="flex-lg-grow-1 ms-3">
                              <h6 class="small mb-0"><a href="#" class="text-reset">Smartwatch IP68 Waterproof GPS and Bluetooth Support</a></h6>
                              <span class="small">Color: White</span>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td class="text-end">$79.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="2">Subtotal</td>
                        <td class="text-end">$159,98</td>
                      </tr>
                      <tr>
                        <td colspan="2">Shipping(We can do an arbitrary number or an actual ammount.)</td>
                        <td class="text-end">$20.00</td>
                      </tr>
                      <tr>
                        <td colspan="2">Discount (Code: NEWYEAR)(This can also just be removed)</td>
                        <td class="text-danger text-end">-$10.00</td>
                      </tr>
                      <tr class="fw-bold">
                        <td colspan="2">TOTAL</td>
                        <td class="text-end">$169,98</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-6">
                      <h3 class="h6">Payment Method</h3>
                      <p>Visa -1234 <br></br>
                      Total: $169,98 <span class="badge bg-success rounded-pill">PAID</span></p>
                    </div>
                    <div class="col-lg-6">
                      <h3 class="h6">Billing address</h3>
                      <address>
                        <strong>John Doe</strong><br></br>
                        1355 Market St, Suite 900<br></br>
                        San Francisco, CA 94103<br></br>
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6">Customer Notes</h3>
                  <p>This is a text field that we can just remove. It was just apart of the template i found. I think this looks fairly nice.(We are just using dummy data)</p>
                </div>
              </div>
              <div class="card mb-4">
                
                <div class="card-body">
                  <h3 class="h6">Shipping Information</h3>
                  <strong>FedEx</strong>
                  <span><a href="#" class="text-decoration-underline" target="_blank">FF1234567890</a> <i class="bi bi-box-arrow-up-right"></i> </span>
                  <br></br>
                  <h3 class="h6">Address</h3>
                  <address>
                    <strong>John Doe</strong><br></br>
                    1355 Market St, Suite 900<br></br>
                    San Francisco, CA 94103<br></br>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
	);
};
export default OrderHistory;
