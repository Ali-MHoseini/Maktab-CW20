import './Product.css';
const Product = ({title,description,DelFunc,EditFunc})=> {
    return (
        <div className='ProductBox'>
            <h2>first</h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <div className='ButtonBox'>
                <button>This Button</button>
                <button>This Button</button>
            </div>
        </div>
    )
}

export default Product;