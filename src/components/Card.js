import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import riderocket from "./CSS/images/riderocket.PNG";
import OilJar from "./CSS/images/oiljar.JPG";
import RiceCrispy from "./CSS/images/RiceCrispy.JPG";
import RedVelvet from "./CSS/images/RedVelvet8oz.JPG";
import CupCake from "./CSS/images/CupCakesingle.JPG";
import GummyPacks from "./CSS/images/gummypack.jpeg";
import LemondPound from "./CSS/images/lemonpound.JPG";
import hearts from "./CSS/images/hearts.jpg";
import moonguy from "./CSS/images/cake.PNG";
import soldout from "./CSS/images/SoldOut.PNG";
import "./CSS/Card.css";
import Form from "./Form";
import { createTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [oz, setOz] = React.useState("");
  const [fat, setFat] = React.useState("");
  const [potency, setPotency] = React.useState("");
  const [flavor, setFlavor] = React.useState("");
  const [pack, setPack] = React.useState("");
  const [pack2, setPack2] = React.useState("");
  const [cart, setCart] = React.useState([]);

  const inventory = [
    "Gummies",
    "RedVelvet",
    "Cupcake",
    "Ricecrispy",
    "Lemoncake",
    "Oil",
  ];

  const handleChange = (event) => {
    setOz(event.target.value);
  };
  const handleChange1 = (event) => {
    setPotency(event.target.value);
  };
  const handleChange2 = (event) => {
    setFat(event.target.value);
  };
  const handleChange0 = (event) => {
    setFlavor(event.target.value);
  };
  const handleChange3 = (event) => {
    setPack(event.target.value);
  };
  const handleChange4 = (event) => {
    setPack2(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "20px",
          },
        },
      },
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* CUPCAKE  */}
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#FF6D28",
          color: "white",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={moonguy} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="3"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(
                    cart +
                      flavor +
                      " " +
                      pack2 +
                      " " +
                      inventory[2] +
                      " " +
                      " |"
                  );
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Vanilla Cupcake"
          subheader="$7.00. 4 for $20.00."
        />
        <CardMedia
          component="img"
          height="194"
          image={CupCake}
          alt="cup cake "
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="#FAF3E3"
          >
            An amazing light and fluffy cupcake with great flavor and a great
            kick. The spondge is moist and delicious. Choose a frosting flavor.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Flavor
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={flavor}
              onChange={handleChange0}
              autoWidth
              label="flavor"
            >
              <MenuItem value={"CreamCheese"}>Cream Cheese</MenuItem>
              <MenuItem value={"Vanilla"}>Vanilla</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              4 Pack?
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={pack2}
              onChange={handleChange4}
              autoWidth
              label="4 pack"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"4 pack"}>Yes</MenuItem>
            </Select>
          </FormControl>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              No lactose in cake. Made with infused Ghee.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#FF6D28",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={hearts} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="2"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[1] + " " + " |");
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Red Velvet Cake Jar"
          subheader="$12.00."
        />
        <CardMedia
          component="img"
          height="194"
          image={RedVelvet}
          alt="red velvet"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="FAF3E3"
          >
            This delicious Red Velet with cream cheese Cake Jar will carry you
            to the moon on a cloud of great taste. Great for a few bites to feel
            the effects and store away for a snack later.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Contains dairy (buttermilk). Cocoa powder. Made with infused Ghee.
            </Typography>
            <Typography paragraph>
              Eat a few bites and store in the fridge for later. The Cream
              Cheese and Red Velvet are both infused.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      {/* RICE CRISPY  */}
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#FF6D28",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={moonguy} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="4"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + pack + " " + inventory[3] + " |");
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Fruity Pebbles Rice Crispy"
          subheader="$5.00. 4 for $15.00."
          style={{ color: "white" }}
        />
        <CardMedia
          component="img"
          height="194"
          image={RiceCrispy}
          alt="rice crispy"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="#FAF3E3"
          >
            Creamy, sticky, gooey, and crunchy marshmallow fluff with a sweet
            sugary taste. A nice thick snack for those that love rice crispies.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              4 Pack?
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={pack}
              onChange={handleChange3}
              autoWidth
              label="4 pack"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"4 pack"}>Yes</MenuItem>
            </Select>
          </FormControl>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Made with fruity pebbles, marshmallows and with browned Ghee.
              Contains no milk.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      {/* LEMON POUND  */}
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          backgroundColor: "#FF6D28",
          color: "#FAF3E3",
          border: "3px solid #F2F2F2",
          boxShadow: "5px 5px 5px black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={hearts} style={{ width: "110%" }} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <button
                id="5"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5%",
                  color: "FAF3E3",
                }}
                onClick={() => {
                  setCart(cart + " " + inventory[4] + " |");
                  toast("Added to Order", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}
              >
                Request
              </button>
            </IconButton>
          }
          title="Lemon Pound Cake Slice"
          subheader="$8.00. "
        />
        <CardMedia
          component="img"
          height="194"
          image={LemondPound}
          alt="Lemon Pound Cake"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px" }}
            variant="body2"
            color="#FAF3E3"
          >
            Soft and fluffy, lemon zest and lemon juice are added to the cake
            batter, which lightly perfume the cake with lemon. Then, after
            baking, the cake is drizzled with a sweet vanilla glaze, so you get
            a pop of intense flavor in every bite.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Made with Ghee. Icing contains non lactose milk.
            </Typography>
            <Typography paragraph>
              This lemon pound cake is the ultimate dessert for lemon lovers
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <br />

      <Form cart={cart} />
      <img src={riderocket} />
    </div>
  );
}
