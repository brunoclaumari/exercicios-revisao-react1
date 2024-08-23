

export default function lista1(){

    /* var limite = 10;
    const elementos = [];
    for (let i = 0; i < limite; i++) {
        elementos.push(<span key={i+1}>{i+1},</span>);
    } */

    return (        
            <div>
                <div>
                    {geraLista(10)}
                </div>
                <div>
                    {geraLista(15)}
                </div>
            </div>        
    )
}

function geraLista(limite = 10){
    const elementos = [];
    for (let i = 0; i < limite; i++) {
        elementos.push(<span key={i+1}>{i+1},</span>);
    }

    return elementos;
}