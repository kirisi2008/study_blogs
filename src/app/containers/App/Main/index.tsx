
import React from 'react';
import GoldenLayout from 'golden-layout';
import { App as TodoList } from '../TodoApp';
import { wrapComponent } from 'app/components/parts/WrappedComponent';

class GoldenLayoutWrapper extends React.Component {
    private layout!: any;

    public componentDidMount() {
        // Build basic golden-layout config
        const config = {
            content: [{
                type: 'row',
                content: [{
                    type: 'react-component',
                    component: 'TodoList'
                }, {
                    type: 'react-component',
                    component: 'TodoList'
                }, {
                    type: 'react-component',
                    component: 'TodoList'
                }]
            }]
        };


        const layout = new GoldenLayout(config, this.layout);
        layout.registerComponent('TodoList',
            wrapComponent(TodoList, this.context.store)
        );
        layout.init();

        window.addEventListener('resize', () => {
            layout.updateSize();
        });
    }

    public render() {
        return (
            <div className='goldenLayout' ref={input => this.layout = input} />
        );
    }
}

// // ContextTypes must be defined in order to pass the redux store to exist in
// // "this.context". The redux store is given to GoldenLayoutWrapper from its
// // surrounding <Provider> in index.jsx.
// GoldenLayoutWrapper.contextTypes = {
//     store: React.PropTypes.object.isRequired
// };


export default GoldenLayoutWrapper;