import React, { useState } from 'react';

import Menu from './Menu/Menu';

import './burger.scss';

function Burger() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    {
      value: 'Главная',
      href: './#',
      icon: (
        <img
          src="https://avatars.mds.yandex.net/i?id=32f59e3d0e3b3f9a4881547da79ce759d63810e4-9072236-images-thumbs&n=13"
          width="30"
          height="30"
          className="img-icon"
        />
      ),
    },
    {
      value: 'История MERCEDES',
      href: 'https://www.mercedes-benz.com/en/innovation/milestones/corporate-history/',
      icon: (
        <img
          src="https://w7.pngwing.com/pngs/876/49/png-transparent-mercedes-benz-hd-logo.png"
          width="30"
          height="30"
        />
      ),
    },
    {
      value: 'История AUDI',
      href: 'https://www.audi.com/en/company/history.html',
      icon: (
        <img
          src="https://1000logos.net/wp-content/uploads/2018/05/Symbol-Audi.jpg"
          width="50"
          height="30"
          className="img-icon"
        />
      ),
    },
    {
      value: 'История BMW',
      href: 'https://www.bmw.ru/ru/topics/fascination-bmw/BMW-name-meaning-and-history.html',
      icon: (
        <img
          src="https://avatars.mds.yandex.net/i?id=0931c2aa1d8b2d6124f25fdb9f981e80041c54fb-10354750-images-thumbs&n=13"
          width="50"
          height="30"
          className="img-icon"
        />
      ),
    },
    {
      value: '...еще что-нибудь...',
      href: '/example',
      icon: (
        <img
          src="https://i.ytimg.com/vi/zuf4iG3xD_8/hqdefault.jpg"
          width="50"
          height="30"
          className="img-icon"
        />
      ),
    },
  ];
  return (
    <div className="burger browser-default" onClick={() => setMenuActive(!menuActive)}>
      <nav className="nav browser-default">
        <div className="burger-btn browser-default">
          <span />
        </div>
      </nav>

      <Menu active={menuActive} setActive={setMenuActive} header={'Какое-то меню'} items={items} />
    </div>
  );
}

export default Burger;
