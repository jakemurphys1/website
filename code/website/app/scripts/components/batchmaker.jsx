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
      <h1>BatchMaker</h1>
      <p>The BatchMaker project is a website that allows users to create recipes, and save them to a server to access later.</p>
      <p>This project was completed over the course of a weekend. It uses a free server from heroku.com, and thus may have slower response time.</p>
      <p>This project was made using HTML, CSS, Javascript, JQuery, React and Backbone. It uses the open source version of Parse for the storage.</p>
      <p className="playButton"><a href="http://jakemurphys1.github.io/8.4-donuts/dist/index.html"><button className="btn btn-primary">View Here</button></a></p>
      </div>)
  },
})


module.exports=Incoming
