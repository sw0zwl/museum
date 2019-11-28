import React from 'react';
import {
    Filter,
    NumberInput,
    ReferenceInput,
    SearchInput,
    SelectInput,
    useTranslate,
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const mediaUrl = `http://localhost:8000/public/about/about.jpg`;

const useQuickFilterStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(3),
    },
}));

const useStyles = makeStyles({
    LargeImage: { height: '30em', width: '100%' },
    Title: { width: '100%' },
    media: {
        width: '100%',
    },
});

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.root} label={translate(label)} />;
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

// const ProductList = props => (
//     <List
//         {...props}
//         filters={<ProductFilter />}
//         perPage={20}
//         sort={{ field: 'id', order: 'ASC' }}
//     >
//         <GridList />
//     </List>
// );

const AboutShow = (props) => {
    const classes = useStyles();

    return (
        <Edit {...props} id={1} title="关于我们">
            <SimpleForm>
                <CardMedia image={mediaUrl} className={classes.LargeImage} />
                <TextInput source="Title" className={classes.Title}/>
                <RichTextInput source="Content" />
            </SimpleForm>
        </Edit>
    );
}

export default AboutShow;
