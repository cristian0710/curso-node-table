const fs = require('fs');

const crearArchivo = async ( base = 5, listar = true, hasta = 10 ) => {
    let salida = '';

    try {
        result = 0;

        for(let i=1; i<=hasta; i++){
        result += base * i;
        salida += `${base} * ${i} = ${result}\n`;
        }
        
        if(listar){
            console.log('************************************************'.green);
            console.log('        TABLA DEL: '.yellow , base);
            console.log('************************************************'.red);
            console.log(salida);
        }
        

        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
    
            console.log(`La tabla del ${base}.txt fue creada`);
    
        })
        
    } catch (error) {
        throw error;
    }

    
}


module.exports = {crearArchivo}