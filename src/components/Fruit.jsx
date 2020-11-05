import React from 'react';
import './fruit.css';

class Fruit extends React.Component {
    render() {
        const fruit = (<li className="card" >
            <div className="fruit-name">
                { this.props.emoji }
            </div>
            <div className="fruit-footer">
                <span className="fruit-qty">
                    In stock: { this.props.qty }
                </span>
            </div>
        </li>);

        return fruit;
    }
}

export default Fruit;
