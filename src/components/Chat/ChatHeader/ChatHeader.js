import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import picSrc from '../../Functions/picSrcGenerator'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import MoreVert from '@material-ui/icons/MoreVert'

const ChatHeader = () => {
    useEffect(() => {
        console.log('ChatHeader is re-renderd')
    }, [])
    return (
        <ChatHeaderWrapper>
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
        </ChatHeaderWrapper>
    )
}

export default ChatHeader

const ChatHeaderWrapper = styled.div`
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
const SearchIcon = styled(Search)``
const MoreVertIcon = styled(MoreVert)``
