import './App.css';
import User from './Components/All/index';
import SpecificUser from './Components/SpecificUser/index';
import Female from './Components/Female/index';
import Male from './Components/Male/index';

import { BrowserRouter, Route} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route path="/" exact component={User}/>
				<Route path="/user" component={SpecificUser} />
				<Route path="/female" component={Female}/>
				<Route path="/male" component={Male} />
			</div>
		</BrowserRouter>
	);
}

export default App;
