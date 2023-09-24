'use client'
import Stack from '@mui/material/Stack';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'next/navigation'
import Button from '@mui/material/Button';
import styles from './stlying.module.css'

import Link from 'next/link';
export default function Details(){
    const clothes = [
        {id: 1,image: "image 1.jpg",title: "Regular fit slogan",price: "1,190"},
        {id: 2, image: "image 3.jpg",title: "Regular fit color black",price: "1,690"},
        {id: 3,image: "image 4.jpg",title: "Regular fit fit v-neck",price: "1,290",},
        { id: 4, image: "image 5.jpg",title: "Regular fit first", price: "1,790" },
        {id: 5,image: "image 6.jpg",title: "Regular fit second",price: "6,190",},
        {id: 6,image: "image 1.jpg",title: "Regular fit slogan",price: "1,190",},
        {id: 7,image: "image 2.jpg",title: "Regular fit polo",price: "1,100 -52%",},
        {id: 8,image: "image 2.jpg",title: "Regular fit polo",price: "1,100 -52%",},
      ];
    const params = useParams()
    const Current = clothes.find((obj) => obj.id == params.id);
      
    return<>
    <main style={{  maxHeight:"90vh",marginLeft:"5vw",marginRight:"6vw",marginTop:'2vh'}}>
    <Stack spacing={1.5}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Link href='/'> <KeyboardBackspaceIcon style={{height:'10vh',width:"10vw"}}/></Link>
        <h1>Details</h1>
        <NotificationsNoneIcon style={{height:'10vh',width:"10vw"}}/>
        </Stack>
        <img height={"320vh"} src={`../${Current.image}`}></img>
        <h2>{Current.title}</h2>
        <Stack alignItems={'center'} spacing={1} direction={'row'}><StarIcon style={{color:"#FFA928"}}/> 4.5/5 (45 reviews)</Stack>
        <p style={{color:"#8D7B7B"}}>The name says it all, the right size slightly snugs the body leaving enough room for comfort
        in the sleeves and waist</p>
        <p style={{fontSize:"2.5vh"}}>Choose size</p>
        <Stack className={styles.buttons} direction={'row'} spacing={2}>
            <button>S</button>
            <button>M</button>
            <button>L</button>
        </Stack>
        
        </Stack>
        <Stack style={{height:'12vh',marginTop:'5vh'}} justifyContent={'space-evenly'} direction={'row'} spacing={6}  alignItems={'center'}>
    <Stack  ><p style={{}}>Price</p>
    <p>INR {Current.price}</p>
    </Stack>
   <Link href={'/cart'}> <Button style={{backgroundColor:"black",color:'white',height:"8vh",width:"50vw"}}>Add to cart</Button></Link>
    
</Stack>
</main>

    </>
}