import Link from 'next/link';
import { menulinks } from './data';
import classses from './HeaderMenu.module.css';

function HeaderMenu() {
  return (
    <>
      <div className={classses.menu}>
        {menulinks.map((menuitem: any) => (
          <div key={menuitem.id} className={classses.item}>
            <Link className={classses.link} href={menuitem.href} scroll={false}>
              <span className={classses.link_text}>{menuitem.label}</span>
              <span className={classses.link_active}>{menuitem.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default HeaderMenu;
