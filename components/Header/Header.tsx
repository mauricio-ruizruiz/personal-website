import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import classes from './Header.module.css';

function Header() {
  return (
    <>
      <div className={classes.header}>
        <HeaderLogo />
        <HeaderMenu />
      </div>
    </>
  );
}

export default Header;
