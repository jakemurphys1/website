var React = require("react");
var ReactDOM=require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")



var Incoming = React.createClass({
  componentDidMount(){

  },
  getInitialState:function(){
      return {

      }
    },

  render:function(){

    return(<div>
      <h1>Wires</h1>
      <p>Prior to enlisting in The Iron Yard program, I spent monthes learning web languages in my free time. As a project, I decided to create some games.</p>
      <p>Wires is a casual game similar to games like Tetris. Tiles will be passed to you, and you must quickly decided which column to send them. Tiles will either be wires, bombs, or batteries. Connect the batteries to the bombs the remove the tiles, and get points. Can you get 10,000 points?</p>
      <p>Wires represents about three weeks of work, either after work or during the weekend.  It was made using only HTML, CSS, Javascript, and JQuery.</p>
      <p className="playButton"><button className="btn btn-primary">Play Here</button></p>
      </div>)
  },
})


module.exports=Incoming
