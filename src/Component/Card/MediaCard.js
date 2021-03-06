import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardStyle from '../Card/MeidaCard.css';

const MediaCard = (props) => {
    // console.log(props.post)
    const { title, body } = props.post;
    return (
        <div className="media-card">
            <Card >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" variant="contained">
                        Comment
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                  </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default MediaCard;