module.exports = {
    map: {
        inline:false,
    },
    pligins: {
        'postcss-import': {},
        'postcss-custom-properties': {},
        'postcss-nesting': {},
        autoprefuxer: {
            cascade: false,
            grid:true,
        },
        'postcss-csso': {},
    }
};