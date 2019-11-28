import React from 'react';
import {
    Create,
    FormTab,
    TabbedForm,
    TextInput,
    required,
    ImageInput,
    ImageField,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

export const styles = {
    LargeImage: { width: '90%' },
    Title: { width: '100%' },
    Author: { width: '100%' },
    Content: { width: '100%' },
    widthFormGroup: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const SplashCreate = props => {
    const classes = useStyles();
    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="resources.collections.tabs.image">
                    <TextInput source="Title" className={classes.Title} validate={required()}>
                    </TextInput>                    
                    <ImageInput source="LargeImage" 
                                accept="image/*"
                                className={classes.LargeImage} 
                                placeholder={<p>选择文件...</p>}
                                validate={required()}>
                        <ImageField source="src" title="title" />
                    </ImageInput>                    
                    <TextInput source="Author" className={classes.Title} validate={required()}>
                    </TextInput>                    
                    <RichTextInput source="Content" className={classes.Title} validate={required()}>
                    </RichTextInput>                    
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default SplashCreate;
