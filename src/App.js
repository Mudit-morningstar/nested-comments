import { useState } from "react";
import './App.css';
import Comment from "./components/Comment";
import useComment from "./hooks/useComment";
import comments from "./staticData/comments";

const commentDataToUse = {
  id: 0,
  replies: [...comments]
} 

function App() {
  const [commentsData, setCommentsData] = useState(commentDataToUse);

  const {insertComment, editComment, deleteComment} = useComment();

  const insertCommentHandler = (folderId, item) => {
    const structure = insertComment(commentsData, folderId, item);
    setCommentsData(structure);
  }

  const editCommentHandler = (folderId, item) => {
    const structure = editComment(commentsData, folderId, item);
    setCommentsData(structure);
  }

  const deleteCommentHandler = (folderId) => {
    const structure = deleteComment(commentsData, folderId);
    const temp = {...structure}
    setCommentsData(temp);
  }
  return (
    <div className="App">
      <Comment
        insertCommentHandler={insertCommentHandler}
        editCommentHandler={editCommentHandler}
        deleteCommentHandler={deleteCommentHandler}
        comment={commentsData}
      />
    </div>
  );
}

export default App;
