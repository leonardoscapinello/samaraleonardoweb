import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Container, Content } from './styles';

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function WalletsCard() {
  return (
    <Container>
      <Content>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div className="item wallet">aaa</div>
          <div className="item wallet">aaa</div>
          <div className="item wallet">aaa</div>
          <div className="item wallet">aaa</div>
          <div className="item wallet">aaa</div>
          <div className="item wallet">aaa</div>
          <div className="item wallet">aaa</div>
        </OwlCarousel>
      </Content>
    </Container>
  );
}
