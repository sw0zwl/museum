import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, Responsive } from 'react-admin';
import { withRouter } from 'react-router-dom';

const MyMenu = ({ resources, onMenuClick, logout }) => (
    <div>
        {resources.map(resource => (
            MenuItemLink
                key={resource.name}
                to={`/${resource.name}`}
                primaryText={resource.options && resource.options.label || resource.name}
                leftIcon={createElement(resource.icon)}
                onClick={onMenuClick}
            />
        ))}
        <MenuItemLink to="/custom-route" primaryText="Miscellaneous" onClick={onMenuClick} />
        <Responsive
            small={logout}
            medium={null} // Pass null to render nothing on larger devices
        />
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(MyMenu));
        ))}
    </div>
)