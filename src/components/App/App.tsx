import * as React from 'react';

import './App.scss';

export class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className='app'>
                Hello
            </div>
        );
    }
}