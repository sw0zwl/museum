import React from 'react';
import {
    Edit,
    FormTab,
    TabbedForm,
    TextInput,
    NumberInput,
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
                    <NumberInput source="mac" fullWidth/>
                    <TextInput source="title" fullWidth />
                    <NumberInput source="x" fullWidth />
                    <NumberInput source="y" fullWidth />
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
