import Stack from '@mui/material/Stack';
import Image from 'next/image';

export default function Cloth({image,title,price}){
    return(
        <>
            <Stack spacing={0.3}>
                <Image alt='img' height={150} width={120} src={image}></Image>
                <h5>{title}</h5>
                <p style={{fontSize:"1.5vh",color:"#8D7B7B"}}>INR {price}</p>
            </Stack>
        </>
    )
}