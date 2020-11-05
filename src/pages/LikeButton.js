import React, { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${props => (props.liked ? "gray" : "red")};
`

export default function LikeButton() {
    const [liked, setLiked] = useState(false)
    const text = liked ? "싫어요" : "좋아요"
    return <div><StyledButton liked={liked} onClick={() => setLiked(!liked)}>{text}</StyledButton></div>
}