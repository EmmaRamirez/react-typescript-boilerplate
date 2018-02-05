import * as React from 'react';
import styled from 'styled-components';

export class Button extends React.Component {
    public render() {
        return <button>{this.props.children}</button>;
    }
}

// export const Button = styled.button`
//     background: #fafafa;
//     border: 1px solid #ccc;
//     border-radius: .25rem;
//     color: #333;
//     padding: .25rem;
// `;