import React from 'react';
import './fruitlist.css';
import Fruit from './Fruit';

class FruitList extends React.Component {
    render() {
        const fruitlist = (<ul className="fruitList">{
            this.props.fruits
                .filter(fruit => fruit.qty > 4)
                .map((fruit, i) => <Fruit key={fruit.key} emoji={fruit.emoji} qty={fruit.qty} />)
        }</ul>);

        return fruitlist;
    }
}

export default FruitList;
