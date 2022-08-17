import { debounce } from 'debounce';

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
    this._totalQuantity = this.totalQuantity;

    // incrisebutton listener
    this.refs.incrisebutton.addEventListener('click', () => {
      this.inc();
      // return this.refs.inputvalue.value;
      // console.log(this.totalQuantity);
      return this.totalQuantity;
    });

    // decrisebutton listener
    this.refs.decrisebutton.addEventListener('click', () => {
      this.dec();
      // return this.refs.inputvalue.value;

      console.log(this.totalQuantity);
    });

    // input listener
    this.refs.inputvalue.addEventListener('input', () => {
      // return this.refs.inputvalue.value;
      this.totalQuantity = Number(this.refs.inputvalue.value);
      console.log(this.totalQuantity);
    });
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
    this.refs.inputvalue.value = this._totalQuantity;
  }

  dec() {
    if (this.totalQuantity < 0) {
      return;
    }

    this._totalQuantity -= 1;
    this._totalQuantity <= 0
      ? (this.refs.inputvalue.value = '')
      : (this.refs.inputvalue.value = this.totalQuantity);
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

// const isecream = new ProductsQuantity('.quantity');
const isecream = new ProductsQuantity('[data-quantity="icecream"]');

console.log('isecream :>> ', isecream.totalQuantity);

isecream.refs.inputvalue.addEventListener('change', () => {
  console.log(isecream.refs.inputvalue.value);
});
