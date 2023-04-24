import styled from 'styled-components';

export const Checkout_Item_Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Checkout_Price = styled.div`
  margin-left: 115px;
`;

export const Quantity = styled.span`
  display: flex;
  margin-left: 55px;

  .arrow {
    margin: -3px 10px;
    cursor: pointer;
  }

  .value {
    margin: 0px 10px;
  }
`;

export const Remove_Button = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-left: 155px;
`;  