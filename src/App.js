import React, {useState, useRef, useEffect, createContext} from "react";
import './App.css';
import useFetchAll from "./Hooks/useFetchAll";
import Product from "./Components/Product/Product";
import Form from "./Components/Form/Form";



function App() {
    const [newData,setNewData] = useState({title:"",description:""})
    const [deleteItem,setDeleteItem] = useState("")
    const [isAdd,setIsAdd] = useState(false)
    const [data] = useFetchAll("https://63a3f3dc9704d18da099a375.mockapi.io/test");

    useEffect(()=> {
        if(isAdd){
            fetch('https://63a3f3dc9704d18da099a375.mockapi.io/test', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(newData),
            })
                .then(()=>setIsAdd(false))
        }
    },[isAdd,newData])


    useEffect(()=>{
        if(deleteItem){
            console.log(deleteItem)
            fetch(`https://63a3f3dc9704d18da099a375.mockapi.io/test/${deleteItem}`, {
                method: "DELETE",
            })
                .then(()=>console.log("true"))
        }
    },[deleteItem])

    const addToTitle = (value)=> {
        setNewData({...newData,title: value});
    }
    const addToDescription = (value)=> {
        setNewData({...newData,description: value})
    }

  return (
      <div className='App'>
          <div className='grid'>
              {
                  data && data.map(item=> (
                      <Product
                          key={item.id}
                          title={item.title}
                          description={item.description}
                          DelFunc = {()=>setDeleteItem(item.id)}
                      />
                  ))
              }
          </div>
          <Form
              AddTitle={(e)=>addToTitle(e.target.value)}
              AddDescription={(e)=>addToDescription(e.target.value)}
              setData={()=>{
                  setIsAdd(true)
                  setNewData({title: newData.title,description: newData.description})
              }}
          />
      </div>
  )

}

export default App;
