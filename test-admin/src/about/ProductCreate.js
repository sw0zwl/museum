import React from 'react';
import {
    Create,
    FormTab,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    TextInput,
    required,
    ImageInput,
    ImageField,
    useUpdate
} from 'react-admin';
import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

export const styles = {
    price: { width: '7em' },
    width: { width: '7em' },
    height: { width: '7em' },
    stock: { width: '7em' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const ProductCreate = props => {
    const classes = useStyles();
    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="IMAGE">
                    <ImageInput source="LargeImage" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                        <ImageField source="src" title="title" />
                    </ImageInput>                    
                    <TextInput source="Title">
                    </TextInput>                    
                    <TextInput source="Dynasty">
                    </TextInput>                    
                    <TextInput source="Category">
                    </TextInput>                    
                    <TextInput source="SmallImage">
                    </TextInput>                    
                    <TextInput source="Content">
                    </TextInput>                    
                </FormTab>
                <FormTab
                    label="DESCRIPTION"
                    path="description"
                >
                    <RichTextInput source="description" label="" />
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default ProductCreate;
