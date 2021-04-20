export const GLOBALSTATE_ACTIONS = {
  SET_IS_AUTH: "SET_IS_AUTH",
  LOGOUT: "LOGOUT"
};

export const ORDERS_STATUS = {
  allOrders: "الكل",
  acceptedOrders: "مقبول",
  underOrder: "قيد الطلب",
  rejectedOrders: "غير مقبول",
  deliveredOrders: "تم التسليم",
  otherOrders: "أخرى",
  Receiving: "قيد الاستلام",
  processing: "قيد التجهيز"
};

export const ORDERS_DELIVERY_METHOD = {
  allOrders: "الكل",
  receivingHand: "استلام يد",
  delivery: "توصيل"
};

export const USERS_TYPE = {
  allUsers: "الكل",
  seller: "بائع",
  buyer: "مشتري"
};

export const ordersHeadCells = [
  {
    id: "number",
    numeric: false,
    disablePadding: true,
    label: "رقم الطلب"
  },
  {
    id: "userName",
    numeric: false,
    disablePadding: false,
    label: "اسم المستخدم"
  },
  {
    id: "sellerName",
    numeric: true,
    disablePadding: false,
    label: "اسم البائع"
  },
  {
    id: "orderDate",
    numeric: true,
    disablePadding: false,
    label: "تاريخ الطلب"
  },
  {
    id: "orderTotal",
    numeric: true,
    disablePadding: false,
    label: "قيمة الطلب"
  },
  {
    id: "deliveryMethod",
    numeric: true,
    disablePadding: false,
    label: "طريقة التوصيل"
  },
  {
    id: "orderStatus",
    numeric: true,
    disablePadding: false,
    label: "حالة الطلب"
  },
  { id: "fees", numeric: true, disablePadding: false, label: "المصاريف" }
];

export const usersHeadCells = [
  {
    id: "number",
    numeric: false,
    disablePadding: true,
    label: "#"
  },
  {
    id: "userName",
    numeric: false,
    disablePadding: false,
    label: "اسم المستخدم"
  },
  {
    id: "accountName",
    numeric: true,
    disablePadding: false,
    label: "اسم الحساب"
  },
  {
    id: "userEmail",
    numeric: true,
    disablePadding: false,
    label: "الايميل"
  },
  {
    id: "phoneNumber",
    numeric: true,
    disablePadding: false,
    label: "رقم الهاتف"
  },
  {
    id: "userType",
    numeric: true,
    disablePadding: false,
    label: "نوع المستخدم"
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "اجراءات"
  }
];
