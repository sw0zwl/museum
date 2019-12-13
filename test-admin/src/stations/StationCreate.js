import React from 'react';
import {
    Create,
    FormTab,
    TabbedForm,
    TextInput,
    required,
    NumberInput
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

export const styles = {
    uuid: { width: '7em' },
    title: { width: '7em' },
    x: { width: '7em' },
    y: { width: '7em' },
    content: { display: 'inline-block' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const ProductCreate = props => {
    const classes = useStyles();
    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="resources.collections.tabs.image">
                    <TextInput source="uuid" className={classes.uuid} validate={required()}>
                    </TextInput>                    
                    <TextInput source="title" className={classes.title} validate={required()}>
                    </TextInput>                    
                    <NumberInput source="x" className={classes.x} validate={required()}>
                    </NumberInput>                    
                    <NumberInput source="y" className={classes.y} validate={required()}>
                    </NumberInput>                    
                    <RichTextInput source="content" className={classes.content}>
                    </RichTextInput>                    
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default ProductCreate;
