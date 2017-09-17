import React from 'react';
import {TouchableOpacity} from 'react-native';

export default class Touchable extends React.Component {
    static defaultProps = {
        opacity: 0.7
    };

    render() {
        const {opacity, children} = this.props;

        return (
            <TouchableOpacity {...this.props} activeOpacity={opacity}>
                {children}
            </TouchableOpacity>
        );
    }
}
