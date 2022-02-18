// child of index
import React, {Component} from 'react'
import Swimming from './Swimming'
import Running from './Running'

// import CanvasJS from 'canvasjs'
// import CanvasJSChart from 'CanvasJSChart'


// class Graph extends Component {
// 	render() {
// 		const options = {
// 			theme: "dark2",
// 			animationEnabled: true,
// 			zoomEnabled: true,
// 			title:{
// 				text: "100 Fly over the 2022 Competition Season"
// 			},
// 			axisX: {
// 				title:"Date",
// 				suffix: "°C",
// 				crosshair: {
// 					enabled: true,
// 					snapToDataPoint: true
// 				}
// 			},
// 			axisY:{
// 				title: "Time",
// 				crosshair: {
// 					enabled: true,
// 					snapToDataPoint: true
// 				}
// 			},
// 			data: [{
// 				type: "scatter",
// 				markerSize: 15,
// 				toolTipContent: "Date: {x}°C Time: {y}",
// 				dataPoints: [
// 					{ x: 1/12, y: 58.25},
// 					{ x: 1/26, y: 57.43},
// 					{ x: 2/10, y: 59.45},
// 					{ x: 2/28, y: 57.2},
// 					{ x: 5/10, y: 56.19},
// 					{ x: 5/22, y: 56.01},
// 					{ x: 6/12, y: 55.99},
// 					{ x: 6/26, y: 55.64},
// 					{ x: 7/12, y: 56.73},
// 					{ x: 7/19, y: 55.60},
// 					{ x: 7/26, y: 54.43},
// 					{ x: 9/1, y: 56.21},
// 					{ x: 9/28, y: 55.34},
// 					{ x: 10/6, y: 55.98},
// 					{ x: 10/29, y: 54.46},
// 					{ x: 11/14, y: 54.43},
// 					{ x: 12/18, y: 54.90}
// 				]
// 			}]
// 		}
// 		return (
		
// 			//  this.chart = ref 
//             console.log("Chart")
		
// 		);
// 	}
// }
// module.exports = Graph;                              

const Background = () => {
    return (
        <section className='background'>
            <h3>How Did You Race?</h3>
            <div className='grid'>
                <div>
                    <img src={"https://i.imgur.com/60egnVj.jpg"} />
                    <h3>Swim Your Heart Out</h3>
                </div>

                <div>
                    <img src={"https://i.imgur.com/RWsW0iQ.jpg"} />
                    <h3>Run Like the Wind</h3>
                </div>
            </div>
        </section>
    )
}
//   render (
//     <React.StrictMode>
  
//     <Running />
//     <Swimming />
//     </React.StrictMode>,
//   )

export default Background

// export default Show;