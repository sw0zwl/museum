import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { DeleteButton, EditButton, RichTextField} from 'react-admin';
import LinesEllipsis from 'react-lines-ellipsis'

const useStyles = makeStyles({
    media: {
        height: '16em',
    },
    title: {
        height: '2em',
    },
    content: {
        height: '2em',
    },
});



const CardInfo = ({basePath, data, resource, id, Title, LargeImage, Content}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={LargeImage} className={classes.media} />
            <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                   <LinesEllipsis
                      text={Title}
                      maxLine='1'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'            
                    />
                </Typography>
                <Typography component="p">
                    <RichTextField source={Content}/>
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
                <CardActions style={{ justifyContent: 'flex-end' }}>
                    <DeleteButton basePath={basePath} record={data[id]} resource={resource}/>
                </CardActions>
                <EditButton  basePath={basePath} record={data[id]} resource={resource}/>
            </CardActions>
        </Card>
    );
};



export default CardInfo;
