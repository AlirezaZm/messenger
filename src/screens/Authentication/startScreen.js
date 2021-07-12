import React from 'react'

import {StyleSheet,View,Image,Text,Dimensions,Animated} from 'react-native'
import {TapGestureHandler} from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

import Login from '../../components/authentication/login'
import Register from '../../components/authentication/register'
import Alert from '../../components/alert/alert'

const { width, height } = Dimensions.get('window');
const ANIMATIONTIMING = 2000

export default function startScreen(){
   const [toggled , setToggled] = React.useState(false)
   const [toggleButt , setToggleButt] = React.useState()
   let fadeAnim = React.useRef(new Animated.Value(toggled ?0 :1)).current  // Initial value for opacity: 0
    const onPress= (action) => {
        Animated.timing(
            fadeAnim,
            {
              toValue: 0,
              duration: ANIMATIONTIMING,
              useNativeDriver: false
            }
          ).start();
          setToggled(true)
          
          if (action === '0') {
            setToggleButt(true)
          }else{
            setToggleButt(false)
          }
        }

       


        const onClose = () => {
            Animated.timing(
                fadeAnim,
                {
                  toValue: toggled  ?0  :1,
                  duration: ANIMATIONTIMING,
                  useNativeDriver: false
                }
              ).start();
           setToggled(false)
        }

    const buttonY = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: 'clamp',
    })

    const bgY = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-height/3 , 0],
        extrapolate: 'clamp',
    })

    const textInputOpacity = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1,0],
        extrapolate: 'clamp',
    })

    const textInputY = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0 ,100],
        extrapolate: 'clamp',
    })

    const contentZIndex =  fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1 , -1],
        extrapolate: 'clamp',
    })

     const closeButtonRotate = fadeAnim.interpolate({
        inputRange:[0,1],
        outputRange: ['180deg' , '360deg'],
        extrapolate: 'clamp',
      });
   
    return (
        <View style={{ flex: 1,backgroundColor: 'white', justifyContent: 'flex-end'}}>
            
            
            <View  style={styles.alertContainer}>
                <Alert />
            </View>


            <Animated.View style={{ ...StyleSheet.absoluteFill, transform:[{translateY:bgY}] }}>
                <Image source={require('../../assets/images/bg.jpg')}  style={styles.bgImage} />
            </Animated.View>

            <View  style={{ height: height / 3, justifyContent: 'center',alignItems: 'center'}}>
                <TapGestureHandler onHandlerStateChange={() => onPress('0')}>
                    <Animated.View style={[styles.button,{opacity : fadeAnim,transform:[{translateY:buttonY}]}]}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </Animated.View>
                </TapGestureHandler>


                <TapGestureHandler onHandlerStateChange={(() => onPress('1'))}>
                    <Animated.View style={[styles.button,{opacity : fadeAnim,transform:[{translateY:buttonY}]}]}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </Animated.View>
                </TapGestureHandler>

            </View>
            
            
            <Animated.View style={[styles.contentContainer , {zIndex:contentZIndex}]}  >

                <TapGestureHandler onHandlerStateChange={onClose}>
                    <Animated.View style={styles.closeButton}>
                        <Animated.Text style={{transform : [{rotate:closeButtonRotate}]}}>
                            X
                        </Animated.Text>
                    </Animated.View>
                </TapGestureHandler>
               

                <Animated.View   style={{opacity:textInputOpacity, transform: [{translateY: textInputY}]}} >
                    {toggleButt ? <Login />  : <Register/>}
                </Animated.View>

            </Animated.View>
            
            
        </View>
    )
}

 
const styles = StyleSheet.create({
    bgImage:{
        flex: 1, height: null, width: null
    },
    signInContainer:{
        width: 400,
        height: 400,
        backgroundColor: 'black',
    },
    button: {
        width:'70%' ,
        height:70 , 
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 10
    },
    buttonText:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    contentContainer: {
        height:height/3,
        justifyContent:'center' ,
         ...StyleSheet.absoluteFill, 
         top:height - height/3
    },
    closeButton: {
        height:40,
        width:40,
        backgroundColor: 'white',
        position: 'absolute',
        top: -20,
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 20,
        alignItems: 'center',
        right: ( width -30)  / 2

    },
    alertContainer:{
        ...StyleSheet.absoluteFill,
        zIndex:5,
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    }
}) 