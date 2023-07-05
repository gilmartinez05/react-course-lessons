import { useCallback, useEffect, useState } from 'react'
export default function ListItems({listSize,getListItems}) {
    const [items, setItems] = useState([])


    useEffect(()=>{
       
        setItems(getListItems())
    },[getListItems])

    return (
        <>
          {items.map((item, index) => <p key={index}>{item}</p>)}  
        </>
    )
}
