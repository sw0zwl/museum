import React from 'react';
import {
    List,
} from 'react-admin';
import GridList from './GridList';

const ProductList = props => (
    <List
        {...props}
    >
        <GridList {...props} />
    </List>
);

export default ProductList;
