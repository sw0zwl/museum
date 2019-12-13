import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslate, MenuItemLink, DashboardMenuItem } from 'react-admin';
import HomeIcon from '@material-ui/icons/HomeRounded';

import splashes from '../splashes';
import notifications from '../notifications';
import collections from '../collections';
import stations from '../stations'
import map from '../map';
import about from '../about';
import SubMenu from './SubMenu'

const Menu = ({ onMenuClick, dense, logout }) => {
    const [state, setState] = useState({
        menuHome: false,
        menuMap: false,
        menuCollection: false,
    });
    const translate = useTranslate();
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    useSelector(state => state.theme); // force rerender on theme change

    const handleToggle = menu => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            {' '}
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
            <SubMenu
                handleToggle={() => handleToggle('menuHome')}
                isOpen={state.menuHome}
                sidebarIsOpen={open}
                name="pos.menu.home"
                icon={<HomeIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/splashes`}
                    primaryText={translate(`resources.splashes.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<splashes.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                    replace
                />
                <MenuItemLink
                    to={`/notifications`}
                    primaryText={translate(`resources.notifications.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<notifications.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuMap')}
                isOpen={state.menuMap}
                sidebarIsOpen={open}
                name="pos.menu.map"
                icon={<map.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/map`}
                    primaryText={translate(`resources.map.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<map.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/stations`}
                    primaryText={translate(`resources.stations.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<stations.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCollection')}
                isOpen={state.menuCollection}
                sidebarIsOpen={open}
                name="pos.menu.collection"
                icon={<collections.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/collections`}
                    primaryText={translate(`resources.collections.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<collections.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to={`/about`}
                primaryText={translate(`resources.about.name`, {
                    smart_count: 2,
                })}
                leftIcon={<about.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
        </div>
    );
};

Menu.propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object,
};

export default Menu;
