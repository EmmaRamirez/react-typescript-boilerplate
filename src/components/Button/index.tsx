import * as React from 'react';

export class Button extends React.Component {
    public render() {
        return <button>{this.props.children}</button>;
    }
}