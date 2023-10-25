// Material.test.js
const SupplierService = require('./services/SupplierService'); 

describe('SupplierService', () => {

//Test case for add SupplierService
  it('should add a new SupplierService', async () => {
    
    const supplierData = {
      

      supplierId:"SP101",companyName:"Priyantha PVT", name:"Gamini", address:"No 17",suppliedMaterialInfo:"Matal", phone:"0272226088", email:"priyatntha@gmail.com", password:"priyantha"

    };

    SupplierService.addSupplier(supplierData)
  .then((createsupplier) => {
 
    //assestions
    expect(createsupplier).toBeDefined();
    expect(createsupplier.supplierId).toBe(supplierData.supplierId);
    expect(createsupplier.companyName).toBe(supplierData.companyName);
      
    })
    .catch((error) => {
     
    });



  
   
  });



 



 


  

  
});
