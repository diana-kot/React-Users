const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@constants': 'src/constants',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@store': 'src/store',
    })(config);

    return config;
}