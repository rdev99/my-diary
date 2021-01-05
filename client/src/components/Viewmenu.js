import {NavLink} from 'react-router-dom';
import './Viewmenu.css'

function hello() {
    console.log('Hello World');
}

function Menuitem(...props) {
    let id=props[0].id;
    let viewid="/view/"+id;
    return (
        <div>
            <NavLink className="navlink-menu" to={viewid}>
                <div className="menu-item">
                    <div className="menu-title" onClick={hello}>Hola Everyone</div>
                    <div className="menu-date">6-Jan-2020</div>
                </div>
            </NavLink>
        </div>
    )
}

function Viewmenu() {
    return (
        <div className="viewmenu">
            <div className="menu">
                <Menuitem id="122655"/>
                <Menuitem id="1226655"/>
            </div>
        </div>
    )
}


export default Viewmenu;