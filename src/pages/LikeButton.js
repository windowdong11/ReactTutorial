import React, { useState } from 'react'

export default function LikeButton() {
    const [liked, setLiked] = useState(false)
    const text = liked ? "싫어요" : "좋아요"
    const props = {
        onClick: () => setLiked(!liked),
        style: {
            backgroundColor: liked ? "gray" : "red"
        }
    }
    return <button {...props}>{text}</button>
}