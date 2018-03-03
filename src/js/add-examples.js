import $ from './helpers';

const examples = {
  addExamples(version) {
    if (!window.embedded) {
      const el = $.getElement('.examples');
      let example;
      if (version === 'es6') {
        el.innerHTML = {};
        for (example in window.es6Example) { //eslint-disable-line
          if (Object.prototype.hasOwnProperty.call(window.es6Example, example)) {
            el.innerHTML +=
              `<option value="${example}">${window.es6Example[example].display}</option>`;
          }
        }
      } else {
/*
        el.innerHTML += '<option disabled>ES7 Examples</option>';
*/
        el.innerHTML = {};
        for (example in window.es7Example) { //eslint-disable-line
          if (Object.prototype.hasOwnProperty.call(window.es7Example, example)) {
            el.innerHTML +=
              `<option value="${example}">${window.es7Example[example].display}</option>`;
          }
        }
      }
    }
    return undefined;
  },
};

module.exports = examples;
