import React from "react";
import { Grid, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";

function ImageView (props) {

  return (


        <Grid container> 

          <Grid item xs={12}>
            <Paper className={props.classes.paper} square={true}>
              <div>
                <img src={props.currentItem.images[0]} alt="mouse" objectFit="cover" width="100%"></img>
              </div>
            </Paper>
          </Grid>
          
          <GridList cols={3} spacing={6} cellHeight={120}>

            {props.currentItem.images.map( image => {
              console.log('the image is: ',image)
              if (image.length != 0) {
                return (
                <GridListTile>
                <img src={image} alt="mouse"></img>
                </GridListTile>
                )           
              }
              
            })}
          </GridList>
        </Grid>

)
}

export default ImageView;