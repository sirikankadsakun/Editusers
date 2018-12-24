import React,{Component} from 'react';
import './netlog.css';
import Appheader from './Components/Appheader';
import Applogin from './Components/Applogin';
class Netlog extends Component {
    state = { }
    render() {
        return(
            <div>
                <Appheader />
            <Applogin />
                      </div>

        );
    }
    
}

export default Netlog;