const orderService = require("../services/OrderService");



const addOrder = (req, res) => {
  const {orderNo,site, material, materialPrice,quantity, siteManagerName,totalPrice,approvalStates,deliveryAddress,reason } = req.body;

  

  orderService.addOrder({orderNo,site, material, materialPrice,quantity, siteManagerName,totalPrice,approvalStates,deliveryAddress,reason })
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
    const {orderNo,site, material, materialPrice,quantity, siteManagerName,totalPrice,approvalStates,deliveryAddress,reason } = req.body;

  orderService
    .updateOrder(oId, {orderNo,site, material, materialPrice,quantity, siteManagerName,totalPrice,approvalStates,deliveryAddress,reason})
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

const getPendingOrders = (req, res) => {
  orderService
    .getPendingOrders()
    .then((pendingOrders) => {
      res.json(pendingOrders);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
const getRejectOrders = (req, res) => {
  orderService
    .getRejectOrders()
    .then((pendingOrders) => {
      res.json(pendingOrders);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
const getDeliveryOrders = (req, res) => {
  orderService
    .getDeliveryOrders()
    .then((pendingOrders) => {
      res.json(pendingOrders);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getDeliveryRejectOrders = (req, res) => {
  orderService
    .getDeliveryRejectOrders()
    .then((pendingOrders) => {
      res.json(pendingOrders);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};





module.exports = {
  addOrder,
  getOrders,
  getOrder,
  getRejectOrders,
  getDeliveryRejectOrders,
  getPendingOrders,
  getDeliveryOrders,
  updateOrder,
  removeOrder,
};
