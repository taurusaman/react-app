import { Fragment } from "react";

function ListGroup(){
    return /*(
    <Fragment>
        <h1>List Hai ye sare</h1>
        <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
          </ul>
    </Fragment>
    );*/

    const items = ["New York", "San Francisco", "Tokyo", "London"]

    return(
        <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map((item)=>(
                <li key ={item}>{item}</li>
            ))}
            </ul>
        </>
    );
}

export default ListGroup;