import React from 'react';
import {
    Create,
    FormTab,
    TabbedForm,
    TextInput,
    ImageInput,
    ImageField,
} from 'react-admin';

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
                    <TextInput source="Title">
                    </TextInput>                    
                    <TextInput source="Dynasty">
                    </TextInput>                    
                    <TextInput source="Category">
                    </TextInput>                    
                    <TextInput source="Content">
                    </TextInput>                    
                    <TextInput source="Status">
                    </TextInput> 
                    <TextInput source="DisplayArea">
                    </TextInput> 
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default ProductCreate;
