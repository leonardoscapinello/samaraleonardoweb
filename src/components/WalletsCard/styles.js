import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  margin-top: -120px;
  display: flex;
  margin-left: 80px;

  width: (100% - 200px);
  overflow: hidden;
  overflow-x: auto;
`;

export const Content = styled.div`
  border-radius: 10px;
  flex: 0 0 100%;
  .wallets {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    .wallet {
      margin-right: 20px;
      flex: 1 1 auto;
      width: 350px;
      height: 200px;
      background: #2d2d2d;
      :first-child {
        zoom: 1.1;
      }
    }
  }
`;

export const Profile = styled.div``;
