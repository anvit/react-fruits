import './fruit.css';

const Fruit = (props) => {
    // Similar to calling
    // function test(event) {
    //     props.clickFunc(event);
    // }
    // OR
    // function(event) { props.clickFunc(event); }
    const fruit = (<li className="card" onClick={(event) => props.clickFunc(event) }>
        <div className="fruit-name">
            { props.emoji }
        </div>
        <div className="fruit-footer">
            <span className="fruit-qty">
                In stock: { props.qty }
            </span>
        </div>
    </li>);

    return fruit;
}

export default Fruit;