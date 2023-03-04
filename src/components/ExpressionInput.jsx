import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import React,{useState} from "react";


export const ExpressionInput = ({ handleSubmit }) => {
  const [expression, setExpression] = useState("");
  let captureText = (input)=>{
    setExpression(expression+input);
  }
  return (
    <Card>
      <CardContent>
        <TextField value={expression}  fullWidth={true} onKeyPress={(e)=>{captureText(e.key)}} label="Expression" variant="outlined" />
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            handleSubmit(
            /** @TODO: Add your implementation here */
            expression
          )
          setExpression("");
          }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};
