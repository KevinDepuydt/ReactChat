import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    View,
    Dimensions
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default class chatInterface extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <ChatMessageLeft>
                        Hi! How are you ?
                    </ChatMessageLeft>
                    <ChatMessageRight>
                        Fine and you ?
                    </ChatMessageRight>
                    <ChatMessageLeft>
                        I'm fine, thank you.
                    </ChatMessageLeft>
                </ScrollView>
            </View>
        );
    }
}

class ChatMessageLeft extends Component {
    render() {
        return (
            <View style={[styles.chatOuter, styles.chatOuterLeft]}>
                <View style={{alignSelf: 'center', margin: 0, padding: 0}}>
                    <TriangleLeft />
                </View>
                <View style={styles.chatMessageContainer}>
                    <View style={[styles.chatMessageBox, styles.chatMessageBoxLeft]}>
                        <Text style={styles.messageText}>
                            {this.props.children}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

class ChatMessageRight extends Component {
    render() {
        return (
            <View style={[styles.chatOuter, styles.chatOuterRight]}>
                <View style={styles.chatMessageContainer}>
                    <View style={[styles.chatMessageBox, styles.chatMessageBoxRight]}>
                        <Text style={[styles.messageText, styles.colorWhite]}>
                            {this.props.children}
                        </Text>
                    </View>
                </View>
                <View style={{alignSelf: 'center', margin: 0, padding: 0}}>
                    <TriangleRight />
                </View>
            </View>
        )
    }
}

class Triangle extends Component {
    render() {
        return (
            <View style={[styles.triangle, this.props.style]} />
        )
    }
}

class TriangleLeft extends Component {
    render() {
        return (
            <Triangle style={styles.triangleLeft}/>
        )
    }
}

class TriangleRight extends Component {
    render() {
        return (
            <Triangle style={styles.triangleRight}/>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatMessageContainer: {
        flexWrap: 'wrap',
        width: deviceWidth - 15,
        padding: 0,
        margin: 0
    },
    chatMessageBox: {
        flexWrap: 'wrap',
        borderWidth: 0,
        margin: 0,
        padding: 10,
        borderRadius: 2
    },
    chatMessageBoxRight: {
        alignSelf: 'flex-end',
        backgroundColor: '#3498db',
        marginRight: -10,
    },
    chatMessageBoxLeft: {
        alignSelf: 'flex-start',
        backgroundColor: '#bdc3c7',
        marginLeft: -10,
    },
    chatOuter: {
        marginTop: 30,
        flexDirection: 'row',
    },
    chatOuterLeft: {
        justifyContent: 'flex-start',
    },
    chatOuterRight: {
        justifyContent: 'flex-end',
    },
    chatTriangle: {
        width: 20,
        height: 20,
        borderColor: '#000',
        borderWidth: 1
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 12,
        borderRightWidth: 12,
        borderBottomWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        marginTop: 40,
    },
    triangleLeft: {
        transform: [
            {rotate: '135deg'}
        ],
        marginLeft: 10,
        borderBottomColor: '#bdc3c7'
    },
    triangleRight: {
        transform: [
            {rotate: '-135deg'}
        ],
        marginRight: 10,
        borderBottomColor: '#3498db'
    },
    messageText: {
        fontSize: 22
    },
    backgroundBlue: {
        backgroundColor: '#3498db'
    },
    backgroundGray: {
        backgroundColor: '#bdc3c7'
    },
    colorBlue: {
        color: '#3498db'
    },
    colorWhite: {
        color: '#fff'
    }

});

