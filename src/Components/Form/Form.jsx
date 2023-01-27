import React , {useState} from "react";
import "./Form.css";
import Button from "../Button/Button";

function Form ({AddDescription,AddTitle,setData}) {


    return(
       <>
          <div className="fo-container">
              <h1 className="fo-title">Edit/Add</h1>
              <form>
                  <lable>Title</lable>
              <input type="text" onChange={AddTitle} className="fo-input"/>
                  <label>Description</label>
              <input type="text" onChange={AddDescription} className="fo-input p2"/>
              </form>
              <Button name="Edit-Item" color="5BB1FB" pad="40" />
              <Button name="Add" color="A1A6AC" pad="30" setData={setData}/>
          </div>
       </>
    )
}

export default Form;