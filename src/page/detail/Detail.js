import React, { useState } from "react";
import ContentDetail from "../../component/content/ContentDetail";
import "../home/home.scss";

const Detail = () => {
  const [commentToggle, setCommentToggle] = useState(false);
  const handleTodoOnClick = () => {
    setCommentToggle(!commentToggle);
  };

  return (
    <div className="site-wrapper">
      <ContentDetail />
    </div>
  );
};

export default Detail;
