import React, {useState} from "react";
import TodoList from "../../component/home/TodoList";
import './home.scss';

const Home = () => {

    const [commentToggle, setCommentToggle] = useState(false);
    const handleTodoOnClick = () => {
        setCommentToggle(!commentToggle);
    }

    return(
        <div className='site-wrapper'>
            <TodoList
                handleTodoOnClick={handleTodoOnClick}
            />
        </div>
    )
}

export default Home;