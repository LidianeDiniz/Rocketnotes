import styled  from "styled-components";

export const Container = styled.section`
margin:28px 0;

>h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme })=> theme.COLORS.BACKGROUD_700};

    padding-bottom: 16PX;
    margin-bottom: 24PX;

    color: ${({ theme})=> theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
}

`;