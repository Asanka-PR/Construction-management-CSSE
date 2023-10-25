const express = require("express");
const router = express.Router();

const {
  addOrder,
  getOrders,
  getOrder,
  getRejectOrders,
  getDeliveryRejectOrders,
  getDeliveryOrders,
  getPendingOrders,
  updateOrder,
  removeOrder,
} = require("../controllers/Order.controller");

router.post("/", addOrder);

router.get("/", getOrders);

router.get("/deliveryreject", getDeliveryRejectOrders);

router.get("/delivery", getDeliveryOrders);

router.get("/rejected", getRejectOrders);


router.get("/pending", getPendingOrders);


router.get("/:id", getOrder);


router.put("/:id", updateOrder);

router.delete("/:id", removeOrder);

module.exports = router;
