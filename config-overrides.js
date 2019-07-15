const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = function override(config, env) {
    config.resolve.alias = {
        'components': resolve('src/material-kit/components'),
        'assets': resolve('src/material-kit/assets')
    }
    return config;
}