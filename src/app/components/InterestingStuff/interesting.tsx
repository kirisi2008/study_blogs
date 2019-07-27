import * as React from 'react';
import "./penguin.css";

export class Penguin extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="penguin">
                <div className="penguin-bottom">
                    <div className="right-hand"/>
                    <div className="left-hand"/>
                    <div className="right-feet"/>
                    <div className="left-feet"/>
                </div>
                <div className="penguin-top">
                    <div className="right-cheek"/>
                    <div className="left-cheek"/>
                    <div className="belly"/>
                    <div className="right-eye">
                        <div className="sparkle"/>
                    </div>
                    <div className="left-eye">
                        <div className="sparkle"/>
                    </div>
                    <div className="blush-right"/>
                    <div className="blush-left"/>
                    <div className="beak-top"/>
                    <div className="beak-bottom"/>
                </div>
            </div>
        )
    }
}
