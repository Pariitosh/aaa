import Image from "next/image";
import styles from "./page.module.css";
import { Stack } from "@mui/material";
import img1 from '../public/image 1.jpg'
import img2 from '../public/image 2.jpg'
import img3 from '../public/image 3.jpg'
import img4 from '../public/image 4.jpg'
import img5 from '../public/image 5.jpg'
import img6 from '../public/image 6.jpg'
import img7 from '../public/image 1.jpg'
import img8 from '../public/image 2.jpg'

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TextField from "@mui/material/TextField";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Cloth from "./components/Cloth";
import Link from "next/link";

export default function Home() {
  const clothes = [
    {
      id: 1,
      image: img1,
      title: "Regular fit slogan",
      price: "1,190",
    },
    {
      id: 2,
      image: img2,
      title: "Regular fit color black",
      price: "1,690",
    },
    {
      id: 3,
      image: img3,
      title: "Regular fit fit v-neck",
      price: "1,290",
    },
    { id: 4, image: img4, title: "Regular fit first", price: "1,790" },
    {
      id: 5,
      image: img5,
      title: "Regular fit second",
      price: "6,190",
    },
    {
      id: 6,
      image: img6,
      title: "Regular fit slogan",
      price: "1,190",
    },
    {
      id: 7,
      image: img7,
      title: "Regular fit polo",
      price: "1,100 -52%",
    },
    {
      id: 8,
      image: img8,
      title: "Regular fit polo",
      price: "1,100 -52%",
    },
  ];
  return (
    <>
      <main style={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "6vh" }}>
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <h1>Discover</h1>
            <NotificationsNoneIcon />
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <TextField
              size="small"
              variant="outlined"
              fullWidth
              label={`Search`}
            />
            <Button
              style={{ backgroundColor: "black", width: "15vw", height: "6vh" }}
              color="primary"
              variant="contained"
            >
              <FilterListIcon />
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Button
              style={{ backgroundColor: "black", borderRadius: "10px" }}
              variant="contained"
            >
              All
            </Button>
            <Button
              style={{ backgroundColor: "black", borderRadius: "10px" }}
              variant="contained"
            >
              Men
            </Button>
            <Button
              style={{ backgroundColor: "black", borderRadius: "10px" }}
              variant="contained"
            >
              Women
            </Button>
            <Button
              style={{ backgroundColor: "black", borderRadius: "10px" }}
              variant="contained"
            >
              Kids
            </Button>
          </Stack>
          <Stack
            direction={"row"}
            gap={2}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            {clothes.map((cloth) => (
            <Link key={cloth.image} style={{textDecoration:"none",color:"black"}} href={`/details/${cloth.id}`}>  <Cloth
                image={cloth.image}
                title={cloth.title}
                price={cloth.price}
                key={cloth.image}
              /></Link>
            ))}
          </Stack>
          <div
            style={{
              borderTop: "1px solid grey",
              position: "fixed",
              bottom: "0",
            }}
          >
            <BottomNavigation style={{ backgroundColor: "white" }} showLabels>
              <BottomNavigationAction label="Home" icon={<HomeIcon />} />
              <BottomNavigationAction
                label="Saved"
                icon={<FavoriteBorderIcon />}
              />
              <BottomNavigationAction
                label="Cart"
                icon={<ShoppingBasketIcon />}
              />
              <BottomNavigationAction
                label="Settings"
                icon={<SettingsIcon />}
              />
            </BottomNavigation>
          </div>
        </Stack>
      </main>
    </>
  );
}
