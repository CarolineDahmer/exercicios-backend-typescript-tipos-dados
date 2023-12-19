const produto01 =  {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 10
}

const impressaoEtiquetas = (produto : {
    produto : string,
    lote: number,
    ano: number,
    qtd: number
}) : string[] => {
    let resultado: string[] = []

    for(let i = 1; i <= produto.qtd; i++) {
        resultado.push(`${produto.lote}-${produto.ano}-${i.toString().padStart(3,'0')}`)
    }
    return resultado
}



console.log(impressaoEtiquetas(produto01))