import $ from './helpers';

const ecmaScriptVersions = {
  addVersions() {
    if (!window.embedded) {
      const el = $.getElement('.es-versions');
      let version;
      for (version in window.esVersions) { //eslint-disable-line
        if (Object.prototype.hasOwnProperty.call(window.esVersions, version)) {
          el.innerHTML +=
            `<option value="${version}">${window.esVersions[version].display}</option>`;
        }
      }
    }
    return undefined;
  },
};

module.exports = ecmaScriptVersions;
