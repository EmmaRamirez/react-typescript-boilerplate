import * as React from 'react';

import { Button } from 'components';

import './App.scss';

export class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className='app'>
                <Button>Hi</Button>
            </div>
        );
    }
}