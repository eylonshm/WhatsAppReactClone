import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Search from '@material-ui/icons/Search'
import MoreVert from '@material-ui/icons/MoreVert'

import picSrc from '../Functions/picSrcGenerator'

const Chat = () => {
    return (
        <ChatWrapper>
            <ChatHeader>
                <Avatar src={picSrc()} />
                <ChatHeaderInfo>
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </ChatHeaderInfo>
                <CharHeaderRight>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                </CharHeaderRight>
            </ChatHeader>
            <ChatBody></ChatBody>
            <ChatFooter></ChatFooter>
        </ChatWrapper>
    )
}

export default Chat

const ChatWrapper = styled.div`
    flex: 0.75;
`

const ChatHeader = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid lightgray;
`
const ChatHeaderInfo = styled.div`
    flex: 1;
    padding-left: 20px;

    & > h3 {
        margin-bottom: 3px;
        font-weight: 500;
    }
    & > p {
        color: gray;
    }
`
const CharHeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100px;
`

const ChatBody = styled.div``
const ChatFooter = styled.div``
const SearchIcon = styled(Search)``
const MoreVertIcon = styled(MoreVert)``
