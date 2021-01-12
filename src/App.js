import './App.css';
import UsersScreen from './Components/Screen1/index';
import SpecificUserScreen from './Components/Screen2/index';
import FemalesScreen from './Components/Screen3/index';
import MalesScreen from './Components/Screen4/index';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
        <Route path="/" exact component={UsersScreen}/>
        <Route path="/user" component={SpecificUserScreen} />
        <Route path="/female" component={FemalesScreen}/>
        <Route path="/male" component={MalesScreen} />
			</div>
		</BrowserRouter>
	);
}

export default App;
