import styled from 'styled-components';
import { BG_Image_Props } from '../directory-item/directory-item.styles';
    

export const Image = styled.div<BG_Image_Props>`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`}
`;


export const Footer_Describtion = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;


  export const Product_Card_Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10x;
    }
  }

  &:hover {
    ${Image} {
      opacity: 0.7;
    }

    button {
      opacity: 0.85;
      display: flex;
    }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      ${Image} {
        opacity: unset;
      }
  
      button {
        opacity: unset;
      }
    }
  }
`;
  