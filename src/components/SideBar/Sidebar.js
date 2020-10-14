import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import DonutLarge from '@material-ui/icons/DonutLarge'
import Chat from '@material-ui/icons/Chat'
import MoreVert from '@material-ui/icons/MoreVert'
import Search from '@material-ui/icons/Search'
import picSrc from '../Functions/picSrcGenerator'
import SideBarChat from '../SidebarChat/SidebarChat'

const Sidebar = () => {
    return (
        <SideBarWrapper>
            <SideBarHeader>
                <Avatar src={picSrc()} />
                <SideBarHeaderRight>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </SideBarHeaderRight>
            </SideBarHeader>
            <SideBarSearch>
                <SideBarSearchContainer>
                    <SearchIcon />
                    <SideBarSearchInput placeholder="Search or start new chat" />
                </SideBarSearchContainer>
            </SideBarSearch>
            <SideBarChats>
                <SideBarChat addNewChat />
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
            </SideBarChats>
        </SideBarWrapper>
    )
}

export default Sidebar

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.25;
`
const SideBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-right: 1px solid lightgray;
`
const SideBarHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;
`
const SideBarSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 39px;
    padding: 10px;
`
const SideBarSearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
`
const SideBarChats = styled.div`
    background-color: white;
    flex: 1;
    overflow: hiden;
    // Scroll without ScrollBar
    // overflow: scroll;
    // ::-webkit-scrollbar {
    //     display: none;
`
const DonutLargeIcon = styled(DonutLarge)`
    // margin-right: 1.5vw;
    // font-size: 24px !importent;
`
const ChatIcon = styled(Chat)`
    // margin-right: 1.5vw;
    // font-size: 24px !importent;
`
const MoreVertIcon = styled(MoreVert)`
    // margin-right: 1.5vw;
    // font-size: 24px !importent;
`
const SearchIcon = styled(Search)`
    color: gray;
    padding: 10px;
`
const SideBarSearchInput = styled.input`
    border: none;
    margin-left: 10px;
`
