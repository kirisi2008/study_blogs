
import React from 'react';

import { Provider } from 'react-redux';


export const wrapComponent = (Compnent: any, store: any) => {
    class Wrapped extends React.Component {
        public render() {
            return (
                <Provider store={store}>
                    <Compnent {...this.props} />
                </Provider>
            )
        }
    }
    return Wrapped
}