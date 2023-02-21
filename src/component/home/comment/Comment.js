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

            <div className='comment-detail'>
                <div className='detail-info'>
                    <div className='writer'>
                        장재혁
                    </div>
                    <div className='date'>
                        2022.01.02
                    </div>
                </div>
                <div className='content'>
                    가나다라마바사
                </div>
            </div>

            <div className='comment-detail'>
                <div className='detail-info'>
                    <div className='writer'>
                        장재혁
                    </div>
                    <div className='date'>
                        2022.01.02
                    </div>
                </div>
                <div className='content'>
                    가나다라마바사
                </div>
            </div>
        </div>
    )
}
export default Comment;
