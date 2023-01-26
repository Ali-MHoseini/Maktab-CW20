import React , {useState} from "react";
import "./Form.css";
import Button from "../Button/Button";

function Form () {

    const titleChangeHandler = (e) => {
        console.log(e)
    }

    const descriptionChangeHandler = (e) => {
        console.log(e)
    }

    return(
       <>
          <div className="fo-container">
              <h1 className="fo-title">Edit/Add</h1>
              <form>
                  <lable>Title</lable>
              <input type="text" onChange={(e) => titleChangeHandler(e.target.value)} className="fo-input"/>
                  <label>Description</label>
              <input type="text" onChange={(e) => descriptionChangeHandler(e.target.value)} className="fo-input p2"/>
              </form>
              <Button name="Edit-Item" color="5BB1FB" pad="40" />
              <Button name="Add" color="A1A6AC" pad="30" />
          </div>
       </>
    )
}

export default Form;