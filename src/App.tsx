import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import {Container, Header, SideBar} from "./components";
import dashboardRouts from './routes';


function App() {

    return (
        <div className="rga">
            <Header/>
            <SideBar>
                <Container>
                 <Switch>
                     {
                         [
                             ...dashboardRouts
                         ].map((routeData)=><Route {...routeData}/>)
                     }
                 </Switch>
                </Container>
            </SideBar>
        </div>

    );
}

export default App;
