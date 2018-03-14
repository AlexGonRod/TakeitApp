import React, { Component } from 'react'
import Plx from "react-plx";
import './styles/main.css'

const ParallaxData = [
    {
        start: 0,
        end: 100,
        properties: [
            {
                startValue: 1.1,
                endValue:1,
                property: "scale"
            },
        ]
    },
    {
        start: 100,
        end: 200,
        properties: [

            {
                startValue: 1,
                endValue: 0,
                property: "opacity"
            }
        ]
    },
]



class Jumbotron extends Component {
    render() {
        return (

            // <Plx className='MyJumbotron'
            //     parallaxData={ParallaxData}
            // >
                <div id="jumbotron" className="jumbotron jumbotron-fluid">
                    <div className="container-fluid">
                    <h1 className="display-4 text-left">UserName</h1>
                    <p className="text-left">@Name·Followers·Following</p>
                    </div>
                </div>
            //</Plx>
        )
    }
}



export default Jumbotron













