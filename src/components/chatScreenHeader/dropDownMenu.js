import React from 'react'

import {TouchableOpacity, View,Text} from 'react-native'
import {useDispatch} from 'react-redux'

import styles from './styles'
import {blockUser} from '../../redux/actions/chat'

const DropDownMenu = ({ menuVisible, setMenuVisible ,userId}) => {
    const dispatch = useDispatch()
    return (
        <>
        { menuVisible && 
                <TouchableOpacity
                onLongPress={() =>  {}}
                 onPress={() => setMenuVisible(false)} 
                 delayLongPress ={100}
                 activeOpacity={1} 
                 style={styles.dropDownContainer}
                 >

                    <View style={styles.dropDown}>
                    <TouchableOpacity onPress={() => dispatch(blockUser(userId))} style={styles.dropDownContentContainer}>
                            <Text style={styles.dropDownContentText}>
                                Block user
                            </Text>
                        </TouchableOpacity>


                    <TouchableOpacity style={styles.dropDownContentContainer}>
                        <Text style={styles.dropDownContentText}>
                            Block user
                            </Text>
                    </TouchableOpacity>

                    </View>
                </TouchableOpacity>

        }
        </>
    )

}
export default DropDownMenu