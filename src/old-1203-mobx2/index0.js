import { transaction, action, decorate, observable, reaction, computed, autorun } from 'mobx';

class Wishlist {
  basket = [];

  //@computed
  get total() {
    console.log('calc...');
    return this.basket.reduce((prev, cur) => prev + cur.price, 0);
  }

  select(name, price) {
    this.basket.push({ name, price });
  }
}

decorate(Wishlist, {
  basket: observable,
//  total: computed,
//  select: action
});

const w1 = new Wishlist();
autorun(() => w1.total);
autorun(() => {
  if (w1.basket.length > 0) {
    console.log(w1.basket[w1.basket.length - 1]);
  }
});
transaction(() => {
  w1.select('water', 100);
  w1.select('water', 100);
});
console.log(w1.total);
console.log(w1.total);
console.log(w1.total);
