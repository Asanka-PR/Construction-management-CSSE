// Material.test.js
const OrderService = require('./services/OrderService'); 

describe('OrderService', () => {

//Test case for add order
  it('should add a new Order', async () => {
    
    const orderData = {
      
    orderNo:"ORDER685",site:"Site A", material:"Matal", materialPrice:"10000.0",quantity:"10"
      

    };

    

    OrderService.addOrder(orderData)
  .then((createOrder) => {
 
    //assestions
    expect(createOrder).toBeDefined();
    expect(createOrder.orderNo).toBe(orderData.orderNo);
    expect(createOrder.site).toBe(orderData.site);
      
    })
    .catch((error) => {


     
    });



  
   
  });



 



 


  

  
});
