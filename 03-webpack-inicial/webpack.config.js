// hay que isntalar esto:
//$ npm i -D html-loader html-webpack-plugin
const HtmlWebpack    = require('html-webpack-plugin')
const path = require('path')


module.exports = {
 
    mode: 'development',
    module:{
        rules:[

    
       
            //Sirven para decirle que hacer con los distintos tipos de archivo
            {
                //Es la condición que debe cumplir, se usan expresiones regulares
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
        ]
        },
    //Aquí se ejecuta la instancia que hemos creado antes para que copie el index html de la carpeta src a dist para cuando se suba a producción
    plugins:[
        new HtmlWebpack({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true
    },
 
}

