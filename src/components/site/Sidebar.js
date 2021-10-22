import {
    Route, 
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import ClassComponentDemo from '../concepts/ClassComponents/ClassComponentsDemo';
import JSX from '../concepts/JSX/JSX';
import State from '../concepts/State/State';
import Props from '../concepts/Props/Props';
import LifecycleMethods from '../concepts/LifecycleMethods/LifecycleMethods';
import Timers from '../apps/timer-apps/TimePiecesApp';
import NytApp from '../apps/nyt-app/NytApp';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/classcomponent'>Class Component</Link></li>
                    <li><Link to='/jsx'>JSX</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/props'>Props</Link></li>
                    <li><Link to='/lifecycleMethods'>Lifecycle Methods</Link></li>
                    <li><Link to='/timer'>Time Pieces App</Link></li>
                    <li><Link to='/nytApp'>NYT App</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/resources'><Resources /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/functionalComponent'><FunctionalComponentDemo /></Route>
                    <Route exact path='/classComponent'><ClassComponentDemo /></Route>
                    <Route exact path='/jsx'><JSX /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/props'><Props /></Route>
                    <Route exact path='/lifecycleMethods'><LifecycleMethods /></Route>
                    <Route exact path='/timer'><Timers /></Route>
                    <Route exact path='/nytApp'><NytApp /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;