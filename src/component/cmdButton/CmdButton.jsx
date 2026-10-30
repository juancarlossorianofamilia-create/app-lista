import "./cmdButton.css"

function CmdBottun ({
    texto,
    colorTexto,
    coloFondo = "#61DAFB",
    onClick = () => {},
    padding = "20px"
}) {

    return (
       
        <button
            className="cmd"
            onClick={onClick}
            style={{
                background:coloFondo,
                color:colorTexto,
                padding:padding
            }}
        >
            {texto}
        </button>

    )
}

export default CmdBottun