import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

interface CardProps {
  name: string;
  username: string;
  email: string;
  handleCard(): any;
  id: any;
}
const BasicCard: React.FC<CardProps> = ({ name, username, email, handleCard, id }): JSX.Element => {
  return (
    <div style={{ margin: "3px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="200" image="random.jpg" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="error"
            onClick={() => {
              // @ts-ignore
              handleCard(id);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BasicCard;
