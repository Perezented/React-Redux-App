import styled from 'styled-components';

export const Columns = styled('section')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 40%;
    margin: 1% 30%;
    div {
        margin: 5px;
    }
`;
export const MainSection = styled('div')`
    text-align: center;
`;
