import styled from 'styled-components';
import Colors from 'styles/colors';

export const Panel = styled.div`
    display: flex;

    span{
        font-size: 14px;
    }

    .appBar{
        background: ${Colors.primary}
    }

    .toolbar: {
        padding-right: 24px;
    }

    .title{
        flex-grow: 1;
    }
`;
