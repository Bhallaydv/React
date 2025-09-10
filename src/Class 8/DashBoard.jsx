import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DashBoard = () => {

    let [products, setGetProducts] = useState([]);
// Data fetch from api
//useEffect case2: It will run only on first render


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setGetProducts(data));
    }, [])
console.log(products);
// MAP FUNCTION EQUAL TO LOOP
    const cards = products.map((product) => (
        <div className='col-md-3'>
            <Card key={product.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title> {product.id}{product.title}</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    ))

console.log(products);


return (
    <div className='container'>
        <h1>Dashboard</h1>
        <div className="row">
            {cards}
        </div>

        {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> */}

    </div>
)
}

export default DashBoard;
