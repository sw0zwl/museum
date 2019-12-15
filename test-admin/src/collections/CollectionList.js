import React from 'react';
import {
    Filter,
    List,
    TextInput,
    SearchInput,
} from 'react-admin';
import GridList from './GridList';

export const ProductFilter = props => (
    <Filter {...props}>
        <SearchInput source="Title" alwaysOn />
        

    </Filter>
);

const ProductList = props => (
    <List
        {...props}
        filters={<ProductFilter />}
        perPage={10}
        sort={{ field: 'id', order: 'ASC' }}
    >
        <GridList />
    </List>
);

export default ProductList;
