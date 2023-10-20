const orderService = require("../services/OrderService");



const addOrder = (req, res) => {
  const {orderNo,site, material, materialPrice,quantity, siteManagerName,totalPrice,approvalStates,deliveryAddress } = req.body;

  

  orderService.addOrder({orderNo,site, material, materialPrice,quantity, siteManagerName,totalPrice,approvalStates,deliveryAddress })
  .then((createOrder) => {
      res.json(createOrder);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

 const getOrders = (req, res) => {
    orderService.getOrders()
    .then((orders) => {
      res.json(orders);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};


const getOrder = (req, res) => {
  const oId = req.params.id;

  orderService
    .getOrder(oId)
    .then((order) => {
      res.json(order);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const updateOrder = (req, res) => {
    const oId = req.params.id;
    const {orderNo,site, material, materialPrice,quantity, siteManagerName,totalPrice,approvalStates,deliveryAddress } = req.body;

  orderService
    .updateOrder(oId, {orderNo,site, material, materialPrice,quantity, siteManagerName,totalPrice,approvalStates,deliveryAddress})
    .then((updateOr) => {
      res.status(200).json(updateOr);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
};

const removeOrder = (req, res) => {
  const oId = req.params.id;

 orderService
    .removeOrder(oId)
    .then((removeO) => {
      res.status(200).json(removeO);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
};






module.exports = {
  addOrder,
  getOrders,
  getOrder,
  updateOrder,
  removeOrder,
};
