import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  flex-basis: 15.625rem;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 20px;
  .branding.small {
    width: 40px;
    height: 40px;
    border-radius: 55px;
  }

  ul.navigation {
    margin-top: 30px;
    li {
      display: block;
      margin-bottom: 5px;
      a {
        color: #8f919e;
        display: block;
        font-size: 1.021rem;
        padding: 10px 0;
        font-weight: 700;
        i {
          font-size: 1.32rem;
        }
        :hover {
          color: #353ede;
        }
      }
    }
  }
`;

export const Content = styled.div``;

export const Profile = styled.div``;
