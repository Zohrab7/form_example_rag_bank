import * as React from "react";
import {Header as HeaderWrapper, Menu} from "semantic-ui-react";
import {Link, useLocation} from "react-router-dom";

import logo from "../static/media/logo.jpg";
import "./header.scss";
import {dashboardNav, navbarNames} from "../const";

interface IProps {

}

export const Header: React.FC<IProps> = () => {

    const {pathname} = useLocation();

    return (
        <HeaderWrapper className="rga__header">
            <Link to={'/'}>
                <img className="rga__header-logo" src={logo} alt="logo"/>
            </Link>
            <Menu className="rga__header-navbar" secondary>
                <Menu.Menu className="item-left" position='left'>
                    {
                        navbarNames.map(({
                                             key, name, link
                                         }) => (
                            <Menu.Item
                                size='medium'
                                as={Link}
                                to={link}
                                active={link===pathname||(dashboardNav.user.includes(pathname)&&link===navbarNames[0].link)}
                                key={key}>
                                {name}
                            </Menu.Item>)
                        )
                    }
                </Menu.Menu>
            </Menu>
        </HeaderWrapper>
    );
};
