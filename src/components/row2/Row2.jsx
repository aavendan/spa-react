function Card({ config }) {
    return (
        <div className="col-md-6">
            <div className={ `h-100 p-5 rounded-3 ${config.mode}` }>
                <h2> {config.title} </h2>
                <p>
                    {config.description}
                </p>
                <button className={ `btn ${config.colorButton}` } type="button">
                    Example button
                </button>
            </div>
        </div>
    )
}

function Row2() {

    let configs = [
        {
            mode: 'text-bg-dark',
            title: 'Change the background',
            description: "Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.",
            colorButton: 'btn-outline-light'
        },
    
        {
            mode: 'bg-body-tertiary border',
            title: 'Add borders',
            description: "Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.",
            colorButton: 'btn-outline-secondary'
        }
    ]

    let rows = configs.map(config => <Card config={config} key={config.title} />)

    return (
        <div className="row align-items-md-stretch">
            {rows}
        </div>
    )
}

export default Row2