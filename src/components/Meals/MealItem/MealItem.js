import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({meal}) => {
  const { name, description, price } = meal;
  return(
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>
          {description}
        </p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <div>
        <MealItemForm/>
      </div>
    </li>
  );
}

export default MealItem;