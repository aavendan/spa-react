import './Table.css'

function Td({config}) {

    let value;
    
    if(config) {
        value = <td>
            <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
            >
                <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
            </svg>
        </td> 
    } else {
        value = <td />
    }

    return (
        <>{value}</>
    )
}

function Tr({ config }) {

    let values = config.opciones.map( (value,idx) => <Td config={value} key={idx}/> )

    return (
        <tr>
            <th scope="row" className="text-start">
                {config.titulo}
            </th>
            {values}
        </tr>
    )
}

function Table() {

    let data = [
        {
            "id": 0,
            "titulo": "Inicial",
            "opciones": [1, 1, 1]
        },
        {
            "id": 1,
            "titulo": "Intermedio",
            "opciones": [0, 1, 1]
        },
        {
            "id": 2,
            "titulo": "Avanzado",
            "opciones": [1, 1, 1]
        },
        {
            "id": 3,
            "titulo": "Maestro",
            "opciones": [0, 1, 1]
        },
        {
            "id": 4,
            "titulo": "Líder",
            "opciones": [0, 1, 1]
        },
        {
            "id": 5,
            "titulo": "Gerencial",
            "opciones": [0, 0, 1]
        }
    ]

    let rows = data.map(datum => <Tr config={datum} key={datum.id} />)

   
    return (
        <main className="my-5 mx-5 px-lg-5">
            <h2 className="display-6 text-center mb-4">Planes de Pago</h2>
            <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th style={{ width: "34%" }} />
                            <th style={{ width: "22%" }}>Mensual</th>
                            <th style={{ width: "22%" }}>Semestral</th>
                            <th style={{ width: "22%" }}>Anual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </main>



    )
}

export default Table