import styled from 'styled-components';
import Colors from 'styles/colors';

export const Paper = styled.div`
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar{
        margin: 8px;
        background-color: ${Colors.primary};
    }

    h1{
        color: ${Colors.secundary};
    }

    form{
        width: '100%';
        margin-top: 16px;
    }

    .submit{
        margin: 24px 0 15px;
        background: ${Colors.primary};
    }
`;
