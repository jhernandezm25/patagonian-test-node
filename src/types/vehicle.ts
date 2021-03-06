export const Vehicle = {
  uuid: {
    type: String,
    required: [true, "UUID is mandatory"],
  },
  vin: {
    type: String,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  mileage: {
    type: String,
  },
  year: {
    type: Date,
  },
  price: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  createDate: {
    type: Date,
  },
  updateDate: {
    type: Date,
  },
  provider:{
    type: String
  }
};
