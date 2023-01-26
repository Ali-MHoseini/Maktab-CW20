import React, { useState, useRef, useEffect } from "react";
import './App.css';
import useFetchAll from "./Hooks/useFetchAll";
import Product from "./Components/Product/Product";
import Form from "./Components/Form/Form";



function App() {
    const [data] = useFetchAll("https://63a3f3dc9704d18da099a375.mockapi.io/test");
  return (
      <div className='App'>
          <div className='grid'>
              {
                  data && data.map(item=> (
                      <Product
                          key={item.id}
                          title={item.title}
                          description={item.description}
                      />
                  ))
              }
          </div>
          <Form />
      </div>
  )

}

export default App;
