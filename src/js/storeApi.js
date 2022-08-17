const refs = {
  form: document.querySelector('.form'),
  productQuantity: document.querySelectorAll('.quantity'),
  incBtn: document.querySelector('[data-incriseButton]'),
};

// console.log('refs.form.elements :>> ', refs.form.elements);
// console.log('refs.productQuantity :>> ', refs.productQuantity);
// console.log('refs.incBtn :>> ', refs.incBtn);

class ProductsQuantity {
  constructor(selector) {
    this.refs = this.getRefs(selector);
  }

  getRefs(selector) {
    const refs = {};
    refs.elements = [...document.querySelector(selector).children].reduce(
      (acc, el) => el,
      {}
    );
    console.log('refs.el :>> ', refs.elements);
    // return refs;
  }
}

// const isecream = new ProductsQuantity('.quantity');
const isecream = new ProductsQuantity('[data-quantity="icecream"]');

// console.log('isecream :>> ', isecream);
