import React from 'react'

import moment from 'moment'

import {Text,View,Image} from 'react-native'
import styles from './styles'


const postItem = ({data}) => {
    const userInfo = data.postOwnerInfo
    let avatar = 'http://' + userInfo?.avatar.slice(2)
    console.log(data.content)
    const timeDate = moment()
    var duration = moment.duration(timeDate.diff(data.CreatedAt));
    var days = duration.asDays();


    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                    <Text style={styles.headerTitle}>{userInfo.name}</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={styles.time}>
                        {days < 7
                            ? (moment(data.CreatedAt).fromNow())
                            : (moment(data.CreateAt).format('YYYY/MM/DD'))
                        }
                    </Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                        <Text style={styles.contentText}>{data.content}</Text>
            </View>
        </View>
    )
}


export default postItem