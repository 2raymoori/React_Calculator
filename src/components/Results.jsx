import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import History from "./History";

export const Results = ({exp, content }) => (
  <Card data-testid="results">
    <CardContent>
      <Typography variant="h5">Results</Typography>
      {content}
      
      {/** @TODO: Add your implementation here */}
      <hr />
    <History flag={true} answer = {{expression:exp,ans:content}} />
    </CardContent>

   
  </Card>
);
