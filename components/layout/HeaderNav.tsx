import styled from 'styled-components';
import Link from 'next/link';

const HeaderNav = () => {
  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <Link href="/">홈</Link>
          </Li>
          <Li>
            <Link href="/">나의 냉장고</Link>
          </Li>
          <Li>
            <Link href="/">로그인</Link>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};

export default HeaderNav;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

const Li = styled.li`
  width: max-content;
  border-radius: 15px;
  padding: 15px 20px;
  font-weight: 500;
  &:hover,
  &:hover > a {
    cursor: pointer;
    background-color: #f6f6f6;
  }
`;
