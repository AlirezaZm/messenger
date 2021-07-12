import React from 'react'
import { FlatList,View,Text , TextInput,TouchableOpacity, Keyboard , Animated,Dimentions, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import {useDispatch,useSelector} from 'react-redux'


import styles from './styles'
import { addPost, fetchAllPosts} from '../../redux/actions/post'
import PostItem from './postItem'

const {width,height} = Dimensions.get('window')

const postComponent = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.posts)
    const navigation = useNavigation()

    const bottom = React.useRef(new Animated.Value(0)).current;
    const [text , setText] = React.useState('')

    const POSTLISTHEIGHT = height - height / 2
    const [viewHeight, setviewHeight] = React.useState(POSTLISTHEIGHT)


    const textChange = (value) => {
        setText(value)
    }
    const onSubmit = () => {
        dispatch(addPost(text))
        setText('')
    }

    React.useEffect(() => {
        var show = Keyboard.addListener('keyboardDidShow' , showing)
        var hide = Keyboard.addListener('keyboardDidHide' , hiding)
    },[])
    React.useEffect(() => {
        dispatch(fetchAllPosts())
    },[])

    const showing = (event) => {
        setviewHeight(viewHeight - event.endCoordinates.height)
        Animated.timing(bottom, {
            toValue: -( event.endCoordinates.height+20 ),
            duration: 1,
            useNativeDriver: false
        }).start();
    }
    const hiding = (event) => {
        setviewHeight(POSTLISTHEIGHT)
        Animated.timing(bottom, {
            toValue: 0,
            duration: 1,
            useNativeDriver: false
        }).start();    
    }

    return (
        <View style={styles.container}>
            <View style={[styles.postListContainer , {height: viewHeight}]}>
                <View style={styles.postListContainerTitleContainer}>
                    <Text style={styles.postListTitleText}>Posts</Text>
                </View>
                <View style={styles.postListContentContainer}>
                    <FlatList
                    keyExtractor = {(item) => item._id}
                    data={posts}
                    renderItem = {({item}) => {
                        return <PostItem data={item} />
                    }}
                    />
                </View>
            </View>
            <Animated.View
                style={[styles.postCreateContainer ,{transform: [{translateY:bottom}] }]} 
                behavior='height'>
                <View style={styles.postCreateTitleContainer}>
                    <Text style={styles.postCreateTitleText}>Create your post</Text>
                </View>
                <View style={styles.postCreateContentContainer}>
                    <TextInput
                    placeholder='Write something'
                    style={styles.postCreateTextInput}
                    defaultValue= {text}
                    onChangeText = {textChange}  
                        />
                    <TouchableOpacity style={styles.iconContainer} onPress={onSubmit}>
                        <Icon name='send' size={20} color='white' />
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}

export default postComponent