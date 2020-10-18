import React from 'react'
import styled from 'styled-components'

const Message = () => {
    return (
        <MessageWrapper>
            <MessageContent>Hey Sup</MessageContent>
            <TimeStamp>22:55</TimeStamp>
        </MessageWrapper>
    )
}

export default Message

const MessageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    min-width: 150px;
    max-width: 550px;
    min-height: fit-content;
    min-height: 30px;
    background-color: white;
    padding: 1px;
    border-radius: 8px;
    word-wrap: break-word;
    box-shadow: 0px 1px 3px -2.5px black;
`
const MessageContent = styled.span`
    align-self: center;
    margin-left: 8px;
    maegin-right: 20px;
    padding: 5px;
`
const TimeStamp = styled.span`
    align-self: flex-end;
    padding: 0px 6px 2px 0px;
    font-size: 11px;
    color: #8c8c8c;
`
