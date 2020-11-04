import './fruitlist.css';
import Fruit from './Fruit';

const FruitList = (props) => {
    const iWasClicked = (e) => {
        console.log('Hey!', e);
    }

    const fruitlist = (<ul className="fruitList">{
        props.fruits
            .filter(fruit => fruit.qty > 4)
            .map(fruit => <Fruit key={fruit.key} emoji={fruit.emoji} qty={fruit.qty} clickFunc={iWasClicked} />)
    }</ul>);

    return fruitlist;
}

export default FruitList;
