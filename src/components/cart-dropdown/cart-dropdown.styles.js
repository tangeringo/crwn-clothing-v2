import styled from 'styled-components';
import { 
  Base_Button_Styles, 
  Google_Btn_Styles, 
  Inverted_Btn_styles 
} from '../button/button.styles';

export const Cart_Dropdown_Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${Base_Button_Styles},
  ${Google_Btn_Styles},
  ${Inverted_Btn_styles} {
    margin-top: auto;
  }
`;

export const Empty_Message = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const Cart_Items = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;