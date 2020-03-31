import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.type}
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title={props.cond === 'card_left' ? 'DEATH' : 'CONFIRMED'}
        />
        <CardContent>
          <Typography variant='h1' component = 'h1'>{props.cond === 'card_left' ? 'Total Dath' : 'Total Confirmed'}</Typography>
          <Typography gutterBottom variant="h2" component="h2">
            {props.cond === 'card_left' ? props.death : props.confirmed}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}