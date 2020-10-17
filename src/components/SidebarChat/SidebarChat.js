import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import picSrc from '../Functions/picSrcGenerator'

const SidebarChat = ({ id, chatName, addNewChat }) => {
    const createNewChat = () => {}

    return !addNewChat ? (
        <SideBarChatWrapper>
            <Avatar src={picSrc()} />
            <SideBarChatInfo>
                <h2>{chatName}</h2>
                <p>Last Message</p>
            </SideBarChatInfo>
        </SideBarChatWrapper>
    ) : (
        <SideBarChatWrapper onClick={createNewChat}>
            <h2>Add New Chat</h2>
        </SideBarChatWrapper>
    )
}

export default SidebarChat

const SideBarChatWrapper = styled.div`
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover {
        background-color: #ebebeb;
    }
`
const SideBarChatInfo = styled.div`
    margin-left: 15px;
    & > h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }
`
