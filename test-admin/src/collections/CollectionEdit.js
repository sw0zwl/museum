import React from 'react';
import {
    Edit,
    FormTab,
    TabbedForm,
    TextInput,
    useTranslate
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import Poster from './Poster';

const ProductTitle = props => {
    const translate = useTranslate();

    return (
        <span>{translate('resources.collections.title')} #{props.record.Title}</span>);
}

const ProductEdit = props => {
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
