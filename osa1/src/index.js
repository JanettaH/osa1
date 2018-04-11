import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    return (
        <div>
            <p>{kurssi}</p>
        </div>
    )
}
const Osa = (props) => {
    return (
        <div>
            {props.osa1} {props.tehtavia1}
            {props.osa2} {props.tehtavia2}
            {props.osa3} {props.tehtavia3}
        </div>
    )
}
const Sisalto = () => {
    return (
        <div>
            <Osa osa1 = 'Reactin perusteet' tehtavia1 = '10'/>
            <Osa osa2 = 'Tiedonvälitys propseilla' tehtavia2 = '7'/>
            <Osa osa3 = 'Komponenttien tila' tehtavia3 = '14' />
        </div>
    )
}

const Yhteensa = () => {
    const tehtavia1 = 10
    const tehtavia2 = 7
    const tehtavia3 = 14
    return (
        <div>
            Yhteensä {tehtavia1 + tehtavia2 + tehtavia3} tehtävää
        </div>
    )
}

const App = () => {

    return (
        <div>
            <Otsikko />
            <Sisalto  />
            <Yhteensa />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)