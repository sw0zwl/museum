import React from 'react';
import Welcome from './Welcome';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' },
};

const Dashboard = () => {
    return (
        <div style={styles.flex}>
            <div style={styles.leftCol}>
                <div style={styles.singleCol}>
                    <Welcome />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
