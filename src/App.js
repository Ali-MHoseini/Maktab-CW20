import React, { useState, useRef, useEffect, createContext } from "react";
import "./App.css";
import useFetchAll from "./Hooks/useFetchAll";
import Product from "./Components/Product/Product";
import Form from "./Components/Form/Form";

function App() {
  const [newData, setNewData] = useState({ title: "", description: "" });
  const [isAdd, setIsAdd] = useState(false);
  const [deleteItemId,setDeleteItemId] = useState('')
  const [mainData, setMainData] = useState([]);
  const [editItemId,setEditItemId] = useState("")
  const [isEdit , setIsEdit] = useState(false)
  useFetchAll("https://63a3f3dc9704d18da099a375.mockapi.io/test", setMainData);




  useEffect(() => {
    let resopnseData;
    if (isAdd) {
      fetch("https://63a3f3dc9704d18da099a375.mockapi.io/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => (resopnseData = data))
        .then(() => setIsAdd(false))
        .then(() => setMainData([...mainData, resopnseData]))
        .then(() => setNewData({ title: "", description: "" }))
    }
  }, [isAdd]);

  useEffect(()=>{
      if(deleteItemId){
          fetch(`https://63a3f3dc9704d18da099a375.mockapi.io/test/${deleteItemId}`, {
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(newData),
          })
              .then((res) => res.json())
              .then(() => {
                  setMainData(mainData.filter(item=> item.id !==deleteItemId))
              });
      }
  },[deleteItemId])

    useEffect(()=>{
        if(isEdit){
            fetch(`https://63a3f3dc9704d18da099a375.mockapi.io/test/${editItemId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(() => {
                    setMainData(mainData.map(item =>{
                        if(item.id === editItemId){
                            return newData
                        }else{
                            return {...item}
                        }
                    }))
                }).then(() => setNewData({ title: "", description: "" }))
        }
    },[isEdit])


  const addToTitle = (value) => {
    setNewData({ ...newData, title: value });
  };
  const addToDescription = (value) => {
    setNewData({ ...newData, description: value });
  };
  const getId = (id) => {
      let newItemEdited = mainData.filter(item => item.id === id);
      setNewData({title: newItemEdited[0].title, description: newItemEdited[0].description})
      setEditItemId(id)
  }

  return (
    <div className="App">
      <div className="grid">
        {mainData &&
          mainData.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              description={item.description}
              DelFunc={()=>setDeleteItemId(item.id)}
              EditFunc={() => getId(item.id)}
            />
          ))}
      </div>
      <Form
        AddTitle={(e) => addToTitle(e.target.value)}
        AddDescription={(e) => addToDescription(e.target.value)}
        setData={() => setIsAdd(true)}
        value={newData}
        EditFuncItem={() => setIsEdit(true)}
      />
    </div>
  );
}

export default App;
