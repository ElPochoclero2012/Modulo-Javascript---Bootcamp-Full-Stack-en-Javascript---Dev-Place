const deleteProduct =(request,response) =>{
    response.status(200).send('Producto eliminado')
}

const oneSelectProduct =(request,response) =>{
    response.status(200).json()
}

module.exports={
    deleteProduct,
    oneSelectProduct
}