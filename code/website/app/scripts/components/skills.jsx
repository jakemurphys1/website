var React = require("react");
var ReactDOM=require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")



var Background = React.createClass({
  componentDidMount(){

  },
  getInitialState:function(){
      return {

      }
    },

  render:function(){

    return(<div className="skills">
      <h1>Skills</h1>
      <div className="col-md-4">
        <p>HTML</p>
          <p>CSS</p>
          <p>BootStrap</p>
        </div>
        <div className="col-md-4">
          <p>Javascript</p>
          <p>JQuery</p>
          <p>HandleBars</p>
        </div>
        <div className="col-md-4">
          <p>React</p>
          <p>BackBone</p>
          <p>Parse</p>
        </div>

      </div>)
  },
})


module.exports=Background
