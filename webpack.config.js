const path = require('path')

module.exports = {
    mode:'development',
    entry:'./src/js/app.js',
    output:{
        filename:'js/bundle.js',
        clean:true,
    }
}