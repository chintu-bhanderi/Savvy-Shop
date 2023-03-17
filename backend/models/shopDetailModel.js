import mongoose from 'mongoose';

const shopDetailSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Please add TableBook id'],
  },
  shopName: {
    type: String,
    required: [true, 'Please add TableBook id'],
  },
  Shopkeeper: {
    type: Number,
    required: [true, 'Please add slot'],
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  Address: {
    type: String,
    required: [true, 'Please add User'],
  },
  Image: {
    type: String,
  },
  shopType: {
    type: String,
    required: [true, 'Please add Date'],
  },
  contactNo: {
    type: Number,
    required: [true, 'Please add ContactNo'],
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  products: {
    type: String,
    required: [true, 'Please add Date'],
  },
}, {
  timestamps: true,
});

const shopDetailModel = mongoose.model('ShopDetails', shopDetailSchema);

export default shopDetailModel;
