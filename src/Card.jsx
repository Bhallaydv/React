import './Card.css';
import {Head} from "./Head";


function Card({name, price ,variant, rating, features, features2})   {
    return (
        <div>
            <Head title={name} />
        <div className="box">
<h1>Product Name:{name}</h1>
<h1>Product Price:{price} </h1>
<h1>Product Variant:{variant}</h1>
<h1>Product Rating:{rating}</h1>
<h1>Specifications:{features}</h1>
<h1>Specifications 1:{features2}</h1>

        </div>
        </div>
    )
}
  export default Card;
    