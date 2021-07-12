import React from 'react'

import { Text,View,Dimensions} from 'react-native'
import moment from 'moment'
import styles  from './styles'
import { useSelector } from 'react-redux'

const windowWidth = Dimensions.get('window').width;

const ChatMessage = (props) => {
    const chatInfo = useSelector(state => state.chat.loaded_chat_cross_user)
    const {message} = props
    const timeDate = moment()
   
    var duration = moment.duration(timeDate.diff(message.createdAt));
    var days = duration.asDays();


    
    const isMyMessage = () => {

        return message.ownerUserNumber === chatInfo.directUserCode
    }


    return (
        <View style={styles.container} key={message._id}>
            <View style={[styles.triangle,styles.arrowUpRight , {
                  position:'absolute',
                  borderRightColor : isMyMessage() ?'rgb(220,248,197)'  : 'white',
                  transform :  isMyMessage() ? [{rotateY:'180deg'}] :  [{rotateY:'0deg'}],
                  marginRight: isMyMessage() ? 0  :  windowWidth-30
            }]}/>
            <View style={[styles.messageBox , {
                backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                marginLeft: isMyMessage() ? 0  : 10,
                marginRight: isMyMessage() ? 10  : 0
            }]}>
                {isMyMessage()  ? null 
                 :(<Text style={styles.name}>{chatInfo.name}</Text> )
                 }
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>
                    {days< 7 
                    ?(moment(message.createdAt).fromNow()) 
                    :( moment(message.createAt).format('YYYY/MM/DD')) 
                    }
                </Text>  

            </View>

        </View>
    )
}

export default ChatMessage