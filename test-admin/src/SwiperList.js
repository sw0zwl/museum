// in src/comments.js
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/core/Avatar';
import { List, TextField, DateField, ReferenceField, EditButton } from "react-admin";

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const SwiperGrid = ({ ids, data, basePath }) => (
    <div style={{ margin: '1em' }}>
    {ids.map(id =>
        <Card key={id} style={cardStyle}>
            <CardHeader
                title={<TextField record={data[id]} source="author.name" />}
                subheader={<DateField record={data[id]} source="created_at" />}
                avatar={<Avatar icon={<PersonIcon />} />}
            />
            <CardContent>
                <TextField record={data[id]} source="body" />
            </CardContent>
            <CardContent>
                about&nbsp;
                <ReferenceField label="Post" resource="comments" record={data[id]} source="post_id" reference="posts" basePath={basePath}>
                    <TextField source="title" />
                </ReferenceField>
            </CardContent>
            <CardActions style={{ textAlign: 'right' }}>
                <EditButton resource="posts" basePath={basePath} record={data[id]} />
            </CardActions>
        </Card>
    )}
    </div>
);
SwiperGrid.defaultProps = {
    data: {},
    ids: [],
};

export const SwiperList = (props) => (
    <List title="All comments" {...props}>
        <SwiperGrid />
    </List>
);