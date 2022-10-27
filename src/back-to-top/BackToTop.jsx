import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RiArrowUpSLine } from 'react-icons/ri';

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;
  align-items: center;
  height: 32px;
  width: 32px;
  justify-content: center;
  z-index: 2;
  cursor: pointer;
  animation: fadeIn 0.3s;
  background: linear-gradient(65deg, rgb(17, 236, 229) 30%, rgb(17, 236, 229) 114%);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  opacity: 0.8;
  transition: opacity 0.4s;
  display: ${({ isScrollButtonVisible }) =>
  isScrollButtonVisible ? 'flex' : 'none'};
  color: rgb(15, 23, 36);
  font-size: 26px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);

  &:hover {
    transform: translate(0,-5px);
    transition: all 0.17s ease-in-out;
    opacity:1;
  };
  @media screen and (max-width: 850px) {
  display: none;
  };
  @media screen and (min-width: 670px) and (max-width: 650px) {
  display: none;
  };
  @media screen and (max-width: 1250px){
  display: none;
  };
`;

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 1) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 1) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' , transistion: '0.3s' });
  };

  return (
    <div>
      {/*<div className="Home_Download">
           <button>Tải ứng dụng</button>
      </div>*/}
      <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
        <RiArrowUpSLine />
      </ButtonContainer>
    </div>
  );
};

export default BackToTop;