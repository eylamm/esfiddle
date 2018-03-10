import $ from './helpers';

const examples = {
  addExamples(version) {
    if (!window.embedded) {
      const el = $.getElement('.examples');
      const selectedVersion = window[`${version}Example`];

      el.innerHTML = `<option disabled>${version.toUpperCase()} Examples</option>`;
      Object.keys(selectedVersion).forEach((example) => {
        el.innerHTML += `<option value="${example}">${selectedVersion[example].display}</option>`;
      });
    }
    return undefined;
  },
};

module.exports = examples;
