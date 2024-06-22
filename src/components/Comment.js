import { useEffect, useState, useRef } from "react";
import Action from "./Action";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";

const Comment = ({
    insertCommentHandler,
    editCommentHandler,
    deleteCommentHandler,
    comment
}) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    const handleNewComment = () => {
        setExpand(!expand);
        setShowInput(true);
    };

    const onAddComment = () => {
        console.log("comment: ", comment);
        if(editMode) {
            editCommentHandler(comment.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            insertCommentHandler(comment.id, input);
            setShowInput(false);
            setInput("");
        }

        if(editMode) setEditMode(false);
    };

    const handleDelete = () => {
        deleteCommentHandler(comment.id);
    };

    return (
        <div>
        <div className={comment?.id === 0 ? "inputContainer" : "commentContainer"}>
            {comment?.id === 0  ? (
            <>
                <input
                type="text"
                className="inputContainer__input first_input"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Your Comment Here..."
                />

                <Action
                className="reply comment"
                type="COMMENT"
                handleClick={onAddComment}
                />
            </>
            ) : (
            <>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span
                contentEditable={false}
                suppressContentEditableWarning={editMode}
                ref={inputRef}
                style={{ wordWrap: "break-word", fontWeight: "bold", marginBottom: "2px"}}
                >
                {comment.name}
                </span>

                <span
                contentEditable={false}
                suppressContentEditableWarning={editMode}
                ref={inputRef}
                style={{ wordWrap: "break-word", marginBottom: "2px"}}
                >
                {comment.timestamp}
                </span>
                </div>
                <span
                contentEditable={editMode}
                suppressContentEditableWarning={editMode}
                ref={inputRef}
                style={{ wordWrap: "break-word" }}
                >
                {comment.text}
                </span>

                <div style={{ display: "flex", marginTop: "5px" }}>
                {editMode ? (
                    <>
                    <Action
                        className="reply"
                        type="SAVE"
                        handleClick={onAddComment}
                    />
                    <Action
                        className="reply"
                        type="CANCEL"
                        handleClick={() => {
                        if (inputRef.current)
                            inputRef.current.innerText = comment.text;
                        setEditMode(false);
                        }}
                    />
                    </>
                ) : (
                    <>
                    <Action
                        className="reply"
                        type={
                        <>
                            {expand ? (
                            <UpArrow width="10px" height="10px" />
                            ) : (
                            <DownArrow width="10px" height="10px" />
                            )}{" "}
                            REPLY
                        </>
                        }
                        handleClick={handleNewComment}
                    />
                    <Action
                        className="reply"
                        type="EDIT"
                        handleClick={() => {
                        setEditMode(true);
                        }}
                    />
                    <Action
                        className="reply"
                        type="DELETE"
                        handleClick={handleDelete}
                    />
                    </>
                )}
                </div>
            </>
            )}
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
            {showInput && (
            <div className="inputContainer">
                <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onChange={(e) => setInput(e.target.value)}
                />
                <Action className="reply" type="REPLY" handleClick={onAddComment} />
                <Action
                className="reply"
                type="CANCEL"
                handleClick={() => {
                    setShowInput(false);
                    if (!comment?.replies?.length) setExpand(false);
                }}
                />
            </div>
            )}

            {comment?.replies?.map((cmnt) => {
            return (
                <Comment
                key={cmnt.id}
                insertCommentHandler={insertCommentHandler}
                editCommentHandler={editCommentHandler}
                deleteCommentHandler={deleteCommentHandler}
                comment={cmnt}
                />
            );
            })}
        </div>
        </div>
    )
};

export default Comment;