import './Product.css';
import Button from "../Button/Button";
const Product = ({title,description,DelFunc,EditFunc})=> {



    return (
        <div className='ProductBox'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='ButtonBox'>
                <Button name="Edit-Item" color="5BB1FB" pad="40" setData={EditFunc}/>
                <Button name="Delete" color="A1A6AC" pad="30" setData={DelFunc}/>
            </div>
        </div>
    )
}

export default Product;