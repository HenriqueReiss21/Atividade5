const arrayPrint = [
    [5,10,12],
    [2,9,11],
    [15,8,6]
]

arrayPrint.forEach((valor) =>{

    valor.forEach((valorEspec) =>{
        if(valorEspec > 10){
            console.log(valorEspec) //mostrando valor maiores do que 10
        }
    })

}

)
