import HeaderMenu from './HeaderMenu/HeaderMenu';
import classes from './Header.module.css';

function Header() {
  return (
    <>
      <div className={classes.header}>
        <div style={{ backgroundColor: '#444', height: '2em', width: '2em' }}></div>
        <HeaderMenu />
      </div>
    </>
  );
}

export default Header;
