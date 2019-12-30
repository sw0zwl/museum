import React from 'react';
import {
    Create,
    FormTab,
    TabbedForm,
    TextInput,
    ImageInput,
    ImageField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const styles = {
    price: { width: '7em' },
    width: { width: '7em' },
    height: { width: '7em' },
    stock: { width: '7em' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const ProductCreate = props => {
    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="resources.collections.tabs.image">
                    <ImageInput source="LargeImage" accept="image/*" placeholder={<p>选择图片...</p>}>
                        <ImageField source="src" title="title" />
                    </ImageInput>                    
                    <TextInput source="Title"/>
                    <TextInput source="Dynasty"/>
                    <TextInput source="Category"/>
                    <RichTextInput source="Content" label=""/>
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default ProductCreate;
