import './style.css'

export function HighlightText(props){
    return(
        <h1 style={{color: props.cor, fontSize:props.tamanho + 'px'}}>{props.texto}</h1>
    )
}