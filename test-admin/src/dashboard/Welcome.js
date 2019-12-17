import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate } from 'react-admin';

const useStyles = makeStyles({
    media: {
        height: '33em',
    },
});

const mediaUrl = `https://api.hoshinominami.com:65519/public/about/about.jpg`;

const Welcome = () => {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={mediaUrl} className={classes.media} />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {translate('pos.dashboard.welcome.title')}
                </Typography>
                <Typography component="p">
                    {translate('pos.dashboard.welcome.subtitle')}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Welcome;
