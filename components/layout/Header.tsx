import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    //document.documentElement.scrolltop => for IE
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll); //scroll마다 useEffect 실행
    return () => {
      window.removeEventListener('scroll', updateScroll); //unmount시 해제되도록
    };
  }, []);

  return (
    <>
      <HeaderWrapper
        style={{
          backgroundColor:
            scrollPosition < 50 ? 'transparent' : 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <LogoWrapper>
          <Link href="/">
            <h1>ProjectName</h1>
          </Link>
        </LogoWrapper>
        <NavWrapper>
          <HeaderNav />
        </NavWrapper>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  z-index: 1000;
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-basis: 25%;
  justify-content: center;
  font-size: 2rem;
  & > h1:hover {
    cursor: pointer;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  flex-basis: 25%;
  font-size: 0.875rem;
`;
export default Header;
