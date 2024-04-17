import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }
  return (
    <S.MobileMenu>
      <S.BurgerButton aria-label="open menu" isOpen={menuIsOpen} onClick={onBurgerBtnClick} />
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => { setMenuIsOpen(false) }}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};


