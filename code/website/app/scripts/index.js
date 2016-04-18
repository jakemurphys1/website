var Backbone=require("backbone");
var $ = require("jquery");
var React = require("react");
var ReactDOM=require("react-dom");
var Input = require("react-bootstrap/lib/Input");
var ButtonInput= require("react-bootstrap/lib/ButtonInput")
//local
var MainForm=require("./components/main.jsx")
var AboutForm=MainForm.About;
var ProjectsForm=MainForm.Projects;
var GamesForm=MainForm.Games;

var BackgroundForm=require("./components/background.jsx")
var ResumeForm=require("./components/resume.jsx")
var EductionForm=require("./components/education.jsx")

var GaminglocalForm=require("./components/gaminglocal.jsx")
var MajesticthaiForm=require("./components/majesticthai.jsx")
var BatchMakerForm=require("./components/batchmaker.jsx")

var IncomingForm=require("./components/incoming.jsx")
var WiresForm=require("./components/wires.jsx")
var ChachingForm=require("./components/chaching.jsx")







var homeContainer= document.getElementById("submain")
var detailContainer= document.getElementById("details")

var Router = Backbone.Router.extend({
  routes:{
    "":"",
    "about":"about",
    "projects":"projects",
    "games":"games",
    "background":"background",
    "resume":"resume",
    "education":"education",
    "incoming":"incoming",
    "wires":"wires",
    "chaching":"chaching",
    "gaminglocal":"gaminglocal",
    "majesticthai":"majesticthai",
    "batchmaker":"batchmaker",
  },
  about:function(){
    ReactDOM.unmountComponentAtNode(homeContainer);
    ReactDOM.render(<AboutForm router={this}/>,homeContainer)
  },
  projects:function(){
    ReactDOM.unmountComponentAtNode(homeContainer);
    ReactDOM.render(<ProjectsForm router={this}/>,homeContainer)
  },
  games:function(){
    ReactDOM.unmountComponentAtNode(homeContainer);
    ReactDOM.render(<GamesForm router={this}/>,homeContainer)
  },
  background:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<BackgroundForm router={this}/>,detailContainer)
  },
  resume:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<ResumeForm router={this}/>,detailContainer)
  },
  education:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<EductionForm router={this}/>,detailContainer)
  },
  incoming:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<IncomingForm router={this}/>,detailContainer)
  },
  wires:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<WiresForm router={this}/>,detailContainer)
  },
  chaching:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<ChachingForm router={this}/>,detailContainer)
  },
  gaminglocal:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<GaminglocalForm router={this}/>,detailContainer)
  },
  majesticthai:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<MajesticthaiForm router={this}/>,detailContainer)
  },
  batchmaker:function(){
    ReactDOM.unmountComponentAtNode(detailContainer);
    ReactDOM.render(<BatchMakerForm router={this}/>,detailContainer)
  },
})


var router = new Router();
Backbone.history.start();
