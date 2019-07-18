import React, {Component} from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import User from './User';



import 'typeface-roboto';
import './Global.css';
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});
const jss = create(jssPreset());
jss.options.insertionPoint = "insertion-point-jss";

class App extends Component {
	render(){
		return(
			<JssProvider jss={jss} generateClassName={generateClassName}>
			<div className="container">
				<BrowserRouter>
					<div>
						<Switch>	
							<Route path="/User" component={ User }/> 						
							<Route path="/" component={ Login }/>							                          					
						</Switch>
					</div>
				</BrowserRouter> 
			</div>
			</JssProvider>
		);
	}
};

export default App;