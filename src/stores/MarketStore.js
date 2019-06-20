import { observable, action, computed } from 'mobx';

import coupons from 'data/coupons';

export default class MarketStore {
  @observable selectedItems = [];

  @action.bound
  pushItem = (id) => {
    if ( this.selectedItems.map(i=>i.id).indexOf(id) === -1 ) {
      this.selectedItems.push({
        id: id,
        count: 1,
        checked: true,
        coupon: null
      });
    }
    console.log(this.selectedItems);
  };

  @action.bound
  popItem = (id) => {
    var index = this.selectedItems.map(i=>i.id).indexOf(id);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }
    console.log(this.selectedItems);
  };

  @action.bound
  getItem = (id) => {
    return this.selectedItems.find(item=>item.id === id);
  }

  @action.bound
  changeCount = (id, count) => {
    this.selectedItems.find(item=>item.id === id).count = count;
    console.log(this.selectedItems.find(item=>item.id === id))
  }

  @action.bound
  changeCoupon = (id, coupon) => {
    this.selectedItems.find(item=>item.id === id).coupon = coupon;
    console.log(this.selectedItems.find(item=>item.id === id))
  }

  
}