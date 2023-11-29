import React from 'react'
import {View,StyleSheet,Text,StatusBar,TouchableOpacity , Image} from 'react-native'
import { Menu } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Login from '../../pages/Login';
import { MotiView, MotiText } from 'moti';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({navigation,name}){


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
                
                <View activeOpacity={1.5} style={styles.buttonUser}>
                    <Image source={require('../../../assets/nubank-1.png')} style={styles.logo} />
                </View>
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
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 44/2,
       marginLeft: 14,
       marginBottom: 50,
       margin: 14
    },
    logo:{
        width: 80,
        right: 80,
        height: 80,
        marginLeft: 130
    }
})