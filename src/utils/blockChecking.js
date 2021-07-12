// check if cross user blocked you
export const blockChecking = (chat , crossUser) => {
    if (crossUser?.directUserCode === 'user1'){
        if (chat.users.user1.blocked){
            return true
        }
        else{
            return false
        }
    }
    else if (crossUser?.directUserCode === 'user2'){
        if (chat.users.user2.blocked){
            return true
        }
        return false
    }
    else{
        return false
    }
}

// check if you block the cross user
export const reverseBlockChecking = (chat, crossUser) => {
    if (crossUser?.directUserCode === 'user1') {
        if (chat.users.user2.blocked) {
            return true
        }
        else {
            return false
        }
    }
    else if (crossUser?.directUserCode === 'user2') {
        if (chat.users.user1.blocked) {
            return true
        }
        return false
    }
    else {
        return false
    }
}


