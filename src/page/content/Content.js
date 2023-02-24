import React, { useState } from "react";
import ContentForm from "../../component/content/ContentForm";

const Content = () => {
  const [commentToggle, setCommentToggle] = useState(false);
  const handleTodoOnClick = () => {
    setCommentToggle(!commentToggle);
  };

  return (
    <div className="site-wrapper">
      <ContentForm />
    </div>
  );
};

export default Content;
