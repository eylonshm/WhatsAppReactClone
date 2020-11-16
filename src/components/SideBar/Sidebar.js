import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import DonutLarge from '@material-ui/icons/DonutLarge'
import Chat from '@material-ui/icons/Chat'
import MoreVert from '@material-ui/icons/MoreVert'
import Search from '@material-ui/icons/Search'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { connect } from 'react-redux'
import SideBarChat from '../SidebarChat/SidebarChat'
import { db } from '../../firebase'
// import * as actions from '../../store/actions/index'

const Sidebar = (props) => {
    const [chats, setChats] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [searchIcon, setSearchIcon] = useState(true)

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot((snapshot) =>
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )

        return () => {
            unsubscribe()
        }
    }, [])

    const searchHandler = (event) => {
        setSearchInput(event.target.value)
    }

    const inputClickHandler = () => {
        console.log('Search Icon:' + searchIcon)
        setSearchIcon(!searchIcon)
    }

    return (
        <SideBarWrapper>
            <SideBarHeader>
                <Avatar src={props.user?.photoURL} />
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
                    {searchIcon ? <SearchIcon /> : <ArrowBackIcon />}
                    <SideBarSearchInput
                        placeholder="Search or start new chat"
                        value={searchInput}
                        onChange={(event) => searchHandler(event)}
                        onBlur={inputClickHandler}
                        onFocus={inputClickHandler}
                    />
                </SideBarSearchContainer>
            </SideBarSearch>
            <SideBarChats>
                <SideBarChat addNewChat />
                {chats.map((chat) => {
                    if (chat.data.name.toLowerCase().includes(searchInput.toLowerCase())) {
                        return <SideBarChat key={chat.id} id={chat.id} chatName={chat.data.name} />
                    }
                })}
            </SideBarChats>
        </SideBarWrapper>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSetCurrentChat: (chatID) => dispatch(actions.setCurrentChat(chatID)),
//     }
// }

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps)(Sidebar)

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
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 4px;
        opacity: 0.2;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        opacity: 0.2;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: rgb(245, 245, 245);
        opacity: 0.4;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        opacity: 0.2;
    }

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
const ArrowBackIcon = styled(ArrowBack)`
    color: #3fbaf4;
    padding: 10px;
    &::-webkit-transition: -webkit-transform 1s;
    &::-webkit-transform: rotate(40deg);
  
`
const SideBarSearchInput = styled.input`
    border: none;
    margin-left: 10px;
    border: none;
    outline: none;
`
