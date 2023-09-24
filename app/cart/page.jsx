'use client'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CartCloth from '../components/CartCloth';
import img1 from '../../public/image 1.jpg'
import img2 from '../../public/image 2.jpg'
import img3 from '../../public/image 3.jpg'
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from 'next/link';
import useStore from '../store';
export default function Cart(){
    const { counter, increment } = useStore();
    
    const clothes=[{image:img1,title:"Regular fit slogan",price:"1,190", quantity:2 },
    {image:img2,title:"Regular fit v-polo",price:"1,110", quantity:2 },
    {image:img3,title:"Regular fit v-neck",price:"1,290", quantity:1 }]
return(
    <>
   
    <main style={{height:"90vh",marginLeft:"5vw",marginRight:"6vw",marginTop:'2vh'}}>
        <Stack spacing={3}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        
        <Link href='/details/1'><KeyboardBackspaceIcon style={{height:'10vh',width:"10vw"}}/></Link>
        <h1>My Cart</h1>
        <NotificationsNoneIcon style={{height:'10vh',width:"10vw"}}/>
        </Stack>
        {clothes.map((cloth)=><CartCloth key={cloth.price} image={cloth.image} title={cloth.title} price={cloth.price} quantity={cloth.quantity} />)}
        
</Stack>
<p style={{marginLeft:'5vw',marginTop:'6vh',color:"#8D7B7B"}}>Add a voucher</p>
<Stack style={{marginTop:'5vh'}} justifyContent={'space-between'} direction={'row'} >
    <Stack style={{color:"#8D7B7B"}} spacing={2}>
    <h3>Sub-total</h3>
    <h3>VAT (%)</h3>
    <h3>Shipping fee</h3></Stack>
    <Stack alignItems={'flex-end'} spacing={2}><h3>INR {counter}</h3><h3>INR 0.00</h3><h3>INR 80</h3></Stack>

</Stack>
<Stack style={{marginTop:"5vh"}} spacing={3}>
      <Divider variant="middle" />
      <Stack direction={'row'} justifyContent={'space-between'}><h3>Total </h3><h3>INR {counter+80}</h3></Stack>
      <Divider variant="middle" />

      <Button variant='contained' style={{backgroundColor:"black"}}>Checkout</Button>
      </Stack>
</main>

</>
)
}