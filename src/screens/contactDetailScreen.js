import React, { useState } from 'react'

import {Text} from 'react-native'
import {useSelector} from 'react-redux'

import ContactDetailComponent from '../components/contactDetail'

const ContactDetailScreen =  ()  => {

    const user = useSelector(state => state.auth.user)
        return (
            <ContactDetailComponent user={user}/>
        )

}

export default ContactDetailScreen