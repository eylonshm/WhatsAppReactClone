import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import picSrc from '../Functions/picSrcGenerator'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import { db } from '../../firebase'

const SidebarChat = ({ id, chatName, addNewChat, onSetCurrentChat }) => {
    const createNewChat = () => {}
    const [lastMessage, setLastMessage] = useState({})

    useEffect(() => {
        console.log('this is id:')
        console.log(`${id} `)
        const unsubscribe = db
            .collection('chats')
            .doc(`${id} `)
            .collection('messages')
            .orderBy('timeStamp', 'asc')
            .limit(1)
            .onSnapshot((snapshot) => {
                setLastMessage(
                    snapshot.docs.map((msg) => ({
                        authorID: msg.data().authorID,
                        messageContent: msg.data().messageContent,
                        timeStamp: msg.data().timeStamp,
                    }))
                )
            })
        return () => {
            unsubscribe()
        }
    }, [])

    return !addNewChat ? (
        <SideBarChatWrapper onClick={() => onSetCurrentChat(id)}>
            <Avatar src={picSrc()} />
            <SideBarLeft>
                <h2>{chatName}</h2>
                <p>Last Message</p>
            </SideBarLeft>
            <SideBarRight>
                <p>22:25</p>
            </SideBarRight>
        </SideBarChatWrapper>
    ) : (
        <SideBarChatWrapper onClick={createNewChat}>
            <h2>Add New Chat</h2>
        </SideBarChatWrapper>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSetCurrentChat: (chatID) => dispatch(actions.setCurrentChat(chatID)),
    }
}

export default connect(null, mapDispatchToProps)(SidebarChat)

const SideBarChatWrapper = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover {
        background-color: #ebebeb;
    }
`
const SideBarLeft = styled.div`
    margin-left: 15px;
    & > h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }
    & > p {
        color: rgba(0, 0, 0, 0.6);
    }
`
const SideBarRight = styled.div`
    padding: 0 5px;
    margin-left: auto;
    color: rgb(160, 160, 160);
    font-size: 13.5px;
`
