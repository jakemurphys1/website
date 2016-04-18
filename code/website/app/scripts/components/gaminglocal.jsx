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
      <h1>Gaming Local</h1>
      <p>Gaminglocal is a website to allow players of the collectible card game "Magic: The Gathering" one location is see all MTG related events, specials, and card sales. Store Owners that run tournaments for Magic: The Gathering can register their store and enter information for players to access.</p>
      <p>Gaminglocal is my final project for The Iron Yard. I created it in about two weeks, and used HTML, CSS, Javascript, JQuery, React, and Backbone. It uses the open source version of Parse in combination with heroku.com for the information storage.</p>
      <p>This is a highly desired tool for the Magic community. It only took one day after I announced it for the first store to register and start using it as a resource.</p>
      <p className="playButton"><a href="http://www.gaminglocal.com/"><button className="btn btn-primary">View Here</button></a></p>
    </div>)
  },
})


module.exports=Incoming
