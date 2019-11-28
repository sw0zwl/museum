import React from 'react';
import { List } from 'react-admin';
import CardInfo from './CardInfo'

const styles = {
    flex: { display: 'flex', flexWrap: 'wrap'},
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { marginRight: '1em', minWidth: '500px', maxWidth: '500px', marginBottom: '1em'},
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: {marginLeft: '2em', marginTop: '2em', marginRight: '2em', marginBottom: '2em', minWidth: '500px', maxWidth: '500px'},
};

const Splashes = (props) => {
    const {ids, data} = props

        return (<div style={styles.flex}>
            {ids.map(id => (
            <div key={id} style={styles.singleCol}>
                <CardInfo
                    {...props}
                    {...data[id]}
                    />
            </div>
        ))}
        </div>)
    }

const GridList = props => (
    <List {...props} >
        <Splashes {...props} />
    </List>
);
export default GridList;
