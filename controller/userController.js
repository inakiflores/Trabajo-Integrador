const fs= require('fs');
const path= require('path');
const bcrypt= require ('bcryptjs');

let userController={
    home: (req, res)=> {
        res.render('index', {
            title: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    }
}

module.exports=userController;