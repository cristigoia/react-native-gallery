import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    // Destructuring
    const { textStyle, viewStyle } = styles;

    // We can make 'Header" component reusable by adding props
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Creating custom styles for 'Header' component
const styles = {
    viewStyle: {
        backgroundColor: '#307fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    testStyle: {
        fontSize: 30
    }
};

export default Header;
