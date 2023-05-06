import styles from './Header.module.css';
import heroImage from '../../assets/meals-image.jpeg';

import HeaderCartButton from '../Cart/HeaderCartButton';

const Header = () => {
  return(
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
        
      </header>
      <div className={styles['main-image']}>
        <img 
          src={heroImage} alt='Foods'/>
      </div>
    </>
  );
}

export default Header;