import React from 'react';
import {
    Filter,
    List,
    NumberInput,
    ReferenceInput,
    SearchInput,
    SelectInput,
    useTranslate,
    Datagrid,
    TextField
} from 'react-admin';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useQuickFilterStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(3),
    },
}));

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.root} label={translate(label)} />;
};

export const styles = {
    LargeImage: { width: '90%' },
    Title: { width: '100%' },
    Author: { width: '100%' },
    Content: { maxWidth: 200, // 必须指定宽度
                overflow : 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: "nowrap",
                display: '-webkit-box',
                webkitLineClamp: '1',
                webkitBoxOrient: 'vertical',                
},
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

export const ProductFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <ReferenceInput
            source="category_id"
            reference="categories"
            sort={{ field: 'id', order: 'ASC' }}
        >
            <SelectInput source="name" />
        </ReferenceInput>
        <NumberInput source="width_gte" />
        <NumberInput source="width_lte" />
        <NumberInput source="height_gte" />
        <NumberInput source="height_lte" />
        <QuickFilter
            label="resources.products.fields.stock_lte"
            source="stock_lte"
            defaultValue={10}
        />
    </Filter>
);

const NotificationList = props => {
    return (
        <List
            {...props}
            perPage={10}
            sort={{ field: 'id', order: 'ASC' }}
        >
            <Datagrid rowClick="edit">
                <TextField source="uuid" />
                <TextField source="title" />
                <TextField source="x" />
                <TextField source="y"/>
                <TextField source="content" />
            </Datagrid>        
        </List>
    );
}

export default NotificationList;
