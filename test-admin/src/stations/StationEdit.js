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
        <span>{translate('resources.stations.name')} #{props.record.title}</span>);
}

const ProductEdit = props => {
    return (
        <Edit {...props} title={<ProductTitle />}>
            <TabbedForm>
                <FormTab label="resources.collections.tabs.image">
                    <Poster />
                    <TextInput source="uuid" fullWidth />
                    <TextInput source="title" fullWidth />
                    <TextInput source="x" fullWidth />
                    <TextInput source="y" fullWidth />
                </FormTab>
                <FormTab
                    label="resources.collections.tabs.description"
                    path="description"
                >
                    <RichTextInput source="content" label="" />
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default ProductEdit;
