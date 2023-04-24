import styled from 'styled-components';

export const Category_Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 15px;
    row-gap: 50px;
`;

export const Category_Title = styled.h2`
    font-size: 30px;
    margin-bottom: 25px;
    text-align: center;
`;