import React, {useState, useRef, useEffect, createContext} from "react";
import './App.css';
import useFetchAll from "./Hooks/useFetchAll";
import Product from "./Components/Product/Product";
import Form from "./Components/Form/Form";
import useAddNew from "./Hooks/useAddNew";



function App() {
    const allCards = createContext()
    const [newData,setNewData] = useState({title:"",description:""})
    const [isAdd,setIsAdd] = useState(false)
    const [data] = useFetchAll("https://63a3f3dc9704d18da099a375.mockapi.io/test");
    const [mainData,setMainData] = useState([])



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
                .then(()=>setMainData([]))
        }
    },[isAdd])

    const addToTitle = (value)=> {
        setNewData({...newData,title: value});
    }
    const addToDescription = (value)=> {
        setNewData({...newData,description: value})
    }

  return (
      <allCards.Provider value={{mainData}}>
      <div className='App'>
          <div className='grid'>
              {
                  mainData && mainData.map(item=> (
                      <Product
                          key={item.id}
                          title={item.title}
                          description={item.description}
                      />
                  ))
              }
          </div>
          <Form
              AddTitle={(e)=>addToTitle(e.target.value)}
              AddDescription={(e)=>addToDescription(e.target.value)}
              setData={()=>setIsAdd(true)}
          />
      </div>
      </allCards.Provider>
  )

}

export default App;
