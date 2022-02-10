import React from 'react';
import { 
    makeStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Container,

} from '@material-ui/core';

const useStyles = makeStyles({
    cardRoot:{
        maxWidth: 245
    },
    media: {
        height: 120,
      },
});

export default function SalonCard() {

   const classes = useStyles();

  return <div>
      <Container>
          <Typography>Teste card</Typography>

          <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2020%2F10%2F05%2Fblack-hair-salons-experience-2000.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" >
            Ride salon Example
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bree City Mall, 233
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View More
        </Button>
      </CardActions>
    </Card>
      </Container>
  </div>;
}
