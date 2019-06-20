import { observable, action, computed } from 'mobx';

import coupons from 'data/coupons';

export default class MarketStore {
  @observable selectedItems = [];

  @action.bound
  pushItem = (id, price) => {
    if ( this.selectedItems.map(i=>i.id).indexOf(id) === -1 ) {
      this.selectedItems.push({
        id: id,
        count: 1,
        price: price,
        checked: true,
        coupon: null
      });
    }
  };

  @action
  getLength = () => {
    return this.selectedItems.length;
  }
  
  @action
  popItem = (id) => {
    var index = this.selectedItems.map(i=>i.id).indexOf(id);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }
  };

  @action
  getItem = (id) => {
    return this.selectedItems.find(item=>item.id === id);
  }

  @action
  changeCount = (id, count) => {
    this.selectedItems.find(item=>item.id === id).count = count;
  }

  @action
  changeCoupon = (id, coupon) => {
    this.selectedItems.find(item=>item.id === id).coupon = coupon;
  }

  @action
  toggleChecked = (id, checked) => {
    let item = this.selectedItems.find(item=>item.id === id);
    item.checked = !item.checked;
  }

  @computed
  get total(){
    return this.selectedItems.reduce((privious, current) => {
      if(current.checked){
        console.log(current.coupon)
        if(current.coupon !== null && current.coupon !== '쿠폰을 선택하세요.' && current.coupon !== '쿠폰 적용 불가 상품입니다.'){
          let currentCoupon = coupons.find(coupone => coupone.title === current.coupon);
          if(currentCoupon.type === 'rate'){
            return privious + ( current.price * current.count / 100 * (100 - currentCoupon.discountRate) );
          } else {
            return privious + ( current.price * current.count - currentCoupon.discountAmount );
          }
        } else {
            return privious + ( current.price * current.count );
        }
      } else {
        return privious;
      }
    }, 0);
  }

}