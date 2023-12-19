const numeros = [1,5,2]

const tabuada = (valores : number[]) : string => {
    let resultado: string = ''

    for(let numero of valores){
        for ( let j = 0; j < 11; j++){
            resultado += `${numero} x ${j} = ${numero*j} \n`

            if (j === 10) {
                resultado += '------------------------- \n'
            }
        }
    }
    return resultado
}

const tabuadaTabela = (valores : number[]) : string[] => {
    let resultado: string[] = ['']

    for(let numero of valores){
        for ( let j = 0; j < 11; j++){
            resultado.push(`${numero} x ${j} = ${numero*j}`)

            if (j === 10) {
                resultado.push('-------------------------')
            }
        }
    }
    return resultado
}

const visualizar = tabuadaTabela(numeros)

for(let i of visualizar){
    console.log(i)
}