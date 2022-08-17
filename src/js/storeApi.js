import { debounce } from 'debounce';

const refs = {
  form: document.querySelector('.form'),
  productQuantity: document.querySelectorAll('.quantity'),
  totalCost: document.getElementById('total-price'),
};

let totalProdCost = 0;

const products = {
  icecream: { price: 5, quantity: 0 },
  icecoffee: { price: 3, quantity: 0 },
  milkshakes: { price: 7, quantity: 0 },
};

// console.log('refs.form.elements :>> ', refs.form.elements);
// console.log('refs.productQuantity :>> ', refs.productQuantity);
// console.log('refs.incBtn :>> ', refs.incBtn);

class ProductsQuantity {
  constructor(selector) {
    this.refs = this.getRefs(selector);
    this._totalQuantity = Number(this.totalQuantity);

    // incrisebutton listener
    this.refs.incrisebutton.addEventListener('click', () => {
      this.inc();
      // return this.refs.inputvalue.value;
      // console.log(this.totalQuantity);
      this.totalQuantity;
    });

    // decrisebutton listener
    this.refs.decrisebutton.addEventListener('click', () => {
      this.dec();
      // return this.refs.inputvalue.value;

      // console.log(this.totalQuantity);
      this.totalQuantity;
    });

    // input listener
    this.refs.inputvalue.addEventListener('input', () => {
      // return this.refs.inputvalue.value;
      this.totalQuantity = Number(this.refs.inputvalue.value);
      // console.log(this.totalQuantity);
      this.totalQuantity;
    });

    return Number(this.refs.inputvalue.value);
  }

  getRefs(selector) {
    const refs = [...document.querySelector(selector).children].reduce(
      (refs, el) => {
        const key = Object.keys(el.dataset).join();
        refs[key] = el;
        return refs;
      },
      {}
    );
    // console.log('refs :>> ', refs);
    return refs;
  }

  inc() {
    if (this._totalQuantity >= 100) {
      this._totalQuantity = 100;
      return;
    }
    this._totalQuantity += 1;
    this.refs.inputvalue.value = Number(this._totalQuantity);
  }

  dec() {
    if (this.totalQuantity < 0) {
      return;
    }

    this._totalQuantity -= 1;
    this._totalQuantity <= 0
      ? (this.refs.inputvalue.value = '')
      : (this.refs.inputvalue.value = Number(this._totalQuantity));
  }

  get totalQuantity() {
    if (this.refs.inputvalue.value === '') {
      this._totalQuantity = 0;
    }
    return this._totalQuantity;
  }
  set totalQuantity(newQuantity) {
    if (newQuantity >= 100) {
      this._totalQuantity = 100;
      this.refs.inputvalue.value = this._totalQuantity;

      return;
    }
    this._totalQuantity = newQuantity;
  }
}

// !-----------------------------
// icecream
const isecream = new ProductsQuantity('[data-quantity="icecream"]');

isecream.refs.inputvalue.addEventListener('input', () => {
  // console.log('isecream :>> ', isecream.totalQuantity);
  products.icecream.quantity = isecream.totalQuantity;
  totalCost(products);
});

isecream.refs.incrisebutton.addEventListener('click', () => {
  // console.log('isecream :>> ', isecream.totalQuantity);

  products.icecream.quantity = isecream.totalQuantity;
  // console.log('products :>> ', products);
  totalCost(products);
});

isecream.refs.decrisebutton.addEventListener('click', () => {
  // console.log('isecream :>> ', isecream.totalQuantity);
  products.icecream.quantity = isecream.totalQuantity;
  totalCost(products);
});

// !-----------------------------
// icecoffee
const icecoffee = new ProductsQuantity('[data-quantity="icecoffee"]');

icecoffee.refs.inputvalue.addEventListener('input', () => {
  // console.log('icecoffee :>> ', icecoffee.totalQuantity);
  products.icecoffee.quantity = icecoffee.totalQuantity;
  totalCost(products);
});

icecoffee.refs.incrisebutton.addEventListener('click', () => {
  // console.log('icecoffee :>> ', icecoffee.totalQuantity);
  products.icecoffee.quantity = icecoffee.totalQuantity;
  totalCost(products);
});

icecoffee.refs.decrisebutton.addEventListener('click', () => {
  // console.log('icecoffee :>> ', icecoffee.totalQuantity);
  products.icecoffee.quantity = icecoffee.totalQuantity;
  totalCost(products);
});

// !-----------------------------
// milkshakes
const milkshakes = new ProductsQuantity('[data-quantity="milkshakes"]');

// console.log(milkshakes);

milkshakes.refs.inputvalue.addEventListener('input', () => {
  // console.log('milkshakes :>> ', milkshakes.totalQuantity);
  products.milkshakes.quantity = milkshakes.totalQuantity;
  totalCost(products);
});

milkshakes.refs.incrisebutton.addEventListener('click', () => {
  // console.log('milkshakes :>> ', milkshakes.totalQuantity);
  products.milkshakes.quantity = milkshakes.totalQuantity;
  totalCost(products);
});

milkshakes.refs.decrisebutton.addEventListener('click', () => {
  // console.log('milkshakes :>> ', milkshakes.totalQuantity);
  products.milkshakes.quantity = milkshakes.totalQuantity;
  totalCost(products);
});

function totalCost(products) {
  // console.log(products);

  let totalProdCost = 0;

  for (const key in products) {
    // console.log(key);
    totalProdCost += products[key].price * products[key].quantity;
    // console.log('total :>> ', totalProdCost);
  }
  markupPrice(refs.totalCost, totalProdCost);
  return totalProdCost;
}

function markupPrice(element, total) {
  element.innerHTML = `$${total}`;
}

