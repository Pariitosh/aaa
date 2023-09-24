'use client'
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import img1 from '../../public/image 1.jpg'
import img2 from '../../public/image 2.jpg'
import img3 from '../../public/image 3.jpg'

import useStore from '../store.js';
import Image from 'next/image';
export default function CartCloth({image,title,price,quantity}){
    const { counter, increment1,increment2,increment3,decreament1,decreament2,decreament3 } = useStore();
    const [q,setq]=useState(quantity)
    const add=()=>{
        console.log("add")
        setq(q+1)
        if (image===img1) increment1()
        if (image===img2) increment2()
        if (image===img3) increment3()
    }
    const remove=()=>{
        if (q!==0){
        setq(q-1)
        if (image===img1) decreament1()
        if (image===img2) decreament2()
        if (image===img3) decreament3()
        }
    }
    const [hide,sethide]=useState(true)
    if (!hide){
        return <>

        </>
    }
    else{
    return(
         <Stack direction={'row'} spacing={5} justifyContent={'center'} alignItems={'flex-start'}>
            <Image alt='img' style={{border:"1px solid #8D7B7B",borderRadius:'10px'}} height={80} width={70} src={image} ></Image>
            <Stack direction={'column'} spacing={2} justifyContent={'space-around'} alignContent={'flex-start'}>
            <Stack alignItems={'flex-start'}><h4 style={{fontWeight:"100"}}>{title}</h4>
            <p style={{color:"#8D7B7B"}}>Size L</p>
            </Stack>
            <p>INR {price}</p>
            </Stack>
        <Stack spacing={3} justifyContent={'space-between'} alignItems={'flex-end'} direction={'column'}>
            <DeleteIcon onClick={()=>sethide(false)}  style={{color:"#F60000", cursor:"pointer"}}/>
            <Stack direction={'row'} spacing={1}>
                <button onClick={remove } style={{width:'5vw',cursor:"pointer"}}>-</button>
                <p>{q}</p>
                <button onClick={add} style={{width:'5vw',cursor:"pointer"}}>+</button>
            </Stack>
        </Stack>
        </Stack>
    )
    }
}