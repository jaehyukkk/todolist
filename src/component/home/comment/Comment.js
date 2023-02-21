import React from "react";
import './comment.scss';
const Comment = () => {
    return(
        <div className="comment-wrapper">
            <div className='comment-form'>
                <div className='inp-box'>
                    <input type='text' placeholder='댓글을 작성해주세요.' />
                </div>
                <div className='comment-submit'>
                    <button>완료</button>
                </div>
            </div>
        </div>
    )
}
export default Comment;
