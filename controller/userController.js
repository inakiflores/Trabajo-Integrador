const fs= require('fs');
const path= require('path');
const bcrypt= require ('bcryptjs');
//traigo la base de datos 
const dbArray = JSON.parse(fs.readFileSync('/Desktop/proyecto_a/Trabajo-Integrador/data/db_productos.json','utf-8'));


let userController={
    home: (req, res)=> {
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
        res.render('index',{mensaje:mensaje})
    },
    productAdd: (req , res)=>{
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
         res.render("productAdd",{mensaje:mensaje}) 
        },
    product: (req , res)=>{
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
        
        //traigo el id de la url 
        let productoId= req.params.id;
        //creo la funcion que busca en la db
        let productoEncontrado=dbArray.find(function(producto){
        //retorna cuando machea
            return producto.id==productoId;
        })
        res.render('product',{productoEncontrado:productoEncontrado ,
            mensaje:mensaje})

    },
    store:(req , res)=>{
        //capturo los datos del formulario mediante una variable 
        let productoNuevo={
            name: req.body.name,    
            price: req.body.price,
            descount: req.body.descount,
            description: req.body.description,
        } 
        console.log(productoNuevo,req.body);
       //agrego ala db los datos tomados 
       let nuevoarrayDeProductos=[...dbArray,productoNuevo];
        console.log(nuevoarrayDeProductos)
      // escribo la nueva db   
        fs.writeFileSync('/Desktop/proyecto_a/Trabajo-Integrador/data/db_productos.json',JSON.stringify(nuevoarrayDeProductos,null," "))
    }    
}

module.exports=userController;