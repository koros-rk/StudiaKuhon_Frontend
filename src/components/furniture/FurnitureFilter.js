import React from 'react';

const DesignFilter = (props) => {
    const [active, setActive] = React.useState("all")
    const [category, setCategory] = React.useState('all')

    const changeActive = (e) => {
        setActive(e.target.id)
        setCategory(e.target.value)

        if (category === 'all') {
            props.onFilterChange('')
        } else props.onFilterChange('category='+category)
    }

    return (
        <div className="row">
            <div className="small-12 columns small-centered">
                <fieldset className="controls">
                    <div className="row">
                        <div className="small-8 columns" id="controlsfilter">
                            <button onClick={changeActive} id={'all'} value={"all"}
                                    className={`filter tiny round ${active === 'all' ? "active" : ""}`}>Усі меблі
                            </button>
                            <button onClick={changeActive} id={'living'} value={"Вітальня"}
                                    className={`filter tiny round ${active === 'living' ? "active" : ""}`}>Вітальня
                            </button>
                            <button onClick={changeActive} id={'kitchen'} value={"Кухня"}
                                    className={`filter tiny round ${active === 'kitchen' ? "active" : ""}`}>Кухня
                            </button>
                            <button onClick={changeActive} id={'bath'} value={"Ванна кімната"}
                                    className={`filter tiny round ${active === 'bath' ? "active" : ""}`}>Ванна
                            </button>
                            <button onClick={changeActive} id={'wardrobe'} value={"Гардиробна кімната"}
                                    className={`filter tiny round ${active === 'wardrobe' ? "active" : ""}`}>Гардероб
                            </button>
                            <button onClick={changeActive} id={'comodes'} value={"Тумби та Тумби TV"}
                                    className={`filter tiny round ${active === 'comodes' ? "active" : ""}`}>Тумби
                            </button>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default DesignFilter