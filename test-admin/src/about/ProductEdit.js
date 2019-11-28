import React from 'react';
import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    FormTab,
    NumberInput,
    Pagination,
    ReferenceInput,
    ReferenceManyField,
    SelectInput,
    TabbedForm,
    TextField,
    TextInput,
    useTranslate
} from 'react-admin';
import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import Poster from './Poster';
import { styles as createStyles } from './ProductCreate';

const ProductTitle = props => {
    const translate = useTranslate();

    return (
        <span>{translate('resources.collections.title')} #{props.record.Title}</span>);
}

const styles = {
    ...createStyles,
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const useStyles = makeStyles(styles);

const ProductEdit = props => {
    const classes = useStyles();
    return (
        <Edit {...props} title={<ProductTitle />}>
            <TabbedForm>
                <FormTab label="resources.collections.tabs.image">
                    <Poster />
                    <TextInput source="Title" fullWidth />
                    <TextInput source="Dynasty" fullWidth />
                    <TextInput source="Category" fullWidth />
                </FormTab>
                <FormTab
                    label="resources.collections.tabs.description"
                    path="description"
                >
                    <RichTextInput source="Content" label="" />
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default ProductEdit;
