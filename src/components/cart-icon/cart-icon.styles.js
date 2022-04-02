import styled from 'styled-components';
import { ReactComponent as ShoppingBagSvg } from '../../svgs/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingBagSvg)`
  width: 24px;
  height: 24px;
`;

export const Cart_Icon_Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Counter = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;  