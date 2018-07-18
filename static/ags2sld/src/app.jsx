import React from 'react'
import { render } from 'react-dom'
import Navbar from './Navbar'
import MainPanel from './MainPanel'

export default class Ags2sld extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                <MainPanel/>
            </div>
        )
    }
}
render(<Ags2sld />, document.getElementById("app"))