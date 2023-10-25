// Material.test.js
const MaterialService = require('./services/MaterialService'); 

describe('MaterialService', () => {

//Test case for add material
  it('should add a new material', async () => {
    
    const materialData = {
      materialId: 'M001',
      materialName: 'Example Material',
      Price: '100.00',
      supplierName: 'Supplier Inc',
      materialType: 'TypeA',
      quantity: '10',
    };

    MaterialService.addMaterial(materialData)
  .then((createMaterial) => {
 
    //assestions
    
    expect(createMaterial).toBeDefined();
    expect(createMaterial.materialId).toBe(materialData.materialId);
    expect(createMaterial.materialName).toBe(materialData.materialName);
    expect(createMaterial.Price).toBe(materialData.Price);
    expect(createMaterial.supplierName).toBe(materialData.supplierName);
    expect(createMaterial.quantity).toBe(materialData.quantity);

      
    })
    .catch((error) => {
     
    });



  
   
  });

//Test case for get materials function

  it('should get materials', async () => {

    const getMaterials = (req, res) => {
        MaterialService.getMaterials()
        .then((materials) => {
            
            
            //assetions
            expect(materials).toBeInstanceOf(Array);


        })
        .catch((error) => {
         
        });
    };

   
  });


  //test case for get one material function

  it('should get a material by ID', async () => {
    const materialData = {
        materialId: 'M001',
        materialName: 'Example Material',
        Price: '100.00',
        supplierName: 'Supplier Inc',
        materialType: 'TypeA',
        quantity: '10',
    };

    const getMaterial = (req, res) => {
        const materialId ='M001';
      
        MaterialService
          .getMaterial(materialId)
          .then((material) => {
        //assetions
        expect(material).toBeDefined();
        expect(material.materialName).toBe(materialData.materialName);

          })
          .catch((error) => {
            
          });
      };

    
  });



  //test case for update one material function

  it('should update a material', async () => {
    const materialData = {
      materialId: 'M001',
      materialName: 'Material to Update',
      Price: '75.00',
      supplierName: 'Supplier Inc',
      materialType: 'TypeC',
      quantity: '7',
    };

   const materialId ='M001';

    MaterialService
    .updateMaterial(materialId, materialData)
    .then((updatedMat) => {
       
        //assetion

        expect(updatedMat).toBeDefined();
        expect(updatedMat.materialName).toBe(updatedData.materialName);
      
    })
    .catch((error) => {
     


    });

   
  });

 



 


  

  
});
