import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];

  @action
  pushItem = ({id}) => {
    if ( this.selectedItems.indexOf(id) === -1 ) {
      this.selectedItems.push({
        id: id,  
        count: 1,
      });
    }
    console.log(this.selectedItems);
  };

  @action
  popItem = ({id}) => {
    var index = this.selectedItems.indexOf(id);
    if (index > -1) {
      this.stared.splice(index, 1);
    }
    console.log(this.selectedItems);
  };
  
}