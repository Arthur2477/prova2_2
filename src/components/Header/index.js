import React from 'react'
import {
   View,
   StyleSheet,
   Text,
   StatusBar,
   TouchableOpacity 
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather';

import { MotiView, MotiText } from 'moti';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}){
    return(
        <View style={styles.container}>
            <MotiView 
            style={styles.content}
            from={{
                translateY: -150,
                opacity: 0, 
            }}
            animate={{
                translateY: 0,
                opacity: 1,
            }}
            transition={{
                type:'timing',
                duration: 800,
                delay: 300,
            }}
            >
                <MotiText 
                style={styles.username}
                from={{
                    translateX: -300,
                }}
                animate={{
                    translateX: 0,
                }}
                transition={{
                    type:'timing',
                    duration: 800,
                    delay: 800,
                }}
                >
                    {name}
                    </MotiText>

                <TouchableOpacity activeOpacity={1.5} style={styles.buttonUser}>
                    <Feather name ="user" size={23} color="#fff"/>
                </TouchableOpacity>
            </MotiView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: '3%',
        paddingEnd: '3%',
        paddingBottom: '2%',
        
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: '20',
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 14,
        marginBottom: 50,
        margin: 14
    },
    buttonUser:{
       width: 44,
       height: 44,
       backgroundColor: 'rgba(255, 255, 255, 0.5)',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 44/2,
       marginLeft: 14,
       marginBottom: 50,
       margin: 14
    }
})