const _ = require('lodash');

module.exports = {
  default: (component) => {
    let dims = {
      width: component._baseWidth,
      height: component._baseHeight
    };

    let maxWidth = 0;

    _.forEach(component.components, (c) => {
      if (c) {
        // console.log(c);
        let d = c.getDimensions();

        dims.width += d.width;
      }
    });
    dims.width += maxWidth;
    return dims;
  }
};
