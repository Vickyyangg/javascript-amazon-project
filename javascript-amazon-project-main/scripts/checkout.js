import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCartFetch } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/car.js';
//import '../data/backend-practice.js';

async function loadPage() {
  try {
    //throw 'error1';
   await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);
    
  } catch (error) {
    console.log('unexpected error. please try again later');
  }

  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();

}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
  
]).then((value) => {
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/

/*
new Promise ((resolve) => {
  loadProducts(() => {
    resolve('value1'); 
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
  }); 
}); */
